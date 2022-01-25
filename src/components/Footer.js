import React from "react"
import zomatoLogo from "../image/ZomatoLogo.png"
import fbLogo from "../image/Facebook_Icon.png"
import twitterLogo from "../image/Twitter_Icon.png"
import instaLogo from "../image/Instagram_Icon.png"
import appStoreLogo from "../image/app-store.png"
import googlePlayLogo from "../image/google-play.png"

export default function Footer(){
    return (
        <div className="footer">
            <img src={zomatoLogo} alt="logo" className="footer--logo" />
            <div className="footer--section">
                <div className="footer--content">
                    <h4>COMPANY</h4>
                    <p>Who We Are</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Report Fraud</p>
                    <p>Contact</p>
                </div>
                <div className="footer--content">
                    <h4>FOR FOODIES</h4>
                    <p>Code of Conduct</p>
                    <p>Community</p>
                    <p>Blogger</p>
                    <p>Mobile Apps</p>
                </div>                
                <div className="footer--content">
                    <h4>FOR RESTAURANTS</h4>
                    <p>Add restaurant</p>
                    <br/>
                    <h4>FOR ENTERPRISES</h4>
                    <p>Zomato for Work</p>
                </div>                
                <div className="footer--content">
                    <h4>FOR YOU</h4>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Security</p>
                    <p>Sitemap</p>
                </div>
                <div className="footer--content">
                    <h4>SOCIAL LINKS</h4>
                    <div className="socialMediaLogo">
                        <img src={fbLogo} alt="social media handles" />
                        <img src={twitterLogo} alt="social media handles" />
                        <img src={instaLogo} alt="social media handles" />
                    </div>
                    <img src={appStoreLogo} alt="App Store" className="storeLogo" />
                    <img src={googlePlayLogo} alt="Google Play" className="storeLogo" />
                </div>
            </div>
            <hr/>
            <p>All rights reserved</p>
        </div>
    )
}