const db = require('../db-config.js');

module.exports = {
  find, 
  findById, 
  findSteps,
  add,
  addStep, 
  update, 
  remove
};


function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({id}).first();
}

function findSteps(id) {

}

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

function addStep(stepData, id) {

}

function update(changes, id) {

}

function remove(id) {

}
