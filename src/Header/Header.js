import React, { useState } from "react";
import './Header.css'
// import MenuIcon from "@material-ui/icons/Menu";
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from '@mui/icons-material/Search';

// import VideoCallIcon from "@material-ui/icons/VideoCall";
import VideoCallIcon from '@mui/icons-material/VideoCall';

// import AppsIcon from "@material-ui/icons/Apps";
import AppsIcon from '@mui/icons-material/Apps';

// import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsIcon from '@mui/icons-material/Notifications';

// import Avatar from "@material-ui/core/Avatar";

import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className= "header">
            <div className="header__left">
                 <MenuIcon/>
                 <Link to="/"> 
                     <img className="header__logo" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png" alt="" />
                 </Link>
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header__inputButton"/>
                    </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar src="https://www.cnet.com/a/img/resize/58b4427d5988522c975bbac22b807c73fd501af2/hub/2020/06/10/06f2b84a-2241-4567-a2a5-611ebb1e2650/gettyimages-1129377183.jpg?auto=webp&fit=crop&height=675&width=1200" alt=""/>
            </div>
       </div>    
        
    )
}

export default Header;