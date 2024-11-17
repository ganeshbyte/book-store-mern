import { User } from "../models/user.model.js";
import zod, { string } from "zod";

export const createUser = async (req, res) => {
  const zodUserCreateSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string(),
    password: zod.string(),
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

  const user = await User.create(req.body);

  res.status(200).json({
    data: user,
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

export const getUser = async (req, res) => {
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
