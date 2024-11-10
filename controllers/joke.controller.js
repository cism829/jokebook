"use strict";
const model = require("../models/jokes.model");


/**
 * shows a random joke when first landing on the page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getRandom(req, res, next) {
  try {
    let jokesList = model.getRandom();
    res.render("jokes", { jokesList: jokesList, title: "Welcome to the Joke Page !" });
    // res.json(model.getRandom());
  } catch (err) {
    console.error("Error while getting jokes ", err.message);
    next(err);
  }
}

/**
 * returns all the jokes that are currently within the database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
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

/**
 * Returns the categories that are available in the database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getCate(req, res, next) {
  try {
    let categories = model.getCate();
    res.render("categories", { categories: categories, title: "All Categories" });
  } catch (err) {
    console.error("Error while getting categories ", err.message);
    next(err);
  }
}

/**
 * if a valid category is in the parameter query, it returns all of the jokes within that category
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getOneCate(req, res, next) {
  try {
    let limit;

    if (req.params.limit) {
      limit = parseInt(req.params.limit);

    } else {
      limit = null;
    }

    let jokesList = model.getOneCate(req.params.categories, limit);
    if (req.params.categories == "funnyJoke") {
      res.render("jokes", { jokesList: jokesList, title: "Funny jokes" });
    }
    else if (req.params.categories == "lameJoke") {
      res.render("jokes", { jokesList: jokesList, title: "Lame jokes" });
    }
    else {
      let jokesList = 0;
      res.render("jokes", { jokesList: jokesList, title: "enter valid category" });
    }

    //  res.json(model.getOneCate(req.params.categories));
  } catch (err) {
    console.error("Error while getting category: ", err.message);
    next(err);
  }
}

/**
 * creates a new joke and places it within desired category
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function newJoke(req, res, next) {
  let setup = req.body.setup;
  let delivery = req.body.delivery;
  let category_id = parseInt(req.body.category_id);

  
  if (setup && delivery && category_id) {
    let params = [setup, delivery, category_id];
    try {
      model.newJoke(params);
      
      if (category_id == 1) {
        res.redirect("/jokebook/joke/funnyJoke");
      } else if (category_id == 2) {
        res.redirect("/jokebook/joke/lameJoke");
      } else {
        res.redirect("/jokebook/joke"); 
      }
    } catch (err) {
      console.error("Error while creating joke: ", err.message);
      next(err); 
    }
  } else {
    
    let jokesList = model.getRandom(); 
    res.render("jokes", {
      jokesList: jokesList, title: "Welcome to the Joke Page!", message: "Please provide valid inputs!" 
    });
  }
}



module.exports = {
  getRandom,
  getAll,
  getCate,
  getOneCate,
  newJoke
};
