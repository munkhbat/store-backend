import { Request, Response, Router } from "express";
import userRouter from "./api/user.api";
const router = Router();
router.use("/api", userRouter);
export default router;
