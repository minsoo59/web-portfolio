import express from "express";
import { index, detail, gallery } from "../controllers/indexController";
const indexRouter = express.Router();

indexRouter.route("/").get(index);
indexRouter.route("/detail").get(detail);
indexRouter.route("/gallery").get(gallery);

export default indexRouter;
