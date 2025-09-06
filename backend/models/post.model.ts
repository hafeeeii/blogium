import mongoose from "mongoose";

export interface PostT {
    title: string;
    slug: string;
    content: string;
    author: mongoose.Schema.Types.ObjectId;
    status: string;
    categories: string[];
    tags: string[]
}


const postSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft",
    },
    categories: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true }],
},
    { timestamps: true })

const Post = mongoose.model('Post', postSchema)
export default Post