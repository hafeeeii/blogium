import type { NextFunction, Request, Response } from "express"
import Post from "../models/post.model.js"
import { errorHandler } from "../utils/error.js"
import { AuthenticatedRequest } from "../utils/verify-user.js"
import { generateSlug } from "../utils/string.js"



export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await Post.find()
        return res.status(200).json(posts)
    } catch (err) {
        next(err)
    }
}

export const createPost = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const user = req.user
    const title = req.body?.title as string

    if (!user) {
        return next(errorHandler(401, "Unauthorized"))
    }

    if (!user.isAdmin) {
        return next(errorHandler(403, "Forbidden"))
    }

    if (!title) {
        return next(errorHandler(400, 'Post title is required'))
    }

    const slug = generateSlug(title)

    const post = new Post({
        ...req.body,
        author: user.id,
        slug,
    })
    try {

        await post.save()

        res.status(201).json('Post created successfully')

    } catch (err) {
        next(err)
    }
}

export const updatePost = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const { id } = req.params
    const user = req.user
    const title = req.body?.title as string

    if (!user) {
        return next(errorHandler(401, "Unauthorized"))
    }

    if (!user.isAdmin) {
        return next(errorHandler(403, "Forbidden"))
    }

    if (!title) {
        return next(errorHandler(400, 'Post title is required'))
    }

    if (!id) {
        return next(errorHandler(400, 'Post ID missing'))
    }

    const slug = generateSlug(title)


    try {

        const updatedPost = await Post.findByIdAndUpdate(id, { ...req.body, author: user.id, slug }, {
            runValidators: true,

        })
        console.log(updatedPost, 'this is updated pos')

        if (!updatedPost) {
            return next(errorHandler(404, 'Post not found'))

        }

        res.status(200).json('Post updated successfully')

    } catch (err) {
        next(err)
    }
}

export const deletePost = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const { id } = req.params
    const user = req.user

    if (!user) {
        return next(errorHandler(401, "Unauthorized"))
    }

    if (!user.isAdmin) {
        return next(errorHandler(403, "Forbidden"))
    }

    if (!id) {
        return next(errorHandler(400, 'Post ID missing'))
    }
    try {

        const deletedPost = await Post.findByIdAndDelete(id)
        if (!deletedPost) {
            return next(errorHandler(404, 'Post not found'))
        }
        res.status(200).json('Deleted successfully')
    } catch (err) {
        next(err)
    }
}

