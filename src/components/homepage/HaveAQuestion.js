import React from 'react'

export default function HaveAQuestion() {
    return (
        <div className="form">
            <div className="form_top">
                <h3>Have a question?</h3>
                <h3>Don’t be afraid to drop us a line. We love making new friends.</h3>
            </div>
            <div className="form_box">
                    <input type="text" placeholder="Your name" required/>
                    <input type="text" placeholder="Your email address" required/>
                    <textarea placeholder="Your comment"></textarea>
                    <button className="form_btn">SUBMIT</button>
            </div>
                <div className="call_us">
                    <h6>Or,Just call us:<span>(212) 7199521</span></h6>
                </div>
        </div>
    )
}
