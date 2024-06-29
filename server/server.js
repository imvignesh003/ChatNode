import dotenv from 'dotenv';
import express from 'express';

import authRoute from './route/authRoute.js';
import connect from './repository/mongoRepository.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();


// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.use(express.json());

app.use('/api/auth',authRoute);

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

