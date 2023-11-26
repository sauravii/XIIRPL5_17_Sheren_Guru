const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

// get all users data
router.get("/teachers", userController.index);

// get users by id
router.get("/teacher/:id", userController.show);

// post users
router.post("/teacher", userController.store);

// put users by id
router.put("/teacher/:id", userController.update);

// delete user by id
router.delete("/teacher/:id", userController.delete);

module.exports = router;
