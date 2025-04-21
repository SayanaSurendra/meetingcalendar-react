import React from 'react';
import Form from './Form';
import MeetingList from './MeetingList';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import DeleteModal from './DeleteModal';

const ScheduleMeeting = ({ meetings, updatedMeeting, onEdit, edit }) => {
    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();
    const { meetingId } = useParams();
    const [modalIsOpen, setModalIsOpen] = useState(false);
const [selectedMeetingId, setSelectedMeetingId] = useState(null);
   

    const API_ENDPOINT = "http://localhost:8080/api/meetingCalendar";



    useEffect(() => {
        if (edit && meetingId) {
            fetchMeetingById(meetingId);
        }
    }, [edit, meetingId]);

    



    //post / Put
    const onSubmit = async (data) => {
        console.log("Form submitted", data);
        const participantsArray = data.participants.split(',').map(participant => ({ email: participant.trim() }));
        let updatedData = { ...data, participants: participantsArray };
        console.log("Form  updated submitted", updatedData);
        

        try {
            if (meetingId) {
                // console.log("meetingId if update:", meetingId);
                const updateRequest = { ...updatedData, meetingId: meetingId };
                console.log("update request", updateRequest)
                const response = await axios.put(API_ENDPOINT, updateRequest);
                if (response.status === 204) {
                    console.log("Form updated successfully");

                } else {
                    console.error("error occured while updating form")
                }

            } else {

                const response = await axios.post(API_ENDPOINT, updatedData)
                if (response.status === 201) {
                    console.log("Form submitted");

                } else {
                    console.error("error occured while submitting form")
                }

            }
            updatedMeeting();
            reset();


        } catch (error) {
            console.error("Error occured", error)
        }

    };



    //get by id
    const fetchMeetingById = async (meetingId) => {
        await axios.get(`${API_ENDPOINT}/${meetingId}`)
            .then((response) => {

                if (response.status === 200) {
                    console.log("Getby id Response", response);
                    let participants = response.data.participants.map((participant) => participant.email.trim()).join(',');
                    //prepopulate 
                    setValue("meetingTitle", response.data.meetingTitle);
                    setValue("meetingDate", response.data.meetingDate);
                    setValue("meetingTime", response.data.meetingTime);
                    setValue("meetingLevel", response.data.meetingLevel);
                    setValue("participants", participants);
                    setValue("meetingDescription", response.data.meetingDescription);

                } else {
                    console.error("Error response status", response.status);
                }
            })
            .catch((error) => {
                console.error("error occurred", error);
            });
    };

    //Delete
    const handleDelete = async () => {

        try {
            await axios.delete(`${API_ENDPOINT}/${selectedMeetingId}`)

            updatedMeeting();
            setModalIsOpen(false);
        }
        catch (error) {
            console.error("Error occurred while deleting", error);
        }
    }

    const onDelete= (meetingId)=>{
        setSelectedMeetingId(meetingId);
        setModalIsOpen(true);
     }

    return (
        <div className='container-fluid ms-3 me-5 px-4  mb-4 ' >
            <Form register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} edit={edit} meetingId={meetingId} />
            {meetings.length > 0 && (
                <MeetingList meetings={meetings} onEdit={onEdit} onDelete={onDelete} />
            )}

            <DeleteModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default ScheduleMeeting;