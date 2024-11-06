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
    let sql = "Select name FROM categories;";
    const data = db.all(sql);
    return data;
}

function getOneCate(cate){
    if(cate == "funnyJoke"){
        let sql = "Select * FROM jokes WHERE category_id = 1;";
        const item = db.all(sql);
        return item;
    }
    else if(cate == "lameJoke"){
        let sql = "Select * FROM jokes WHERE category_id = 2;";
        const item = db.all(sql);
        return item;
    }
    else{
        return "Entered parameter not Found !";
    }


    // let sql = "SELECT * FROM categories WHERE name =?;";
    // const item = db.get(sql, cate);
}

function newJoke(params){
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
  