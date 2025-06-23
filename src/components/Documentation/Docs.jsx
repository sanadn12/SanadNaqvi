import React from 'react';

const Docs = () => {
  const docsData = [
    {
      title: '1. Basic Express Server',
      code: `
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/db.js';
import Router from '../src/routes/Routes.js';


dotenv.config();

const app = express();
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});


app.use('/api/listing', listingRouter);
app.use(authenticateJWT); 

app.use((req, res, next) => {
  next();
});

app.use((err, req, res, next) => {
  console.error('Global Error Handler:', err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 7860;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is listening at http://localhost:" + PORT);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });
export default app;

      `,
    },
    {
      title: '2. package json ',
      code: `
  "type": "module",


  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node -r dotenv/config --experimental-json-modules src/index.js",
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },
      `,
    },
    {
      title: '3. Router , Controller',
      code: `
//   router
import { Router } from 'express';
import {  } from '../controllers/Controller.js';
const router = Router();

export default router;

// controller
//post
const {}= req.body;
try {
 const existing  = await user.findOne({
            existing

        });
        if(existing){
            return res.status(409).json({ message: "User with this email already exists" });

              const hashedPassword = await bcrypt.hash(password, 10);
const newUser = new user({ email, password: hashedPassword, name,phone});
        
        await newUser.save();
                res.status(201).json({ message: "User created temporarily. OTP sent to your email for verification. " });

            }
                catch (error) {
        console.error("error in creating user");
        res.status(500).json({ message: "Error in creating user", error });
            
        
        
      }
}


//getall

  export const getall= async (req, res) => {
    try {
      const get = await listing.find();
      res.status(200).json({
        success: true,
        data: get,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch listings",
        error: error.message,
      });
    }
  };



      `,
    },
    {
      title: '4. Basic Mongoose Model',
      code: `
import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    name: String,
    address: String,
    phone: String,
 }, { timestamps: true ,


});

const user = mongoose.model("user", userModel);

export default user;
      `,
    },
     {
      title: '5. mongodb connection',
      code: `
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
        console.log("MongoDB connected successfully");

  } catch (error) {
        console.error("MongoDB connection error:", error.message);

    process.exit(1); 
  }
};

export default connectDB;
      `,
    },
    {
      title: '5. Basic useState in React',
      code: `
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default Counter;
      `,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl text-center font-bold mb-6">Code Documentation</h1>
      {docsData.map((doc, index) => (
        <div key={index} className="bg-gray-900 text-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
          <pre className="overflow-x-auto whitespace-pre-wrap">
            <code>{doc.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default Docs;
