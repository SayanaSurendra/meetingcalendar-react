import React from 'react';
import Sidebar from './Sidebar';
import Analytics from './Analytics';
import UserPermission from './UserPermission';
import Notification from './Notification';
import Settings from './Settings';
import ScheduleMeeting from './ScheduleMeeting';
import ManageMeeting from './ManageMeeting';
import { Routes, Route } from 'react-router';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';



const DashBoard = () => {

  const [meetings, setMeetings] = useState([]);
  const [activeLink, setActiveLink] = useState("");
  const [edit,setEdit]=useState(false);
  const navigate = useNavigate();

  const API_ENDPOINT="http://localhost:8080/api/meetingCalendar"
  console.log("DashBoard component rendered");
  

  useEffect(()=>{
      console.log(" Dfecth all meetings");
      fetchAllMeetings();
  
  },[]);


  const fetchAllMeetings = async () => {
    await axios.get(API_ENDPOINT)
      .then((response) => {
        console.log("Get Response", response);
        if (response.status === 200) {
          setMeetings(response.data);
        } else {
          console.error("Error response status for Get API", response.status);
        }

      }).catch((error) => {
        console.error("Error occurred while fetch all meetings", error);
      })

  };


  const updatedMeeting = () => {
    fetchAllMeetings();
  };


  const handleNavigate = (route) => {
    setActiveLink(route);
    navigate(route);
  };



  const onEdit=(meetingId)=>{
    setEdit(true);
    navigate(`/dashboard/manage-meeting/${meetingId}`);
 }


  return (
    <div className='main-section'  >
      <Sidebar activeLink={activeLink} onNavigate={handleNavigate} />


      <Routes>
        <Route path="schedule-meeting" element={<ScheduleMeeting  meetings={meetings} updatedMeeting={updatedMeeting} onEdit={onEdit} edit={edit}/>} />
        <Route path="manage-meeting/:meetingId" element={<ScheduleMeeting meetings={meetings} updatedMeeting={updatedMeeting} onEdit={onEdit} edit={edit}/>} />
        <Route path="manage-meeting" element={<ManageMeeting />} />
        <Route path="users-permissions" element={<UserPermission />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Routes>



    </div>
  );
};

export default DashBoard;