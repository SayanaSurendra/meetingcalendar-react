import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='container' style={{  height: "100vh" }}>
          <h1>Welcome to the Meeting Calendar</h1>
      
      <p>
        Apersonal meeting calendar, where you can easily schedule, manage, and keep track of all your upcoming meetings.</p>
       <p>  
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor facere quas perferendis id doloribus voluptas tenetur quos quaerat consequuntur rem, velit ex nihil blanditiis possimus officia itaque repellendus, aperiam dicta?
      </p>

      
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