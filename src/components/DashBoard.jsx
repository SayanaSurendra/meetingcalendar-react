import React from 'react';
import Sidebar from './Sidebar';


const DashBoard = () => {

  

    return (
        <div className='main-section'  >
            <Sidebar/>
           <h5 className='m-3'>Welcome to your dashboard, where you can easily manage and stay on top of your meetings and schedule.</h5>
            
        </div>
    );
};

export default DashBoard;