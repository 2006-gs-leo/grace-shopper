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
        <span className="seperationBar">|</span>

        <a href="/referral" target="_self" rel="">
          REFERRAL PROGRAM
        </a>
        <span className="seperationBar">|</span>
        <a
          href="https://investors.carvana.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          INVESTORS
        </a>
        <span className="seperationBar">|</span>
        <a href="/research" target="_blank" rel="noopener noreferrer">
          BLOG
        </a>
        <span className="seperationBar">|</span>
        <a className="seperationBar" href="/patents" target="_self" rel="">
          PATENTS
        </a>
        <span className="seperationBar">|</span>
        <div className="socialmediaicon">
          <a className="socialmediaicons" href="https://www.facebook.com/">
            <img className="socialmediaicons" src="facebook-logo-white.png" />
          </a>
          <a className="socialmediaicons" href="https://twitter.com/">
            <img
              className="socialmediaicons"
              src="twitter-icon-png-white.png"
            />
          </a>
          <a className="socialmediaicons" href="https://www.pinterest.com/">
            <img className="socialmediaicons" src="pinterest-white- logo.png" />
          </a>
          <a className="socialmediaicons" href="https://www.linkedin.com/">
            <img
              className="socialmediaicons"
              src="linkedin-icon-white-png.png"
            />
          </a>
          <a className="socialmediaicons" href="https://www.instagram.com/">
            <img className="socialmediaicons" src="instagram-logo-png.png" />
          </a>
          <span className="botInfoAtags">|</span>
        </div>
        <div className="bottNavthingy">
          Copyright © 2020 JDB. All Rights Reserved.
          <div>
            <a href="/TermsofUseandPrivacyPolicy" target="_self" rel="">
              Terms of Use and Privacy Policy
            </a>
            <span className="botInfoAtags">|</span>

            <a
              className="botInfoAtags"
              href="/FinancialPrivacyPolicy"
              target="_self"
              rel=""
            >
              Financial Privacy Policy
            </a>
            <span className="botInfoAtags">|</span>
            <a
              href="/DoNotSellMyInfo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Do Not Sell My Info
            </a>
            <span className="botInfoAtags">|</span>
            <a href="/CodeofConduct" target="_blank" rel="noopener noreferrer">
              Code of Conduct
            </a>
            <span className="botInfoAtags">|</span>
            <div>
              <a href="/Accessibility" target="_self" rel="">
                Accessibility
              </a>
              <span className="botInfoAtags">|</span>
              <a href="/SiteMap" target="_self" rel="">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
