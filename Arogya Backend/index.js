const express = require('express');
const cors = require('cors'); // Import cors
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type'] // Allowed headers
}));

app.use(express.json());

const { patientrouter } = require('./routes/patient');
const { DoctorRouter } = require('./routes/Doctor');
const { stuffrouter } = require('./routes/stuff');

app.use('/patient', patientrouter);
app.use('/doctor', DoctorRouter);
app.use('/stuff', stuffrouter);

async function main() {
  await mongoose.connect(process.env.MONGO);
  app.listen(port, () => {
    console.log('server connected');
  });
}

main();
