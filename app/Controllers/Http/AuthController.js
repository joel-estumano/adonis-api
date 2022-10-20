"use strict";

class AuthController {
  async login({ request, response, auth }) {
    try {
      const { email, password } = request.all();
      const token = await auth.attempt(email, password);
      return token;
    } catch (error) {
      return response.status(500).send({ error: error });
    }
  }

  async logout({ response, auth }) {
    await auth.logout();
  }
}

module.exports = AuthController;
