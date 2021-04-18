import React from 'react'
import ReactDom from 'react-dom'
import Signup_image from '../images/signup_for.jpg'
const Popup_styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    // padding: '50px',
    zIndex: 1000
}
const Popup_background = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

export default function SignupPopUp({open, Cancel, children}) {
    if(!open) return null
    return ReactDom.createPortal(
        <>
            <div style={Popup_background}/>
            <div className="Popup_styles" style={Popup_styles}>
                {children}
                <div className="popup_content">
                    <img src={Signup_image} alt=""/>
                    <p>Receive our latest articles, news, and updates.</p>
                    <input type="text" placeholder="Your Email Adress..."/>
                    <button>SIGN UP</button>
                </div>
            </div>
        </>,
        document.getElementById('root')
    )
}
