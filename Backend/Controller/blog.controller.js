import Blog from "../models/blog.model.js";
import express from "express";
const router=express.Router();
const blog = async (req, res, next) => {
    
    try {
       
        const { Name, image, content,author } = req.body;
        // const authorId = req.user._id;
        console.log(Name+" "+image+" "+content+" " +author)
        const newBlog = new Blog({ Name, image, content,author});
        await newBlog.save();
        res.status(201).json("Blog created successfully");
        console.log("Created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Could not save the blog." });
    }
};

export default blog;


