"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArticleSchema extends Schema {
  up() {
    this.create("articles", (table) => {
      table.increments();
      table
        .integer("user")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      /*   
      table.string('categories').notNullable() */
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.text('body').notNullable()
      table.integer('likes').defaultTo(0)
      table.integer('shares').defaultTo(0)
      table.boolean('isDeleted').defaultTo(false)
      table.boolean('active').defaultTo(true) 
      table.timestamps();
    });
  }

  down() {
    this.drop("articles");
  }
}

module.exports = ArticleSchema;
