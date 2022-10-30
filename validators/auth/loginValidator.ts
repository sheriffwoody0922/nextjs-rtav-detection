import processJoiErrors from "../processJoiErrors";
const Joi = require("joi");
const loginValidator = function (user:any) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(4).max(255).required(),
  });
  let { error } = schema.validate(user, { abortEarly: false });
  if (error) return processJoiErrors(error);
  else return null;
};
export default loginValidator;
