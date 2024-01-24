import express from "express";
import { port } from "./config/config.js";
import connectDB from "./config/db.js";
import chalk from "chalk";
import usersRouter from "./routers/users.js";
import postsRouter from "./routers/posts.js";

import cookieParser from "cookie-parser";
import { customError } from "./util/customError.js";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const PORT = port || 8000;

const app = express();
app.use(morgan("dev"));

var whitelist = ['http://localhost:8000', 'http://localhost:5174'];

var corsOptionsDelegate = function(req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // Reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // Disable CORS for this request
    }
    callback(null, corsOptions); // Callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(helmet())
app.use(cookieParser());


const apiRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: 'Rate limit exceeded'
});

app.use(apiRateLimit);



//rout managements

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/posts", postsRouter);


// 404
app.use((req, res, next) => {
    next(
        customError(
            404,
            `${req.originalUrl} the page that you're looking is not found`
        )
    );
});

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Internal Server Error";

    res.status(status).send(message);
});

//database connection
connectDB();

app.listen(PORT, () => {
    console.log(
        `${chalk.green.bold("Server")} is ${chalk.whiteBright.italic.bold(
      "listening"
    )} on port ${chalk.green.bold(PORT)} 🚀`
    );
});