import express from "express";

import UsersController from "./controllers/UsersController";
import PostsController from "./controllers/PostsController";
import CommentsController from "./controllers/CommentsController";
import ProfilesController from "./controllers/ProfilesController";

const router = express.Router();

// User routes
router.get("/users", UsersController.index);
router.post("/users", UsersController.create);
router.put("/users/:user_id", UsersController.update);
router.delete("/users/:user_id", UsersController.destroy);

// Post routes
router.get("/posts/:user_id", PostsController.index);
router.post("/posts/:user_id", PostsController.create);
router.put("/posts/:post_id", PostsController.update);
router.delete("/posts/:post_id", PostsController.destroy);

// Comment routes
router.post("/comments/:post_id/add/:user_id", CommentsController.create);
router.delete("/comments/:comment_id", CommentsController.destroy);

// Profile routes
router.get("/profile/:user_id", ProfilesController.show);
router.post("/profile/:user_id", ProfilesController.create);
router.put("/profile/:user_id", ProfilesController.update);

export default router;
