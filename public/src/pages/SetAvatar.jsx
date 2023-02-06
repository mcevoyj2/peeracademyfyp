import React,{ useEffect} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";

export default function SetAvatar() {
  const api = 'https://api.multiavatar.com/45678945';
  const navigate = useNavigate();

  return;
  <>
  <Container>SetAvatar</Container>;
  </>;
}

const Container = styled.div``;
