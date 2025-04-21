import React from 'react';
import InputField from './InputField';


const levelOptions = [
    { value: "Team", label: "Team" },
    { value: "Department", label: "Department" }
];

const Form = ({register,onSubmit,errors}) => {
 
  
 
     return (
         
         <div className='container-fluid bg-white ms-3 me-5 px-4 mt-4 mb-4'>
                 <div className='row'>
                     <div className='col-md-12'>
                         <form onSubmit={onSubmit}>
                         <h3 className='py-4'><i className="bi bi-calendar-plus me-3"></i>Schedule a New Meeting</h3>
 
                             <div className="mb-3">
                                 <InputField label="Meeting Title" type="text" name="meetingTitle" placeholder="Enter title" register={register} validation={{ required: "Meeting Title is required" }} errors={errors}   />
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
 
                             <button type="submit" className="btn btn-primary mb-4">+ Create Meeting</button>
                         </form>
 
 
 
                     </div>
 
 
                 </div>
             </div>
         
     );
 };

export default Form;