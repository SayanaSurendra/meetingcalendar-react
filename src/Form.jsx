import React, { useState } from 'react';
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import MeetingList from './MeetingList';

const levelOptions = [
    { value: "Team", label: "Team" },
    { value: "Department", label: "Department" },
];

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [meetings, setMeetings] = useState([]);

    const onSubmit = (data) => {
        console.log("Form submitted", data);
        setMeetings((previousMeetings) => [...previousMeetings, data]);
    };

    return (
        <div className='container  me-5 px-4'> 
        <div className='container-fluid bg-white ms-3 me-5 px-4 mt-4 mb-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Schedule Meeting</h2>

                        <div className="mb-3">
                            <InputField label="Meeting Title" type="text" name="title" placeholder="Enter title" register={register} validation={{ required: "Meeting Title is required" }} errors={errors} />
                        </div>

                        <div className='row'>
                            <div className="mb-3 col-md-6">
                                <InputField label="Meeting Date" type="date" name="date" register={register} validation={{ required: "Meeting Date is required" }} errors={errors} />
                            </div>

                            <div className="mb-3 col-md-6">
                                <InputField label="Meeting Time" type="time" name="time" register={register} validation={{ required: "Meeting Time is required" }} errors={errors} />
                            </div>
                        </div>

                        <div className="mb-3">
                            <InputField label="Meeting Level" type="select" name="level" options={levelOptions} register={register} validation={{ required: "Meeting Level is required" }} errors={errors} />
                        </div>

                        <div className="mb-3">
                            <InputField label="Participants" type="text" name="participants" placeholder="Enter participant names" register={register} validation={{ required: "Participants is required" }} errors={errors} />
                        </div>

                        <div className="mb-3">
                            <InputField label="Description" type="textarea" name="description" placeholder="Enter meeting description" rows={4} register={register} validation={{ required: "Description is required" }} errors={errors} />
                        </div>

                        <button type="submit" className="btn btn-primary mb-2">Create Meeting</button>
                    </form>


                 
                </div>

                
            </div>
        </div>
        {meetings.length > 0 && (
            <div className="container bg-white ms-3 me-5 px-4 mt-4 mb-5">
                <MeetingList data={meetings} />
            </div>
        )}
        </div>
      
        
    );
};

export default Form;
