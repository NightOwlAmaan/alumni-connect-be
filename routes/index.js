import { Router } from "express";

import userRoutes from "./v1/user/index.js"
import connectionRoutes from "./v1/connection/index.js"
import mediaRoutes from './v1/handle-media/index.js'
import adminRoutes from "./v1/admin/index.js"
import alumni_student_Routes from "./v1/alumni_student/index.js";
import postRoutes from "./v1/post/index.js"
import { checkForAuthentication , restrictToOnly } from "../middlewares/auth.js";
const router = Router()

router.use("/admin",checkForAuthentication, restrictToOnly("ADMIN"),adminRoutes)

// Both student and alumni 
router.use("/v1/alumni-student" ,checkForAuthentication, alumni_student_Routes)
router.use("/v1/connection",checkForAuthentication , connectionRoutes)
router.use("/v1/posts", checkForAuthentication,postRoutes)


router.use("/v1/handle-media",checkForAuthentication , mediaRoutes)
// All can access this route
router.use("/v1/user" , userRoutes)

// //Seeding database
// router.post("/v1/seed" , seed)

export default router
