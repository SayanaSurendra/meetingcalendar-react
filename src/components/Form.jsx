import React, { useState } from 'react';
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import MeetingList from './MeetingList';
import axios from 'axios';
import {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';
import Modal from 'react-modal';


const levelOptions = [
    { value: "Team", label: "Team" },
    { value: "Department", label: "Department" },
];
Modal.setAppElement('#root');

const Form = () => {

    const { register, handleSubmit, formState: { errors },reset,setValue } = useForm();
    const API_ENDPOINT="http://localhost:8080/api/meetingCalendar"
    const [meetings, setMeetings] = useState([]);
  
    const [edit,setEdit]=useState(false);
    const [modalIsOpen,setModalIsOpen]=useState(false);
    //const {meetingId}= useParams();
    const navigate=useNavigate();
    const [id,setId]=useState();
    useEffect(()=>{
       fetchAllMeetings();
        },[])


    useEffect(()=>{
        if(edit && id){
            fetchMeetingById(id);
        }
           
     },[edit,id])


     const onEdit=(meetingId)=>{
        setEdit(true);
        setId(meetingId);
        navigate(`/dashboard/manage-meeting/${meetingId}`);
     }

     const onDelete= (meetingId)=>{
        setId(meetingId);
        setModalIsOpen(true);
        
            
     }
     

     const fetchMeetingById= async(meetingId)=>{
        await axios.get(`${API_ENDPOINT}/${meetingId}`)
               .then((response)=>{
         
          if(response.status===200){
            console.log("Getby id Response",response);
           let participants=response.data.participants.map((participant)=>participant.email.trim()).join(',');
            //prepopulate 
            setValue("meetingTitle",response.data.meetingTitle);
            setValue("meetingDate",response.data.meetingDate);
            setValue("meetingTime",response.data.meetingTime);
            setValue("meetingLevel",response.data.meetingLevel);
            setValue("participants",participants);
            setValue("meetingDescription",response.data.meetingDescription);
             
          }else{
              console.error("Error response status",response.status);
          }             
          })
        .catch((error)=>{
          console.error("error occurred",error);
        });
     }

        const fetchAllMeetings=async()=>{
            await axios.get(API_ENDPOINT)
            .then((response)=>{
              console.log("Get Response",response);
              if(response.status===200){
                  setMeetings(response.data); 
              }else{
                  console.error("Error response status",response.status);
              }             
              })
            .catch((error)=>{
              console.error("error occurred",error);
            });
  }

    const onSubmit = async(data) => {
        console.log("Form submitted", data);
        const participantsArray=data.participants.split(',').map(participant => ({email:participant.trim()}));
        let updatedData = { ...data, participants: participantsArray };
        console.log("Form  updated submitted", updatedData);
        //console.log("meetingId before update:", meetingId);
        try{

             if(id){
               // console.log("meetingId if update:", meetingId);
            const updatedDataId={...updatedData,meetingId:id};
            console.log("update request",updatedDataId)
        const response=await axios.put(API_ENDPOINT,updatedDataId);
        console.log("Form submitted", updatedData);
        if(response.status=== 202){
            console.log("Updated Form succesffulkly");
            fetchAllMeetings();
            }
              
             }else{
                const response= await axios.post(API_ENDPOINT,updatedData)
                if(response.status=== 201){
                    console.log("Form submitted");
                    setMeetings((previousMeetings) => [...previousMeetings, updatedData]);
                }
             }
            
             reset();
           
            
        }catch(error){
            console.error("Error occured",error)
        }
       
    };
     
    const pageTitle=()=>{
        if(id){
            return <h2>Edit Meeting</h2>
        }else{
            return   <h2>Schedule Meeting</h2>
        }
    }

    const handleDelete=async()=>{
       
        try{
            await axios.delete(`${API_ENDPOINT}/${id}`)
            .then(response => {
              navigate("/");
            })
        }
        catch(error){
            console.error("Error occurred while deleting",error);
         }
    }
 

    /*const updateMeeting=async(updatedMeeting)=>{
        try{
        const response=await axios.put(API_ENDPOINT,updatedMeeting);
        if(response.status===204){
            fetchAllMeetings();
            console.log("Meeting updated");
        }
    }catch(error){
       console.error("Error occurred while updating");
    }
    };*/

    return (
        <div className='container  me-5 px-4' > 
        <div className='container-fluid bg-white ms-3 me-5 px-4 mt-4 mb-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       {pageTitle()}

                        <div className="mb-3">
                            <InputField label="Meeting Title" type="text" name="meetingTitle" placeholder="Enter title" register={register} validation={{ required: "Meeting Title is required" }} errors={errors} />
                        </div>

                        <div className='row'>
                            <div className="mb-3 col-md-6">
                                <InputField label="Meeting Date" type="date" name="meetingDate" register={register} validation={{ required: "Meeting Date is required" }} errors={errors} />
                            </div>

                            <div className="mb-3 col-md-6">
                                <InputField label="Meeting Time" type="time" name="meetingTime" register={register} validation={{ required: "Meeting Time is required" }} errors={errors} />
                            </div>
                        </div>

                        
                        <div className="mb-3">
                            <label htmlFor="meetingLevel" className="form-label">Meeting Level</label>
                            <select 
                            id="meetingLevel" 
                            name="meetingLevel"
                            className={`form-select ${errors.meetingLevel ? "is-invalid" : ""}`}
                            {...register("meetingLevel", {
                                required: "Please select level",
                              })}>
                                <option value="">Choose level</option>
                                {levelOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                                
                            </select>
                            {errors.meetingLevel && (
              <div className="invalid-feedback">{errors.meetingLevel.message}</div>
            )}
                        </div>

                        <div className="mb-3">
                            <InputField label="Participants" type="text" name="participants" placeholder="Enter participant emails" register={register} validation={{ required: "Participants is required" }} errors={errors} />
                        </div>

                        <div className="mb-3">
                            <InputField label="Description" type="textarea" name="meetingDescription" placeholder="Enter meeting description" rows={4} register={register} validation={{ required: "Description is required" }} errors={errors} />
                        </div>

                        <button type="submit" className="btn btn-primary mb-2">{edit ?  "Update " :"+ Create "}Meeting</button>
                    </form>


                 
                </div>

                
            </div>
        </div>

        {meetings.length > 0 && (
            <div className="container bg-white ms-3 me-5 px-4 mt-4 mb-5">
                <MeetingList  meetings={meetings}  onEdit={onEdit} onDelete={onDelete}/>
            </div>
        )}

        <Modal isOpen={modalIsOpen}>
       <h2>Modal title</h2>
       <p>Modal body</p>
       <div>
        <button onClick={()=> setModalIsOpen(false)}>Close</button>
        <button onClick={ handleDelete}>Delete</button>
       </div>

        </Modal>
        </div>
      
        
    );
};

export default Form;
