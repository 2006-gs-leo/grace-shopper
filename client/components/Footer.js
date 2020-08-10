import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="mainFootDiv">
      <div className="footerdiv">
        <div className="financedivmain">
          <ul className="financedivmain">
            <h5>FINANCE</h5>
            <ul>
              <li>
                {' '}
                <a>Why Finance with JDB</a>
              </li>
              <li>
                {' '}
                <a>Get Pre-Qualified</a>
              </li>
              <li>
                {' '}
                <a>Auto-Loan Calculator</a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="tradeandsell">
          <ul className="financedivmain">
            <h5>TRADE/SELL</h5>
            <li>
              {' '}
              <a>Get an Offer</a>
            </li>
          </ul>
        </div>
        <div className="financedivmain">
          <ul className="financedivmain">
            <h5>HOW IT WORKS</h5>
            <li>
              {' '}
              <a>How JDB works</a>{' '}
            </li>
            <li>
              {' '}
              <a>Certified cars</a>{' '}
            </li>
            <li>
              {' '}
              <a>Referrals</a>{' '}
            </li>
          </ul>
        </div>
        <div className="financedivmain">
          <ul className="financedivmain">
            <h5>ABOUT JDB</h5>
            <li>
              {' '}
              <a>About Us</a>
            </li>
            <li>
              {' '}
              <a>Logistical Hubs</a>
            </li>
            <li>
              {' '}
              <a>Customer Reviews</a>
            </li>
            <li>
              {' '}
              <a>Vehicle Protection</a>
            </li>
            <li>
              {' '}
              <a>Careers</a>
            </li>
          </ul>
        </div>

        <div className="supportdiv">
          <h5>SUPPORT</h5>
          <div className="contactus">FAQ &amp; Contact Us</div>
          <h5 className="contactus">OTHER</h5>
          <div>
            <a href="/partner-with-us" target="_self">
              partnerships@jdb.com
            </a>
          </div>
          <div>
            <a href="/partner-with-us" target="_self">
              media@jdb.com
            </a>
          </div>
          <div>
            <a href="/partner-with-us" target="_self">
              realestate@jdb.com
            </a>
          </div>
          <img
            className="BBClogo"
            src="https://www.bbb.org/TerminusContent/dist/img/business-profile/accreditation/AB-seal-horz.svg"
          />
        </div>
      </div>
      <div className="bottombarinfo">
        <a href="/cars" target="_self" rel="">
          SEARCH CARS
        </a>
        <span>|</span>

        <a className="botInfoAtags" href="/referral" target="_self" rel="">
          REFERRAL PROGRAM
        </a>
        <span>|</span>
        <a
          href="https://investors.carvana.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          INVESTORS
        </a>
        <span>|</span>
        <a href="/research" target="_blank" rel="noopener noreferrer">
          BLOG
        </a>
        <span>|</span>
        <a href="/patents" target="_self" rel="">
          PATENTS
        </a>
        <span>|</span>
        <div className="socialmediaicon">
          <a className="facebookIcon" href="https://www.facebook.com/">
            facebook
          </a>
          <a className="twitterIcon" href="https://twitter.com/">
            twitter
          </a>
          <a className="pintrestIcon" href="https://www.pinterest.com/">
            pintrest
          </a>
          <a className="linkedin" href="https://www.linkedin.com/">
            linkedin
          </a>
          <a className="instagram" href="https://www.instagram.com/">
            instagram
          </a>
        </div>
        <div className="sc-hSdWYo hckRsN sc-bwzfXH lcIaHP">
          Copyright © 2020 JDB. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
