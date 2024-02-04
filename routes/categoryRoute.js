import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// routes
// create category || POST method
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category || PUT method
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all categories || GET method
router.get("/get-category", categoryController);

// get single category || GET method
router.get("/single-category/:slug", singleCategoryController);

// delete category || DELETE method
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
