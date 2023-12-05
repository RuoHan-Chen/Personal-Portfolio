import React, { useEffect, useState  } from 'react';
import './Styles/main.css';

function About() {
  const [refresh] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [refresh]); 

  useEffect(() => {
    const hasConfirmed = localStorage.getItem('hasConfirmed');

    if (!hasConfirmed) {
      const confirmation = window.confirm("This project is still being worked on,\nso the final product will be much better");

      if (confirmation) {
        localStorage.setItem('hasConfirmed', 'true');
      }
    }
  }, [refresh]); 


  return (
    <div className="About" style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: "hidden" }}>

      <img
        src="./Images/about_sunset1.jpg"
        alt="Lofi beach sunset"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        draggable="false"
      />
      <img
        src="./Images/profile_pic.jpg"
        alt="Lofi beach sunset"
        style={{ width: '30%', height: '9%', objectFit: 'cover', position: "absolute", top: '4%', left: '6%', zIndex: 1, borderRadius: '200px' }}
        draggable="false"
        class = "hidden"
      />
      <div style={{
          position: 'absolute',
          top: '3.5%',
          right: '6%',
          color: 'white',
          zIndex: 1,
          backgroundColor: "rgba(85, 67, 135, 0.35)",
          borderRadius: "40px",
          padding: "20px",
          maxWidth: "500px", 
          maxHeight: "400px", 
          overflow: "hidden"   
      }}
      class = "hidden"
      >
      <h2 className="word_heading">Meet RuoHan Chen</h2>
      <p className="word_body">
        A dedicated computer science student with a keen interest in mastering the 
        intricacies of React.js, exploring algorithmic challenges on LeetCode, and 
        delving into the world of MongoDB for database management. Join me on this 
        exciting adventure!
      </p>
      </div>
      <div style={{
          position: 'absolute',
          top: '40%',
          right: "40vh",
          color: 'white',
          zIndex: 1,
          backgroundColor: "rgba(85, 67, 135, 0.35)",
          borderRadius: "40px",
          padding: "20px",
          maxWidth: "700px", 
          maxHeight: "400px", 
          overflow: "hidden"   
      }}
      class = "hidden"
      >
          <h2 class="word_heading">Future Website Ideas:</h2>
          <p class="word_body">
            ‣Expense Website: keeps track of expenses and has lookup and input funcitons
            <br />
            ‣Medical Tracker: mobile app that has alarms for medicine and reminders for appointments
            <br />
            ‣Squirtle Chatbot: enables communcations with my favorite Pokemon!!!
            <br />
            ‣ScheduleME: ik there's a lot of scheduling websites, but I want to make one too!!!
          </p>
      </div>

      <div style={{ background: 'linear-gradient(to bottom, rgb(10, 20, 60), rgb(10, 50, 50))', height: "800px" }}>
        <h1 style={{ margin: 0, padding: '800px', color: 'white' }}>hi</h1>
      </div>

      <div style={{
          position: 'absolute',
          top: '20%',
          right: '25%',
          color: 'white',
          zIndex: 1,
          backgroundColor: "rgba(85, 67, 135, 0.35)",
          borderRadius: "40px",
          padding: "20px",
          maxWidth: "600px",  
          maxHeight: "400px", 
          overflow: "hidden"   
      }}
      class = "hidden"
      >
          <h2 class="word_heading">Hobbies and Interests:</h2>
          <p class="word_body">
            ‣Playing Tennis 🎾🥎🎾
            <br />
            ‣FOOOOOD!!!🥓🍱🦞🦀🍣🍢🍙🍜🥮🍡
            <br />
            ‣Self-proclaimed Pro Chef 🤌🤌🤌
            <br />
            ‣Exploring the World ⛰️🪸🏖️🌃
            <br />
            ‣Playing my Clarinet 🎶🎵🎶🎵
            <br />
            ‣Harry Potter 🧙‍♂️🪄✨✨✨
            <br />
            ‣Sunset and Beaches 🏖️🌅🏖️🌅
          </p>
      </div>
      <img
        src="./Images/about_coral2.jpg"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        draggable="false"
      />
      <div style={{ background: 'linear-gradient(to bottom, rgb(0, 30,40), rgb(0, 2, 15))', height: "800px" }}>
        <h1 style={{ margin: 0, padding: '800px', color: 'white' }}>hi</h1>
      </div>
      <img
        src="./Images/about_anglerfish3.png"
        style={{ width: '100%', height: '180%', objectFit: 'cover' }}
        draggable="false"
      />
    </div>
  );
}

export default About;
