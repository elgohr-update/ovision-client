import React, { useEffect, useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { CANCEL_WEBSOCKET, INIT_WEBSOCKET } from '../../store/actionTypes';

export const Home = () => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const stream = useSelector(state => state.stream);

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = new Image();
    image.onload = function () {
      canvas.drawImage(image, 0, 0);
    };
    image.src = stream.source;
  }, [stream]);

  const startWebsocket = async () => {
    try {
      const res = await api.getUniqueRoomId();
      const roomId = res.data.room_id;
      dispatch({ type: INIT_WEBSOCKET, payload: roomId });
    } catch (err) {
      throw err;
    }
  };

  const stopWebsocket = () => {
    dispatch({ type: CANCEL_WEBSOCKET });
  };

  useEffect(() => {}, []);

  return (
    <div className="Home d-flex justify-content-center flex-column">
      <canvas className="Home__video" ref={canvasRef} />
      <Container className="Home__buttons">
        <Button onClick={startWebsocket}>Start</Button>
        <Button variant="danger" onClick={stopWebsocket}>
          Stop
        </Button>
      </Container>
    </div>
  );
};
