"use strict";
const model = require("../models/jokes.model");

function getRandom(req, res, next){
    try {
        let randomJoke = model.getRandom();
        res.render("random", { randomJoke: randomJoke, title: "random joke" });
        // res.json(model.getRandom());
      } catch (err) {
        console.error("Error while getting jokes ", err.message);
        next(err);
      }
}

function getAll(req, res, next) {
  try {
    let jokesList = model.getAll();
    res.render("jokes", { jokesList: jokesList, title: "All Jokes" });
    // res.json(model.getAll());
  } catch (err) {
    console.error("Error while getting jokes ", err.message);
    next(err);
  }
}

function getCate(req, res, next){
    try {
        let categories = model.getCate();
        // res.render("jokes", { categories: categories, title: "All Categories" });
        res.json(model.getCate());
      } catch (err) {
        console.error("Error while getting categories ", err.message);
        next(err);
      }
}

function getOneCate(req, res, next) {
    try {
      let category= model.getOneCate(req.params.categories);
    //   res.render("item-details", { game: game, title: 'Game  #' + req.params.id });
     res.json(model.getOneCate(req.params.categories));
    } catch (err) {
      console.error("Error while getting category: ", err.message);
      next(err);
    }
  }

  function newJoke(req, res, next){
    let setup = req.body.setup;
    let delivery = req.body.delivery;
    let category_id = parseInt(req.body.category_id);
  
    if (setup && delivery && category_id ) {
      let params = [setup, delivery, category_id];
      try {
        model.newJoke(params);
       res.redirect("/games/all");
    //    res.render("newJoke", { jokeList: model.getAll(), title: "All Jokes" });
      } catch (err) {
        console.error("Error while creating joke: ", err.message);
        next(err);
      }
    }
    else {
      res.status(400).send("Invalid Request");
    }
  }


module.exports = {
    getRandom,
    getAll,
    getCate,
    getOneCate,
    newJoke
  };
  