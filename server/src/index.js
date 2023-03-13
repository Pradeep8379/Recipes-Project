import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

dotenv.config({ path: './config.env' });

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
})
    .then(() => {
        console.log('mongodb connected');
    }).catch((err) => {
        console.log(err);
    })

app.listen(3001, () => console.log("Server running on port 3001"));