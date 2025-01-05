const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");

router.post("/", blogController.CreateBlog);
router.get("/get-blogs",blogController.ReadBlogs)
router.put('/update-blog/:blogId',blogController.UpdateBlog)
router.delete('/delete-blog/:blogId', blogController.DeleteBlog)

module.exports = router;
