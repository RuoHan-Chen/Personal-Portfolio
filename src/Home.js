import React from 'react';

function Home() {
  return (
    <main className="Home" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <div style={{ flex: 8, display: 'flex' }}>
        <img
          src="./Images/home-background.jfif"
          alt="Lofi beach sunset"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          draggable="false"
        />
      </div>
      <div style={{ flex: 4, padding: '30px 30px 30px 30px', background: '#231343', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ 
          fontFamily: 'fantasy', 
          backgroundImage: 'linear-gradient(to bottom, rgb(70, 40, 230), rgb(250, 120, 120))',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontSize: '100px',
          lineHeight: '1', 
        }}>
          Welcome! <br /> 
          <span style={{ fontFamily: 'fantasy', fontSize: '50px', lineHeight: '1' }}>You've just entered my top secret island.</span>
        </h1>
        <a href="/about" style={{ 
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '35px',
          backgroundColor: 'rgb(240, 110, 140)',
          color: '#231343',
          textDecoration: 'none', 
          borderRadius: '5px',
          display: 'inline-block',
          cursor: 'pointer',
          background: 'rgb(240, 100, 140)',
          margin: 'auto',
          fontFamily: 'fantasy',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => { e.target.style.backgroundColor = '#FF7EA6'; }}
        onMouseOut={(e) => { e.target.style.backgroundColor = 'rgb(240, 100, 140)'; }}>
          Explore Now
        </a>
      </div>
    </main>
  );
}

export default Home;
