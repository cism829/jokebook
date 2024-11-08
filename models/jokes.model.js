"use strict";

const db = require("./db-path");


function getRandom() {
    let sql = "SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1;";
    const joke = db.all(sql); 
    return joke;
  }

function getAll() {
  let sql = "SELECT * FROM jokes;";
  const data = db.all(sql);
  return data;
}

function getCate(){
    let sql = "Select * FROM categories;";
    const data = db.all(sql);
    return data;
}

function getOneCate(cate, limit) {
  let sql;
  let item;
  
  if (cate == "funnyJoke") {
      sql = "SELECT * FROM jokes WHERE category_id = 1";
  } 
  else if (cate == "lameJoke") {
      sql = "SELECT * FROM jokes WHERE category_id = 2";
  } 
  else {
      return "Entered parameter not Found !";
  }

  
  if (limit) {
      sql += " LIMIT ?";
      let params = [parseInt(limit)]; 
      item = db.all(sql, ...params);  
  } else {
      item = db.all(sql);  
  }

  return item;
}


function newJoke(params) {
    let sql = "INSERT INTO jokes " +
    "(setup, delivery, category_id) " +
    "VALUES(?, ?, ?); ";
  const info = db.run(sql, params);
  return info;
}

module.exports = {
    getRandom,
    getAll,
    getCate,
    getOneCate,
    newJoke
  };
  