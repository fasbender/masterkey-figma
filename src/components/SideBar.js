import React from 'react'


const SideBar = () => {

    const navItemsInfo = [
        { name: "Home", icon: "home.png" },
        { name: "Explore", icon: "explore.png" },
        { name: "Saved", icon: "saved.png" },
        { name: "Selling", icon: "selling.png"  },
        { name: "Profile", icon: "profile.png"  },
        { name: "History", icon: "history.png"  },
        { name: "Contact us", icon: "messages.png"  },
        { name: "Setting", icon: "settings.png"  },
];

  return (
    <div className='sideBar'>
        <div className='logo'>
            <img src={process.env.PUBLIC_URL + './assets/logo.png'} alt="logo" />
            <span>MK Sounds</span>
        </div>
        <div>
            <ul className='nav'>
                {navItemsInfo.map((navItem, index) => (
                    <div>
                        <li key={index}>{navItem.name}</li>
                        <img src={process.env.PUBLIC_URL + `./assets/${navItem.icon}`} alt="" />
                    </div>
                ))}
            </ul>
        </div>
        <div>
            <img src={process.env.PUBLIC_URL + './assets/need_help.png'} alt="needHelp" />
        </div>
    </div>
  )
}

export default SideBar