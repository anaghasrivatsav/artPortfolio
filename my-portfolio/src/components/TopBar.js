import React, { Component } from 'react';
import styles from './TopBar.module.css';
class TopBar extends Component
{
    render()
    {
        return (
            <div>
                <div className={styles.topBanner}></div>
                <div className= {styles.cornerLogo}></div>
            </div>

        );
    }
}
export default TopBar;