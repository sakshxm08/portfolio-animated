import bcrypt from "bcryptjs";
import User from "../models/user.js";

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) throw Error("Invalid username");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw Error("Incorrect password");
    res.status(200).json({ username, _id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, password: hash });

    res.status(200).json({ username, _id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { login, signup };
