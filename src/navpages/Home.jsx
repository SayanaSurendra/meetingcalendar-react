import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container' style={{ height: "100vh" }}>
      <h2 className='mt-3'>Welcome to the Meeting Calendar</h2>

      <p>
        A personal meeting calendar, where you can easily schedule, manage, and keep track of all your upcoming meetings.</p>

      <p>
        Click below to access your dashboard and start scheduling your first meeting!
      </p>
      <p><button
        className="btn btn-outline-primary"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button></p>
    </div>
  );
};

export default Home;