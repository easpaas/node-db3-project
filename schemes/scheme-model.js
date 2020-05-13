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

function findById(id){

}

function findSteps(id) {

}

function add(scheme) {

}

function addStep(stepData, id) {

}

function update(changes, id) {

}

function remove(id) {

}
