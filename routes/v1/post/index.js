import {Router} from "express"
import { createCommentController, createPostController, getCommentController, getPostLikeController, getPostsController , likeDislikeCommentController, likeDislikePostController , } from "../../../controller/PostController.js"

const router = Router()

router.post("/",createPostController)
router.get("/", getPostsController)
router.get("/likes", getPostLikeController)
router.post("/like-post", likeDislikePostController)
router.post("/create-comment",createCommentController)
router.get("/comments", getCommentController)
router.post("/like-comment",likeDislikeCommentController)



export default router