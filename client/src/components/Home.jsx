import React from 'react'
import greenBg from '../assets/bg-green.png'
import johnKeats from '../assets/john_keats.jpg'
function Home() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ marginTop: '20px', marginBottom: '20px', paddingLeft: "40px", height: '62vh', width: '80vw', backgroundImage: `url(${greenBg})`, backgroundSize: "cover" }}>
                <div><input type="text" placeholder="Search Here" style={{ paddingLeft: "55px", width: "50vw", marginTop: "40px", marginBottom: "40px", border: "none", position: "absolute", left: "-15px", height: "30px", borderRadius: "20px" }} /></div>
                <p style={{ marginTop: "100px", fontSize: "15px" }}>I bow to thee,</p>
                <h1 style={{ fontSize: "80px" }}>Renaissance</h1>
                <p style={{ fontSize: "15px" }}>Movement that changed the fate of a continent sunken
                    into backwaters</p>
                <div style={{marginTop: "15px"}}>
                    <button style={{ background: "#3F5F4F", border: "2px solid #3F5F4F", color: "rgb(230, 240, 240)", borderRadius: "3px", padding: "5px 9px", marginRight: "10px"}}>Dashboard</button>
                    <button style={{ background: "none", border: "2px solid #3F5F4F", borderRadius: "3px", padding: "4px 9px" }}>How to Start?</button>

                </div>
            </div>
            <div style={{ backgroundImage: `url(${johnKeats})`, width: "350px", backgroundSize: "cover", height: "350px", borderRadius: "50%", position: "absolute", right: "80px", marginTop: "30px", border: "30px solid #97D4A6" }}>
            </div>
        </div>
    )
}

export default Home
