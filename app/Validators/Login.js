'use strict'

class Login {
  get validateAll() {
    return true;
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }

  get rules() {
    return {
      email: "required",
      password: "required",
    };
  }

  get messages() {
    return {
      "email.required": "Não autorizado.",
      "password.required": "Não autorizado."
    };
  }
}

module.exports = Login
