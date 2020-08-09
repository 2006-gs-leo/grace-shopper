/* eslint-disable no-unused-expressions */
import {expect} from 'chai'
import {mount} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import waitForExpect from 'wait-for-expect'
import {Provider} from 'react-redux'
import * as rrd from 'react-router-dom'

const {MemoryRouter} = rrd

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const initialState = {
  users: []
}

import mockAxios from '../mock-axios'
import {setUsers, fetchUsers} from '../../app/redux/users'

import store from '../../app/store'

import rootReducer from '../../app/redux'
import {createStore} from 'redux'

const app = require('../../server')
const agent = require('supertest')(app)

const {db, User} = require('../../server/db')

const seed = require('../../seed')

// NOTE: Make sure you pay attention to the path below. This is where your React components should live!
// AllCampuses is the default export from that module, and it is connected to Redux.
// UnconnectedAllCampuses is a named export from that module, and it is NOT connected
// to Redux. We're testing BOTH of these components in here.
import AllUsers, {
  AllUsers as UnconnectedAllUsers
} from '../../app/components/AllUsers'
import AllCars from '../../app/components/AllCars'
import Routes from '../../app/components/Routes'

describe('Tier One: Users', () => {
  // We'll use this array of users as dummy data for testing purposes
  const users = [
    {
      id: 1,
      firstName: 'Jake',
      lastName: 'Armijo'
    },
    {
      id: 2,
      firstName: 'Alex',
      lastName: 'Armijo'
    }
  ]
  beforeEach(() => {
    // mockAxios ensures that when our client-side code requests data from the
    // server, the request is always successful (even if we haven't implemented)
    // our server yet.
    mockAxios.onGet('/api/users').replyOnce(200, users)
  })
  describe('<AllUsers /> component', () => {
    const getUsersSpy = sinon.spy()
    afterEach(() => {
      getUsersSpy.resetHistory()
    })

    // This test is interested in the unconnected AllUsers component. It is
    // exported as a named export in app/components/AllUsers.js
    it('renders the user passed in as props', () => {
      const wrapper = mount(
        <UnconnectedAllUsers users={users} getUsers={getUsersSpy} />
      )
      expect(wrapper.text()).to.include('Jake')
      expect(wrapper.text()).to.include('Alex')
      // The test is expecting an image for each campus, with src set to the
      // campus's imageUrl
      const images = wrapper.find('img').map(node => node.get(0).props.src)
      expect(images).to.include.members([
        '/images/Jake.png',
        '/images/Alex.jpeg'
      ])
    })

    it('renders DIFFERENT users passed in as props', () => {
      const differentUsers = [
        {
          id: 3,
          firstName: 'Pluto',
          lastName: 'Conservatory'
        },
        {
          id: 4,
          firstName: 'Art',
          lastName: 'Mercury'
        }
      ]
      const wrapper = mount(
        <UnconnectedAllUsers users={differentUsers} getUsers={getUsersSpy} />
      )
      expect(wrapper.text()).to.not.include('Jake')
      expect(wrapper.text()).to.not.include('Alex')
      expect(wrapper.text()).to.include('Pluto')
      expect(wrapper.text()).to.include('Art')
      // The test is expecting an image for each campus, with src set to the
      // campus's imageUrl
      const images = wrapper.find('img').map(node => node.get(0).props.src)
      expect(images).to.include.members([
        '/images/pluto.png',
        '/images/mercury.png'
      ])
    })

    xit('*** renders "No Campuses" if passed an empty array of campuses', () => {
      throw new Error('replace this error with your own test')
    })

    // In a later step, we'll create a thunk, and map that thunk to AllUsers
    // as getUsers. For right now, we just need to be sure the component
    // calls it after it mounts.
    it('calls this.props.getUsers after mount', async () => {
      mount(<UnconnectedAllUsers user={user} getUsers={getUsersSpy} />)
      await waitForExpect(() => {
        expect(getUsersSpy).to.have.been.called
      })
    })
  })

  describe('Redux', () => {
    let fakeStore
    beforeEach(() => {
      fakeStore = mockStore(initialState)
    })

    // Check out app/redux/users.js for these two tests
    describe('set/fetch users', () => {
      it('setUsers action creator returns a valid action', () => {
        expect(setUsers(users)).to.deep.equal({
          type: 'SET_USERS',
          users
        })
      })

      it('fetchUsers thunk creator returns a thunk that GETs /api/users', async () => {
        await fakeStore.dispatch(fetchUsers())
        const [getRequest] = mockAxios.history.get
        expect(getRequest).to.not.equal(undefined)
        expect(getRequest.url).to.equal('/api/users')
        const actions = fakeStore.getActions()
        expect(actions[0].type).to.equal('SET_USERS')
        expect(actions[0].users).to.deep.equal(users)
      })
    })

    describe('reducer', () => {
      let testStore
      beforeEach(() => {
        testStore = createStore(rootReducer)
      })

      it('*** returns the initial state by default', () => {
        const action = {type: 'DEFAULT', users}

        const prevState = testStore.getState()
        testStore.dispatch(action)
        // const newState = testStore.getState();

        expect(prevState.users).to.be.deep.equal([])
        // expect(newState.users).to.not.be.equal(prevState.users);
      })

      it('reduces on SET_USERS action', () => {
        const action = {type: 'SET_USERS', users}

        const prevState = testStore.getState()
        testStore.dispatch(action)
        const newState = testStore.getState()

        expect(newState.users).to.be.deep.equal(users)
        expect(newState.users).to.not.be.equal(prevState.users)
      })
    })
  })

  describe('Connect: react-redux', () => {
    // This test is expecting your component to dispatch a thunk after it mounts
    // Remember that getUsers prop from an earlier test? Now's a good time
    // for a mapDispatch.
    it('initializes users from the server when the application loads the /users route', async () => {
      const reduxStateBeforeMount = store.getState()
      expect(reduxStateBeforeMount.users).to.deep.equal([])
      mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/users']}>
            <AllUsers />
          </MemoryRouter>
        </Provider>
      )
      await waitForExpect(() => {
        const reduxStateAfterMount = store.getState()
        expect(reduxStateAfterMount.users).to.deep.equal(users)
      })
    })

    // This test is expecting your component to render the users from the
    // Redux store.  Now's a good time for a mapState.
    it('<AllUsers /> renders campuses from the Redux store', async () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/users']}>
            <AllUsers />
          </MemoryRouter>
        </Provider>
      )
      await waitForExpect(() => {
        wrapper.update()

        const {users: reduxUsers} = store.getState()
        reduxUsers.forEach(reduxUser => {
          expect(wrapper.text()).to.include(reduxUser.firstName)
        })
      })
    })
  })

  describe('Navigation', () => {
    beforeEach(() => {
      sinon.stub(rrd, 'BrowserRouter').callsFake(({children}) => {
        return <div>{children}</div>
      })
    })
    afterEach(() => {
      rrd.BrowserRouter.restore()
    })

    // This test expects that you've set up a Route for AllCampuses.
    // You should take a look at app/components/Routes.js
    it('renders <AllUser /> at /users', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/users']}>
            <Routes />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(AllUsers)).to.have.length(1)
      expect(wrapper.find(AllCars)).to.have.length(0)
    })

    xit('*** navbar has links to "/users" and "/" (homepage)', () => {
      throw new Error('replace this error with your own test')
    })
  })

  describe('Express API', () => {
    // Let's test our Express routes WITHOUT actually using the database.
    // By replacing the findAll methods on our Sequelize models with a spy,
    // we can ensure that our API tests won't fail just because
    // our Sequelize models haven't been implemented yet.
    const {findAll: userFindAll} = User
    beforeEach(() => {
      User.findAll = sinon.spy(() => users)
    })
    afterEach(() => {
      User.findAll = userFindAll
    })

    // Consider writing your GET route in server/api/users.js. And don't
    // forget to apply the express router to your API in server/api/index.js!
    it('GET /api/users responds with all users', async () => {
      const response = await agent.get('/api/users').expect(200)
      expect(response.body).to.deep.equal([
        {
          id: 1,
          firstName: 'Jake',
          lastName: 'Armijo'
        },
        {
          id: 2,
          firstName: 'Alex',
          lastName: 'Armijo'
        }
      ])
      expect(User.findAll.calledOnce).to.be.equal(true)
    })
  })

  describe('Sequelize Model', () => {
    before(() => db.sync({force: true}))
    afterEach(() => db.sync({force: true}))

    it('has fields firstName, lastName, image, email', async () => {
      const user = await User.create({
        firstName: 'Jake',
        lastName: 'Armijo',
        image: '/images/jupiter.png',
        email: 'jake@jake.com'
      })
      expect(user.firstName).to.equal('Jake')
      expect(user.lastName).to.equal('Armijo')
      expect(user.image).to.equal('/images/jupiter.png')
      expect(user.email).to.equal('jake@jake.com')
    })

    xit('*** requires name and address', async () => {
      const user = await User.create({
        firstName: '',
        lastName: '',
        image: '/images/jupiter.png',
        email: 'jake@jake.com'
      })
      try {
        await user.validate()
        throw Error('validation should have failed with empty name and address')
      } catch (err) {
        expect(err.message).to.contain('Validation allowNull on name')
        expect(err.message).to.contain('Validation allowNull on address')
      }
    })

    it('firstName and lastName cannot be empty', async () => {
      const user = User.build({name: '', address: ''})
      try {
        await user.validate()
        throw Error(
          'validation should have failed with empty firstName and lastName'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation notEmpty on firstName')
        expect(err.message).to.contain('Validation notEmpty on lastName')
      }
    })

    it('default imageUrl if left blank', async () => {
      const user = User.build({
        firstName: 'Jake',
        lastName: 'Armijo'
      })
      await user.validate()
      expect(user.image).to.be.a('string')
      expect(user.image.length).to.be.greaterThan(1)
    })
  })

  describe('Seed file', () => {
    beforeEach(seed)

    it('populates the database with at least three users', async () => {
      const seededUsers = await User.findAll()
      expect(seededUsers).to.have.lengthOf.at.least(3)
    })
  })
})
