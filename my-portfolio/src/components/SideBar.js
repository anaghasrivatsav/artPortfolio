import React, { Component } from 'react';
import styles from './SideBar.module.css';
class TopBar extends Component
{
    render()
    {
        return (
            <div>
                <div className={styles.SideBanner}></div>
                <div className= {styles.Border}></div>
                <div className= {styles.Button1}></div>
                <div className= {styles.Button2}></div>
                <div className= {styles.Button3}></div>
                <div className= {styles.Image1}></div>
            </div>

        );
    }
}
export default TopBar;