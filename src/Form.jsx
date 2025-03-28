import React from 'react';
import InputField from './InputField';

const levelOptions = [
    { value: "Team", label: "Team" },
    { value: "Department", label: "Department" },
   
];

const Form = () => {
    return (
        <div className='container bg-white ms-3 me-5 px-4 mt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <form>
                        <h2>Schedule Meeting</h2>

                        <div className="mb-3">
                            <InputField label="Meeting Title" type="text" name="title" placeholder="Enter title"/>

                        </div>
                        <div className='row'>
                            <div className="mb-3 col-md-6">
                            <InputField label="Meeting Date" type="date" name="date"  />
                                
                            </div>

                            <div className="mb-3 col-md-6">
                            <InputField label="Meeting Time" type="time" name="time"  />
                                
                            </div>
                        </div>

                        <div className="mb-3">
                        <InputField label="Meeting Level" type="select" name="level" options={levelOptions} />
                        </div>

                        <div className="mb-3">
                        <InputField label="Participants" type="text" name="participants" placeholder="Enter participant names" />
                        </div>

                        <div className="mb-3">
                        <InputField label="Description" type="textarea" name="description" placeholder="Enter meeting description" rows={4} />
                        </div>

                        <button type="submit" className="btn btn-primary mb-2">Create Meeting</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
    ;

export default Form;