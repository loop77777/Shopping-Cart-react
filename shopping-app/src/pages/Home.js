import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="landing">
      <section className='home'>
        <main className="headline">
          <h1 className="text">Explore our new collections</h1>
          <Button
            style={{
              backgroundColor: '#616e7c',
              border: 'none',
              outline: 'none',
              justifyContent: 'center',
              textAlign: 'center',
              fontWeight:'500'
            }}
          >
            <Link className="links" to={'/allproducts'}>
              Explore Now
            </Link>
          </Button>
        </main>
      </section>
      
    </div>
  );
}
export default Home;
