import  express from "express";
import { createPost, deletePost, getPostById, getPosts, updatePost } from "../controllers/postsControllers.js";
import { validatePostRegistration } from "../validators/postValidators.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const postsRouter = express.Router();

postsRouter.post('/', validatePostRegistration, authenticate, createPost);
postsRouter.get('/get-post/:id', getPostById);
postsRouter.get('/get-posts', getPosts);
postsRouter.post('/update-post/:id', authenticate, updatePost);
postsRouter.delete('/delete-post/:id', authenticate, deletePost);

export default postsRouter;