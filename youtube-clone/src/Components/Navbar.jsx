import React from 'react'



const Navbar = () => {
    return (
        <div>
            <nav className='Navbar'>
                <div className='Nav1'>
                    <div>Bars</div>
                    <div className='Logo'>
                        <img src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'></img>
                    </div>

                </div>

                <div className='Nav2'>
                    <div>Search</div>
                    <div>Magnify</div>
                    <div>Voice</div>
                </div>

                <div className='Nav3'>
                    <div>VideoCall</div>
                    <div>Notification</div>
                    <div>Account</div>
                </div>
            </nav>
            <div className='Nav4'>
                    <button>All</button>
                    <button>Sci-Fi</button>
                    <button>Live</button>
                    <button>Stock Markets</button>
                    <button>Game Shows</button>
                    <button>Music</button>
                    <button>Films</button>
                    <button>Reality</button>
                    <button>Comedy</button>
                    <button>Podcasts</button>
                    <button>Table Tennis</button>
                    <button>Trick Shots</button>
                    <button>Mr Beast</button>
                    <button>Fullstack</button>
                    <button>Trailers</button>
                    <button>Next</button>
                </div>
        </div>
    )
}

export default Navbar