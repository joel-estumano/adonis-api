"use strict";

class Category {
  get validateAll() {
    return true;
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }

  get rules() {
    return {
      name: "required",
      description: "required",
      stack: "required",
      color: "required|min:7|max:7",
    };
  }

  get messages() {
    return {
      "name.required": "name é required.",
      "description.required": "description é required.",
      "stack.required": "stack é required.",
      "color.required": "color é required.",
      "color.min": "color requer ao mínimo 7 caracteres.",
      "color.max": "color requer o máximo de 7 caracteres.",
    };
  }
}

module.exports = Category;
