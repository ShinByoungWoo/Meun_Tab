import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import socketio from 'socket.io-client';

const Result = () => {
  const socket = socketio();
  const myface = document.getElementById('myface');
  const muteBtn = document.getElementById('mute');
  const cameraBtn = document.getElementById('camera');

  let myStream;
  let muted = false;
  let cameraOff = false;
  async function getMedia() {
    try {
      myStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });
      console.log(myStream)
      myface.srcObject = myStream;
    } catch (e) {
      console.log(e);
    }
  }

  getMedia();
//   function handleMuteClick() {}
//   function handleCameraClick() {}

//   muteBtn.addEventListener('click', handleMuteClick);
//   cameraBtn.addEventListener('click', handleCameraClick);

  return (
    <React.Fragment>
      <Grid is_flex>
        <Grid  id="myStream">
          <video
            id="myface"
            playsInline
            autoPlay
            width="400"
            height="400"
          ></video>
          <button id="mute">음소거</button>
          <button id="camera">카메라</button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Result;
