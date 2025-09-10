import express from 'express';
import { createPost, deletePost, getAllPosts, updatePost } from '../controllers/post.controller';
import { verifyUser } from '../utils/verify-user';


const router = express.Router() 

router.get('/',getAllPosts)
router.post('/', verifyUser, createPost)
router.put('/:id', verifyUser, updatePost)
router.delete('/:id', verifyUser, deletePost)

export default router