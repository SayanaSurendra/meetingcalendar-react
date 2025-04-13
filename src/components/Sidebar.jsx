import React from 'react';
import { Routes,Route,useNavigate } from 'react-router';
import Form from './Form';
import Analytics from './Analytics';
import ManageMeeting from './ManageMeeting';
import UserPermission from './UserPermission';
import Notification from './Notification';
import Settings from './Settings';



const sidebarData = [
  
    {
        "icon": "bi bi-calendar-plus-fill",
        "title": "Schedule Meeting",
        "link": "../dashboard/schedule-meeting"
    },
    {
        "icon": "bi bi-calendar",
        "title": "Manage Meeting",
        "link": "../dashboard/manage-meeting"
    },
    {
        "icon": "bi bi-people-fill",
        "title": "Users & Permissions",
        "link": "../dashboard/users-permissions"
    },
    {
        "icon": "bi bi-bell-fill",
        "title": "Notifications",
        "link": "../dashboard/notifications"
    },
    {
        "icon": "bi bi-graph-up-arrow",
        "title": "Analytics",
        "link": "../dashboard/analytics"
    },
    {
        "icon": "bi bi-gear-fill",
        "title": "Settings",
        "link": "../dashboard/settings"
    }
];

const Sidebar = () => {
    const navigate=useNavigate();
    return (
    <div className='main-section'>
      
       <div className="d-flex flex-column flex-shrink-0 mt-3 mx-3 " style={{ "width": "350px" }}>
            <div className="text-white bg-black  text-center py-4 mb-0">
            <h3 ><i className="bi bi-speedometer2 me-3"></i>DashBoard</h3>
            </div>
            <ul className="nav nav-pills nav-flush flex-column mb-auto bg-white border start">
                {sidebarData.map((item, key) => {
                    return (<li className="nav-item" key={key}>
                        <button className="nav-link py-3 border-bottom  w-100 text-start rounded-0"  onClick={()=> navigate(item.link)}><i className={`${item.icon} me-3 text-dark`} ></i>
                            <span className="nav-title text-dark">{item.title}</span></button>
                    </li>
                    
                )
                })}
            </ul>

         </div>

        <Routes>
          <Route path="schedule-meeting" element={<Form />} />
          <Route path="manage-meeting/:meetingId" element={<Form />} />
          <Route path="users-permissions" element={<UserPermission />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
         </Routes>
         
        </div>
    );
};

export default Sidebar;