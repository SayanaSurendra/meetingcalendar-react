import React from 'react';


const sidebarData = [
    {
        "icon": "bi bi-calendar-plus-fill",
        "title": "Schedule Meeting",
        "link": "#"
    },
    {
        "icon": "bi bi-calendar",
        "title": "Manage Meeting",
        "link": "#"
    },
    {
        "icon": "bi bi-people-fill",
        "title": "Users & Permissions",
        "link": "#"
    },
    {
        "icon": "bi bi-bell-fill",
        "title": "Notifications",
        "link": "#"
    },
    {
        "icon": "bi bi-graph-up-arrow",
        "title": "Analytics",
        "link": "#"
    },
    {
        "icon": "bi bi-gear-fill",
        "title": "Settings",
        "link": "#"
    }
];

const Sidebar = () => {
    return (



        <div className="d-flex flex-column flex-shrink-0 mt-3 mx-3" style={{ "width": "350px" }}>
            <div className="text-white bg-black  text-center py-4 mb-0">
            <h3 ><i className="bi bi-speedometer2 me-3"></i>DashBoard</h3>
            </div>
            <ul className="nav nav-pills nav-flush flex-column mb-auto bg-white border start">
                {sidebarData.map((item, key) => {
                    return (<li className="nav-item" key={key}>
                        <a href={`${item.link} `} className="nav-link py-3 border-bottom" data-bs-toggle="tooltip"><i className={`${item.icon} me-3 text-dark`} ></i>
                            <span className="nav-title text-dark">{item.title}</span></a>
                    </li>)
                })}
            </ul>



        </div>
    );
};

export default Sidebar;