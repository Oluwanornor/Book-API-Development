const express = require("express");

const {createBook, getAllBook, getBookByID, editBook, deleteBook} = require("../controllers/bookController");

const router = express.Router();

router.post("/create", createBook);

router.get("/get", getAllBook)

router.get("/get/:id", getBookByID)

router.put("/:id", editBook)

router.delete("/:id", deleteBook)
module.exports = router;