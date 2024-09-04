import React from 'react';
// import TuneOutlinedIcon from '@material-ui/icons/Tune';
import TuneIcon from '@mui/icons-material/Tune';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2> 
            </div>
            <hr/>

            <ChannelRow
            image="https://www.cnet.com/a/img/resize/58b4427d5988522c975bbac22b807c73fd501af2/hub/2020/06/10/06f2b84a-2241-4567-a2a5-611ebb1e2650/gettyimages-1129377183.jpg?auto=webp&fit=crop&height=675&width=1200"
            channel="Learn Programming"
            verified
            subs="1000K"
            noOfVideos={200}
            description="If you want to learn coding,then you are at the right place.Here you will learn Important Tips and Tricks related to coding"
            />
            <hr/>

            <VideoRow
            views="100M"
            subs="200K"
            description="Let's Learn Together How to Build Websites using React.."
            timestamp="59 second ago"
            channel="Shital Modhavadiya"
            title="Learn React"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp1geVvrze4SSJqioWeS4p9aWZt0bhl-Lbw&s"
            />

            <VideoRow
            views="100M"
            subs="200K"
            description="Let's Learn Together How to Build Websites using React.."
            timestamp="59 second ago"
            channel="Shital Modhavadiya"
            title="Learn React"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp1geVvrze4SSJqioWeS4p9aWZt0bhl-Lbw&s"
            />

            <VideoRow
            views="100M"
            subs="200K"
            description="Let's Learn Together How to Build Websites using React.."
            timestamp="59 second ago"
            channel="Shital Modhavadiya"
            title="Learn React"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp1geVvrze4SSJqioWeS4p9aWZt0bhl-Lbw&s"
            />
            <VideoRow
            views="100M"
            subs="200K"
            description="Let's Learn Together How to Build Websites using React.."
            timestamp="59 second ago"
            channel="Shital Modhavadiya"
            title="Learn React"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp1geVvrze4SSJqioWeS4p9aWZt0bhl-Lbw&s"
            />
            <VideoRow
            views="100M"
            subs="200K"
            description="Let's Learn Together How to Build Websites using React.."
            timestamp="59 second ago"
            channel="Shital Modhavadiya"
            title="Learn React"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp1geVvrze4SSJqioWeS4p9aWZt0bhl-Lbw&s"
            />
            <VideoRow
            views="100M"
            subs="200K"
            description="Let's Learn Together How to Build Websites using React.."
            timestamp="59 second ago"
            channel="Shital Modhavadiya"
            title="Learn React"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp1geVvrze4SSJqioWeS4p9aWZt0bhl-Lbw&s"
            />
        </div>
    )
}

export default SearchPage