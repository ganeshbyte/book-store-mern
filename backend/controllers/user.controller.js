import { User } from "../models/user.model.js";
import zod from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const zodUserCreateSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    role: zod.string(),
  });

  const validateSchema = zodUserCreateSchema.safeParse(req.body);

  if (!validateSchema.success) {
    res.status(400).json({
      data: null,
      error: "Invalid Inputs",
    });
  }
  //check for user alrady exists

  const userExists = await User.findOne({
    username: req.body.username,
  });

  if (userExists) {
    return res.status(409).json({
      data: null,
      error: "user already exists",
    });
  }

  //hash password
  const hashPass = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    username: req.body.username,
    password: hashPass,
    role: req.body.role,
  });

  const token = jwt.sign(
    {
      username: user.username,
    },
    process.env.JWT_SECRET
  );

  res.status(200).json({
    data: user,
    token: token,
    error: null,
  });
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(404).json({
        data: [],
        error: "users not found",
      });
    }

    res.status(200).json({
      data: users,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({
        data: null,
        error: "user not found",
      });
    }

    res.status(200).json({
      data: user,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    //validate update schema

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      res.status(404).json({
        data: null,
        error: "user not found",
      });
    }
  } catch (error) {
    res.staus(500).json({
      data: null,
      error: "internal server error",
    });
  }
};

export const signin = async (req, res) => {
  try {
    const zodUserSigninSchema = zod.object({
      username: zod.string(),
      password: zod.string(),
    });

    const validateSchema = zodUserSigninSchema.safeParse(req.body);

    if (!validateSchema.success) {
      res.status(400).json({
        data: null,
        error: "Invalid Inputs",
      });
    }

    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).json({
        data: null,
        error: "user not found",
      });
    }

    //check pasword correct or not
    const compare = await bcrypt.compare(req.body.password, user.password);

    if (!compare) {
      return res.status(401).json({
        data: null,
        error: "invalid password",
      });
    }

    const token = jwt.sign(
      {
        username: user.username,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      data: user,
      token: token,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};
