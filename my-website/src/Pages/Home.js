import React from 'react';
import pic1 from '../Images/pic1.jpg'
import Fifthcom from "./Fifthcom";
import Fourthcom from "./Fourthcom";
import Secondcom from "./Secondcom";
import Sixthcom from "./Sixthcom";
import Thirdcom from "./Thirdcom";
import Seventh from "./Seventh";
import { Route, Router, Routes } from "react-router-dom";
import FirstCom from './FirstCom';

function Home(){
    return(
        <>
      <FirstCom />
      <Secondcom />
      <Thirdcom />
      <br></br>
      <Fourthcom />
      <br></br>
      <Fifthcom />
      <br></br>
      <Sixthcom />
      <br></br>
      <Seventh />
        </>
    )

}
export default Home;