import type { PostT } from "../models/post.model.js"
import type { Request, Response } from "express"




const createPost = async (req: Request, res: Response) => {
    const post = req.body as PostT | null

    if (!post) {
        return res.status(400).json({ message: "No post provided" })
    }







}