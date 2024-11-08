"use strict";
const express = require("express");
const router = express.Router();

const jokesController = require("../controllers/joke.controller");

//http://localhost:3000/jokebook/
router.get("/", (req, res) => res.redirect("/jokebook/random"));


//http://localhost:3000/jokebook/all
router.get("/all", jokesController.getAll);


//http://localhost:3000/jokebook/random
router.get("/random", jokesController.getRandom);


//http://localhost:3000/jokebook/categories
router.get("/categories", jokesController.getCate);


//http://localhost:3000/jokebook/joke/:categories/:limit?
router.get("/joke/:categories/:limit?", jokesController.getOneCate);


//http://localhost:3000/jokebook/joke/new
router.post("/joke/new", jokesController.newJoke);

module.exports = router;
