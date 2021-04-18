import React from 'react'
import whoWeAre_image from '../images/who-we-are.png'

export default function WhoWeAre() {
    return (
        <div>
            <div className="who_we_are_top">
                <img src={whoWeAre_image} alt=""/>
                <p>Smart Age is a full service digital marketing agency based in New York City. Our products and services are constantly evolving to fit the needs of the ever-changing tech landscape. Our job is to help you create the future for your brand and business.</p>
                <span>Read more about us</span>
            </div>
            <div className="who_grid_area">
                <div className="who_left_side">
                    <div className="who_grid who_grid_1">
                        <div className="grid_container">
                            <h3>We made the<br/> All-Star team</h3>
                            <p>Our clients judge us by our results. Our passion is to help businesses grow, move ahead of their competitors and stay there.</p>
                            <span>Learn about the Google All-Stars Competition</span>
                        </div>
                    </div>
                    <div className="who_grid who_grid_2"></div>
                    <div className="who_grid who_grid_3"></div>
                    <div className="who_grid who_grid_4">
                    <div className="grid_container">
                            <h3>Smart Age named a premier Google partner</h3>
                            <p>Our dedication to digital media has earned us a new, prestigious award from our friends at Google.</p>
                            <span>Learn More</span>
                        </div>
                    </div>
                </div>
                <div className="who_right_side">

                </div>
            </div>
        </div>
    )
}
