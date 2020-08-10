/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as MainPage} from './MainPage'
export {default as SingleCarView} from './SingleCarView'
export {default as EditCar} from './EditCar'
export {default as AddCar} from './AddCar'
export {default as AboutUs} from './AboutUs'
export {default as HowItWorks} from './HowItWorks'
export {default as SupportAndContact} from './SupportAndContact'
export {Login, Signup} from './auth-form' // this is where we export the login form
