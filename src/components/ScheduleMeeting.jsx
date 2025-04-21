import React from 'react';
import Form from './Form';
import MeetingList from './MeetingList';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ScheduleMeeting = ({ meetings,updatedMeeting}) => {
    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();

    const API_ENDPOINT = "http://localhost:8080/api/meetingCalendar"

    const onSubmit = async (data) => {
        console.log("Form submitted", data);
        const participantsArray = data.participants.split(',').map(participant => ({ email: participant.trim() }));
        let updatedData = { ...data, participants: participantsArray };
        console.log("Form  updated submitted", updatedData);

        try {

            const response = await axios.post(API_ENDPOINT, updatedData)
            if (response.status === 201) {
                console.log("Form submitted");
                const responseData = response.data;
               
                updatedMeeting([...meetings, responseData]);
            }


            reset();


        } catch (error) {
            console.error("Error occured", error)
        }

    };

    return (
        <div className='container-fluid ms-3 me-5 px-4  mb-4 ' >
            <Form register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />
            {meetings.length > 0 && (
                <MeetingList meetings={meetings} />
            )}
        </div>
    );
};

export default ScheduleMeeting;