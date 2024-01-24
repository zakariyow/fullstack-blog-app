import  express  from "express";
import { registerUser, loginUser, getUserProfile, Logout } from "../controllers/userController.js";
import { validateUserRegistration, validateUserLogin } from "../validators/userValidators.js";
import { authenticate } from "../middlewares/authMiddleware.js";


const usersRouter = express.Router();

usersRouter.post('/register-user', validateUserRegistration, registerUser);
usersRouter.post('/login-user', validateUserLogin, loginUser);
usersRouter.get('/get-user-profile',  authenticate, getUserProfile);
usersRouter.post('/logout', Logout)


export default usersRouter;