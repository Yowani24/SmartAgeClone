import React from 'react'
import logo from '../images/SASLogo.png'
import facebookPartner from '../images/facebook-partner.jpg'
import bingAdsBadge from '../images/bing_ads_badge-1.png'
import blueSeal from '../images/blue-seal-293-61-whitetxt-bbb-173046.png'
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti';

export default function Footer() {
    return (
        <div className="footer_sec">
            <div className="footer_logo_box">
                <img className="footer_logo" src={logo} alt=""/>
            </div>
            <div className="footer_boxes">
                <div className="footer_box footer_box_1">
                    
                    <span className="footer_title">LOCATION</span><br/>
                    <span className="footer_content">
                        New York Office<br/>
                        42W38th Street<br/>
                        Suite 1201<br/>
                        New York, NY10018<br/>
                        (212) 719 9521<br/><br/>
                        Brazil Office<br/>
                        Rua da Assembleia, 11 - 11th floor<br/>
                        Downtown - Rio de Janeiro<br/>
                        RJ 20011-001<br/>
                        <div className="social_icon_box">
                            <div className="social_icon">
                                <div className="social_icon_circ icon_slide_top"><a><TiSocialFacebook/></a></div>
                                <div className="social_icon_circ social_icon_circ_facebook"><a><TiSocialFacebook/></a></div>
                            </div>
                            <div className="social_icon">
                                <div className="social_icon_circ icon_slide_top"><a><TiSocialGooglePlus/></a></div>
                                <div className="social_icon_circ social_icon_circ_google"><a><TiSocialGooglePlus/></a></div>
                            </div>
                            <div className="social_icon">
                                <div className="social_icon_circ icon_slide_top"><a><TiSocialTwitter/></a></div>
                                <div className="social_icon_circ social_icon_circ_twitter"><a><TiSocialTwitter/></a></div>
                            </div>
                            <div className="social_icon">
                                <div className="social_icon_circ icon_slide_top"><a><TiSocialLinkedin/></a></div>
                                <div className="social_icon_circ social_icon_circ_linkedin"><a><TiSocialLinkedin/></a></div>
                            </div>
                            <div className="social_icon">
                                <div className="social_icon_circ icon_slide_top"><a><TiSocialInstagram/></a></div>
                                <div className="social_icon_circ social_icon_circ_instagram"><a><TiSocialInstagram/></a></div>
                            </div>
                            
                        </div>
                    </span>
                </div>
                <div className="footer_box footer_box_2">
                    <span className="footer_title">QUICK LINKS</span><br/>
                    <span className="footer_content">
                        Web Design & Development<br/>
                        Search Engine Optimization<br/>
                        Pay-Per-Click Advertsing<br/>
                        Social Media Marketing<br/>
                        Email Markrting-forjewelers<br/>
                        Reputation Management<br/>
                        The Company<br/>
                        Contact Us<br/>
                    </span>
                </div>
                <div className="footer_box footer_box_3">
                    <span className="footer_title">OUR SPECIALIZATIONS</span><br/>
                    <span className="footer_content">
                    <img src={facebookPartner} alt=""/><br/>
                    <img src={bingAdsBadge} alt=""/><br/><br/>
                    <img src={blueSeal} alt=""/><br/>
                    </span>
                </div>
                <div className="footer_box footer_box_4">
                    <span className="footer_title">FOLLW US ON INSTAGRAM</span><br/>
                </div>
            </div>
            <div className="footer_bottom"><p>&copy; Smart Age Solutions 2020, All Rights Reserved</p></div>
        </div>
    )
}
