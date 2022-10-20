"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  article() {
    return this.belongsTo("App/Models/Article");
  }
}

module.exports = Category;
