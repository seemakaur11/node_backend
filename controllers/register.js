import { register } from "../modules/register.js";

export const registerControllers = async (req, res) => {
  try {
    // Check if this user already exisits
    const user = await register.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ error: "That user already exisits!" });
    } else {
      const userData = new register({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        education: req.body.education,
        country: req.body.country,
        email: req.body.email,
        password: req.body.password,
      });

      await userData.save();
      return res.send({
        data: userData,
        message: "registration created successfully",
      });
    }
  } catch (err) {
    return err;
  }
};
//login user
export const loginControllers = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await register.findOne({ email: email });
    if (!user) return res.send({ error: "User not registered" });
    if (!!user) return res.send({ message: "User login successfully" });
  } catch (err) {
    return err;
  }
};
