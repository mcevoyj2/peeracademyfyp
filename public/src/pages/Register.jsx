import React,{ useState, useEffect} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute, RegisterRoute } from "../utils/APIRoutes";


function Register() {
    const navigate = useNavigate();
    const[values,setValues] = useState({
        username: "",
        studentnumber: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const toastOptions = {
            position: "bottom-right",
            autoClose: 8000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        }
        useEffect(() => {
            if(localStorage.getItem("peer-academy-user")) {
              navigate("/");
            }
          }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const {username,studentnumber,email,password} = values;
            const { data } = await axios.post(registerRoute, { 
                username,
                studentnumber,
                email,
                password,
                });
                if(data.status===false) {
                    toast.error(data.msg, toastOptions);
                }
                if (data.status===true) {
                    localStorage.setItem("peer-academy-user", JSON.stringify(data.user));
                    navigate("/");
                }
            }
    };

    const handleValidation = () => {   
        const {username,studentnumber,email,password,confirmpassword} = values;
        if (password!==confirmpassword) {
            toast.error("Passwords do not match", 
            toastOptions
            );
            return false;
        } else if(username.length<3)  {
        toast.error("Username must be at least 3 characters", toastOptions);
        return false;
        } else if(studentnumber.length!=8) {
            toast.error("Student number is incorrect length ", toastOptions);
            return false;
        } else if (password.length < 8) {
            toast.error("Password must be at least 8 characters", toastOptions);
            return false;
        } else if(email=="") {
            toast.error("Email cannot be empty", toastOptions);
            return false;
        }
        return true;
    };

    const handleChange = (event) => {
        setValues({...values, [event.target.name]:event.target.value})
    };
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
                    name="studentnumber" 
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
                    name="confirmpassword" 
                    onChange={e=>handleChange(e)}
                />
                <button type="submit">Register</button>
                <span>
                    Have an Account already? Login here <Link to="/login">Login</Link>
                </span>
            </form>
        </FormContainer>
        <ToastContainer />
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
            height: 250px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #00000076;
        border-radius: 1rem;
        padding: 2rem 3rem;
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
                outline: none;
            }
        }
        button {
            background-color: #00bfff;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.2s ease-in-out;
            &:hover {
                background-color: #495FA6;
            }
        }
        span {color: white;}
        text-transform: uppercase;
        a {
            color: #00bfff;
            text-decoration: none;
            font-weight: bold;
        }
    }
`;

export default Register;