
import React from 'react';
import { useNavigate } from 'react-router';


const MeetingList = ({meetings,onEdit,onDelete}) => {


    /*const [meetings,setMeetings]=useState([]);
    
    const API_ENDPOINT="http://localhost:8080/api/meetingCalendar"

    useEffect(()=>{
   fetchAllMeetings();
    },[])

    const fetchAllMeetings=async()=>{
              await axios.get(API_ENDPOINT)
              .then((response)=>{
                console.log(response);
                if(response.status===200){
                    setMeetings(response.data); 
                }else{
                    console.error("Error response status",response.status);
                }             
                })
              .catch((error)=>{
                console.error("error occurred");
              });
    }

    const updateMeeting1=async(updatedMeeting)=>{
        try{
        const response=await axios.put(API_ENDPOINT,updatedMeeting);
        if(response.status===204){
            fetchAllMeetings();
            console.log("Meeting updated");
        }
    }catch(error){
       console.error("Error occurred while updating");
    }
    }*/

   
  


   
    return( 
    
    <div className="container bg-white mt-5">
      
    <h3>List of Scheduled Meetings</h3>
    <div className="table-responsive"> {/* Added table-responsive class */}
        <table className="table table-striped p-4">
            <thead>
                <tr>
                <th>#</th>
                    <th>Meeting Title</th>
                    <th>Meeting Date</th>
                    <th>Meeting Time</th>
                    <th>Level</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {meetings.map((meeting, index) => (
                    <tr key={index}>
                         <td>{index + 1}</td>
                        <td>{meeting.meetingTitle}</td>
                        <td>{meeting.meetingDate}</td>
                        <td>{meeting.meetingTime}</td>
                        <td>{meeting.meetingLevel}</td>
                         <td>
                         <button className="me-1 btn btn-warning" onClick={()=>onEdit(meeting.meetingId)}><i class="bi bi-pencil-square"></i></button>
                        <button className="btn btn-danger" onClick={()=>onDelete(meeting.meetingId)}><i class="bi bi-trash"></i></button>
                            </td>                       
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>

);
};

export default MeetingList;