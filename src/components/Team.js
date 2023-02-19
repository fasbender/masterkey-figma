import React from 'react'

const Team = () => {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Team Awesome</h1>
        <br /><br /><br /><br /><br />
        <div className='team'>
            <div className='team-pic'>
                <img src={process.env.PUBLIC_URL + './assets/team1.png'} alt="" />
                <img src={process.env.PUBLIC_URL + './assets/team2.png'} alt="" />
                <img src={process.env.PUBLIC_URL + './assets/team3.png'} alt="" />
            </div>
            <div className='team-desc'>
                <div>
                    <span>ROBERT MCGRATH</span>
                    <span>Founder</span>
                </div>
                <div>
                    <span>MICHELLE MAGER</span>
                    <span>Marketing Head</span>
                </div>
                <div>
                    <span>PAUL CARTER</span>
                    <span>Support Manager</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team