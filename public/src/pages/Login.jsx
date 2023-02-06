import React,{ useState, useEffect} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";


function Login() {
    const navigate = useNavigate();
    const[values,setValues] = useState({
        username: "",
        password: "",
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
            const {username,password} = values;
            const { data } = await axios.post(loginRoute, { 
                username,
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
        const {username,password} = values;
        if (password === "") {
            toast.error("Username and password required", toastOptions);
            return false;
        } else if(username.length == "")  {
          toast.error("Username and password required", toastOptions);
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
                    min="3"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={e=>handleChange(e)}
                />
                <button type="submit">Login</button>
                <span>
                    Dont have an account? Register Here: <Link to="/register">Register</Link>
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

export default Login;