import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import authRoute from './route/authRoute.js';
import messageRoute from './route/messageRoute.js';
import userRoute from './route/userRoute.js';
import connect from './repository/mongoRepository.js';

import {app,server} from './socketio/socket.js';
const PORT = process.env.PORT || 3000;

dotenv.config();




app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoute);
app.use('/api/message',messageRoute);
app.use('/api/users',userRoute);

server.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

