import React,{ useEffect, useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loader from "./loader.gif";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";

export default function SetAvatar() {
  const api = `https://api.multiavatar.com/45678945`;
  const navigate = useNavigate();
  const [avatars,setAvatars] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [selectedAvatar,setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const setProfile = async () => {};
  useEffect(async () => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      );
      const buffer = new Buffer(image.data);
      data.push(buffer.toString("base64"));
    }
    setAvatars(data);
    setIsLoading(false);
  }, []);
  return (
  <>
  <Container>
    <div classname="title-container">
      <h1>Select an Avatar!</h1>
    </div>
    <div className="avatars">
      {
        avatars.map((avatar,index) => {
          return (
            <div 
            key={index} 
            className={`avatar ${selectedAvatar === index ? "selected" : "" 
          }`}>
            <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" />
            onClick={() => setSelectedAvatar(index)}
          </div>
              )
        }
        )
      }
    </div>
    </Container>;
  <ToastContainer />
  </>
  );
  
}

const Container = styled.div``;
