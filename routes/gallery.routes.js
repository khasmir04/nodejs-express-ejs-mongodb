const express = require("express");
const galleryRouter = express.Router();
const methodOverride = require("method-override");
const articlesController = require('../controller/articlesController')

galleryRouter.use(express.json());
galleryRouter.use(express.urlencoded({ extended: true }));
galleryRouter.use(methodOverride("_method"));

// CREATE Article
galleryRouter.get("/create", articlesController.article_add_form);
galleryRouter.post("/create", articlesController.article_add);

// UPDATE Article
galleryRouter.get("/:id/update", articlesController.article_update_form);
galleryRouter.put("/:id/update", articlesController.article_update);

// DELETE Article
galleryRouter.delete("/:id/delete", articlesController.article_delete);

// Read Single Article
galleryRouter.get("/:id", articlesController.article_view_one);

// Read All Articles
galleryRouter.get("/", articlesController.article_view_all);

module.exports = galleryRouter;
