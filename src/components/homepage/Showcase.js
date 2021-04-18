import React, {useState, useEffect} from 'react'
import './Estilos.css'
import './Responsiveness.css'
import Logo from '../images/SASLogo.png'
import WeGrowBrands from '../images/we-grow-brands.png'
import { GoMail } from 'react-icons/go';
import{ FiMenu } from 'react-icons/fi'
import{ RiArrowLeftLine, RiCloseFill, RiArrowRightLine } from 'react-icons/ri'
import{ BiMessageDetail } from 'react-icons/bi'
import Sidebar from './Sidebar'
import SignupPopUp from './SignupPopUp'


export default function Showcase() {
    const [menuicon, setMenuicon] = useState(<FiMenu/>);
    const [sideBarArrowIcon, setSideBarArrowIcon] =useState(<RiCloseFill/>);
    const [showSidebar,setShowSidebar] = useState(false);
    const [showPopup,setShowPopup] = useState(false);
    
    useEffect(() => {
        document.getElementById('menuicon_toggle').addEventListener('mouseover', ()=>{
            setMenuicon(<RiArrowLeftLine/>)
        });
        document.getElementById('menuicon_toggle').addEventListener('mouseleave', ()=>{
            setMenuicon(<FiMenu/>)
        });

        document.getElementById('sidebar_cancel_btn_toggle').addEventListener('mouseenter', () =>{
            setSideBarArrowIcon(<RiArrowRightLine/>)
        });
        document.getElementById('sidebar_cancel_btn_toggle').addEventListener('mouseleave', ()=>{
            setSideBarArrowIcon(<RiCloseFill/>)
        });
    },[])
    return (
        <div className="show_case">
            {/* <div className="container"> */}
                <div className="showcase_topbar">
                    <div className="logo"><img src={Logo} alt=""/></div>
                    <span>
                    <h5 onClick={() => setShowPopup(true)}><GoMail className="mail_icon"/>Signup for our newsletter</h5>
                    <div className="menu" id="menuicon_toggle" onClick={() => setShowSidebar(true)}>{menuicon}</div>
                    </span>
                </div>

                <SignupPopUp open = {showPopup} Cancel={() => setShowPopup(false)}>
                    <button className="popup_cancel_btn" onClick={() => setShowPopup(false)}>{sideBarArrowIcon}</button>
                    
                </SignupPopUp>

                <Sidebar open = {showSidebar} Cancel = {() => setShowSidebar(false)}>
                    <div className="sidebar_cancel_btn_box">
                        <button className="sidebar_cancel_btn" id="sidebar_cancel_btn_toggle" onClick={() => setShowSidebar(false)}>{sideBarArrowIcon}</button>
                    </div>
                </Sidebar>



                <div className="showcase_content">
                    <img src={WeGrowBrands} alt=""/>
                    <button>find out how</button>
                </div>
            {/* </div> */}
            <div className="new_message_fixed"><BiMessageDetail/></div>

        </div>
    )
}
