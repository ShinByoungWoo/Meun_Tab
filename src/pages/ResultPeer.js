import React, { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';

const ResultPeer = () => {
  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const peer = new Peer();
    // console.log(peer._api._options.token, 'peer');
    peer.on('open', (id) => {
      setPeerId(id);
      console.log('My peer ID : ', id);
    });
    peer.on('call', (call) => {
      let getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ Audio: false, video: true }, (mediaStream) => {
        call.answer(mediaStream);
      });
    });
  }, []);

  const call = (remotePeerId) => {
    let getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ Audio: false, video: true }, (mediaStream) => {
      const peer = new Peer(); // c추가한거임 밑피어가 안돼서
      const call = peer.call(remotePeerId, mediaStream);
      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
      });
    });
  };

  return (
    <div className="wrap">
      <input
        type="text"
        value={remotePeerIdValue}
        onChange={(e) => setRemotePeerIdValue(e.target.value)}
      />
      <div>
        <video />
      </div>
      <div>
        <video ref={remoteVideoRef} />
      </div>
    </div>
  );
};

export default ResultPeer;
