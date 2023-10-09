import React from 'react';
import pic1 from '../Images/pic1.jpg'

function Header(){
    return(
        <>
        <img src={pic1} alt="My Image" style={{width:"-webkit-fill-available"}}/>
        </>
    )

}
export default Header;