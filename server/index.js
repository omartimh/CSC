import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import coursesRoutes from './routes/courses.js';
import jobsRoutes from './routes/jobs.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/courses', coursesRoutes);
app.use('/jobs', jobsRoutes);

app.get('/', (req, res) => {
    res.send("CSC Backend Server API");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);