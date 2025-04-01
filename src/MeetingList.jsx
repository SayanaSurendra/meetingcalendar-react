import React from 'react';

const MeetingList = ({data}) => {
    if (!data || data.length === 0) return "No meetings scheduled";
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
                {data.map((meeting, index) => (
                    <tr key={index}>
                         <td>{index + 1}</td>
                        <td>{meeting.title}</td>
                        <td>{meeting.date}</td>
                        <td>{meeting.time}</td>
                        <td>{meeting.level}</td>
                         <td>
                         <button className="me-1 btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                        <button className="btn btn-danger"><i class="bi bi-trash"></i></button>
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