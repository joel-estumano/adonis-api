const { hooks } = require("@adonisjs/ignitor");

hooks.after.providersBooted(() => {
  const Validator = use("Validator");

  const fullnameFn = async (data, field, message) => {
    const name = data.name;
    if(!name) return
    const exp = name.split(" ");
    if (exp.length <= 1) {
      throw message;
    } else {
      return;
    }
  };

  Validator.extend("fullname", fullnameFn);
});
