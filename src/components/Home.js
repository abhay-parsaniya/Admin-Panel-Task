import React, { useEffect, useState } from 'react'
import NavBar from './Navbar'
import BackgroundWrapper from './Wrappers/BackgroundWrapper';
import ContainerWrapper from './Wrappers/ContainerWrapper';
import './Home.css';

const Home = () => {

  const [name, setName] = useState({});

  useEffect(() => {
    let abc = JSON.parse(localStorage.getItem("user"));
    // console.log(abc);
    setName(abc);
  }, []);

  // console.log(name);

  return (
    <>
      <BackgroundWrapper>
        <NavBar />
        <ContainerWrapper>
          {/* <h1>You are Logged In as {name.first_name} {name.last_name}</h1> */}
          <h1>You are Logged In as <span class="badge bg-secondary">{name.first_name} {name.last_name}</span></h1>
        </ContainerWrapper>
      </BackgroundWrapper>
    </>
  )
}

export default Home