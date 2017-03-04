/**
 * Created by macdja38 on 2017-01-18.
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App/App.jsx';
import io from 'socket.io-client';

let socket = io('/'); //localhost:3045
socket.on('connect', function(){console.log("connected")});
socket.on('event', function(data){console.log(data)});
socket.on('disconnect', function(){console.log("disconnected")});

render(<App socket={socket} />, document.getElementById('root'));