import React from 'react';
// import HomeIcon from '@material-ui/icons/Home';
import HomeIcon from '@mui/icons-material/Home';

// import WhatshotIcon from '@material-ui/icons/Whatshot';
import WhatshotIcon from '@mui/icons-material/Whatshot';

// import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

// import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

// import HistoryIcon from "@material-ui/icons/History";
import HistoryIcon from '@mui/icons-material/History';

// import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

// import WatchLaterIcon from "@material-ui/icons/WatchLater";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

// import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

// import ExpandMoreOutLinedIcon from "@material-ui/icons/ExpandMore";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarRow from './SidebarRow';

import './Sidebar.css';

function Sidebar() {
    return (
       <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon}title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltIcon} title="Liked video" />
            <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
            <hr/>
        </div>
    )
}

export default Sidebar