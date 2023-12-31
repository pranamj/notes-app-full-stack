import express from "express";
import cors from "cors";
// import { PrismaClient } from "@prisma/client";

const app = express();
// const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api/notes", async(req,res)=>{

    res.json({ message: "success!"});

    // const notes = await prisma.note.findMany();
    // res.json(notes);
});


app.listen(5000,()=>{
    console.log("server running on localhost:5000")
})