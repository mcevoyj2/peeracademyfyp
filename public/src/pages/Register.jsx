import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
                    <img src={require("./palogo.png")} alt="PeerAcademy"/>
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

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #f5f5dc;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;

        }
        h1 {
            color: #00c2cb;
        }

    }
`;

export default Register;