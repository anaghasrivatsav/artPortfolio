import React, { Component } from 'react';
import styles from './LandingPage.module.css';
import axios from 'axios';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

class LandingPage extends Component
{
    render()
    {
        return (
            
            <div>
            <TopBar />
            <SideBar />
          
           
            </div>
            

            
        );
    }
}
export default LandingPage;