import React from 'react';
import { useNavigate } from 'react-router';

const MeetingList = ({ meetings, onDelete }) => {
    const navigate = useNavigate();

    const onEdit = (meetingId) => {

        navigate(`/dashboard/manage-meeting/${meetingId}`);
    }

    return (
        <div className="container-fluid bg-white ms-3 me-5 px-4 mt-4 mb-4">

            <h3 className='py-4'>List of Created Meetings</h3>
            <div className="table-responsive">
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
                                    <button className="me-1 btn btn-warning" onClick={() => onEdit(meeting.meetingId)} ><i className="bi bi-pencil-square"></i></button>
                                    <button className="btn btn-danger" onClick={() => onDelete(meeting.meetingId)}><i className="bi bi-trash"></i></button>
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