import React from 'react'
import './chatheader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import { useSelector } from 'react-redux';
import { selectChannelName } from './features/counter/appSlice';


function Chatheader() {

    const channel = useSelector(selectChannelName)

    return (
        <div className="chatHeader">
           
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    {channel}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>

                <div className="chatHeader__search">
                    <input  placeholder="search" />
                    <SearchRoundedIcon/>
                </div>

                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default Chatheader
