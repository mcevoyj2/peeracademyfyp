import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../assets/logo.svg";
function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("You have submitted the form");
    }
    const handleChange = (event) => {}
  return(
    <>
        <FormContainer >
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h1>PeerAcademy</h1>
                </div>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    onChange={e=>handleChange(e)}
                />
                <input 
                    type="text" 
                    placeholder="Student Number" 
                    name="student number" 
                    onChange={e=>handleChange(e)}
                />
                <input 
                    type="email" 
                    placeholder="TCD Email"
                    name="email" 
                    onChange={e=>handleChange(e)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={e=>handleChange(e)}
                />
                <input 
                    type="password"
                    placeholder="Confirm Password" 
                    name="confirm password" 
                    onChange={e=>handleChange(e)}
                />
                <button type="submit">Register</button>
                <span>
                    Have an Account already? Login here <Link to="/login">Login</Link>
                </span>
            </form>
        </FormContainer>
    </>
  );
}

const FormContainer = styled.div``;

export default Register;