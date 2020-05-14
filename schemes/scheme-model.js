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
  // SELECT sc.scheme_name, st.step_number, st.instructions 
// FROM steps as st
// JOIN schemes as sc
//     on st.scheme_id = sc.Id 

return db("steps as st")
  .join("schemes as sc", "st.scheme_id", "=", "sc.Id")
  .select("sc.scheme_name", "st.step_number", "st.instructions")
}

function addStep(stepData, id) {

}

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

function update(changes, id) {
  return db("schemes").where({id}).update(changes);
}

function remove(id) {
  return db("schemes").where({id}).del();
}
