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
                    <img src={require("./peerlogo.png")} alt="PeerAcademy"/>
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
    background-color: #495FA6;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 15rem;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input {
            background-color: transparent;
            padding: 1rem;
            border:0.1rem solid #4e0eff;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            &focus {
                border: 0.1rem solid #495FA6;
            }
        }
    }
`;

export default Register;