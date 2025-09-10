import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    description: { type: String, trim: true, required: true },
    image: { type: String, trim: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft",
    },
    publishedAt: { type: Date },
    categories: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true }],
},
    { timestamps: true })

const Post = mongoose.model('Post', postSchema)
export default Post