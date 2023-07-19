import React from 'react'
import './styles.css'

function Footer() {
    const nowTime = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = (nowTime > openHour) && (nowTime < closeHour);
    return (
        <div className='footer-container'>
            <h2 style={{ textAlign: "center", backgroundColor: "#D4E2D4" }}>
                {/* {new Date().getHours() > 22 || new Date().getHours() < 10 ? <i>We are not currently open</i> : <i>We are currently open</i>} */}
                {!isOpen ? <i>We are <span>NOT</span> currently open</i> : <i>We are currently open.</i>}
            </h2>
        </div>
    )
}

export default Footer