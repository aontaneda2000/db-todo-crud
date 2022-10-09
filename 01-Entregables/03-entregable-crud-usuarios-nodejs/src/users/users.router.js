const router = require("express").Router();

const todoServices = require("./users.services");

//obtener BD
router.get("/", todoServices.getUsers());
