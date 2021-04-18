import React, {useEffect} from 'react'
import ReactDom from 'react-dom'
import sidebar_logo from '../images/sibe_bar_logo.png'
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin} from 'react-icons/ti';


const sidebar_styles = {
    position: 'fixed',
    width: '380px',
    height: '100vh',
    transform: 'translateX(100%)',
    top: '0%',
    right: '0%',
}

export default function Sidebar({open, Cancel, children}) {
    useEffect(() => {
        var alvo = document.getElementById('sidebar_styles');

    if(!open){
        alvo.style.transform = "translateX(100%)"
    }else{
        alvo.style.transform = "translateX(0%)"

    }
    });
    return ReactDom.createPortal(
        <>
           <div className="sidebar_styles" id="sidebar_styles" style={sidebar_styles}>
               {children}
               <div className="sidebar_content">
                    
                        <img src={sidebar_logo} alt=""/>
                        <div className="sidebar_pages_link">
                            <a>HOME</a>
                            <a>SERVICES</a>
                            <a>ABOUT US</a>
                            <a>BLOG</a>
                            <a>PRESS RELEASES</a>
                            <a>OUR PARTNERS</a>
                            <a>PRIVACY POLICY</a>
                            <a>CAREER OPPORTUNIIES</a>
                            <a>CONTACT US</a>
                        </div>

                        <div className="sidebar_bottom_content">
                            <span>Signup for newsletter</span>
                            
                            <div className="sidebar_social_icon_box">
                                <div className="sidebar_social_icon sidebar_facebook_icon">
                                    <a><TiSocialFacebook/></a>
                                </div>

                                <div className="sidebar_social_icon sidebar_linkedin_icon">
                                    <a><TiSocialLinkedin/></a>
                                </div>
                                
                                <div className="sidebar_social_icon sidebar_twitter_icon">
                                    <a><TiSocialTwitter/></a>
                                </div>
                            </div>

                            <span>&copy; <b className="green_smartage">SmartAge Solution</b> 2017</span>

                        </div>
                    
               </div>
           </div> 
        </>,
        document.getElementById('root')
    )
}
