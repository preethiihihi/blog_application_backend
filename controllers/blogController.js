const { default: mongoose } = require('mongoose')
const Blog=require('../models/blog')
const Users =  require('../models/users')

module.exports.CreateBlog=async(req,res)=>{
     const {userId,title,description, article}=req.body
     if(!mongoose.Types.ObjectId.isValid(userId)){
          return res.status(200).json({"message":"user id not valid"})
     }
     const user= await Users.findById(userId)
     if(!user){
          return res.status(200).json({"message":"user id not found"})
     }
     const newBlog=new Blog({
          userId:mongoose.Types.ObjectId(userId),
          title:title,
          description:description,
          article:article
     })
     await newBlog.save()
     res.status(200).json({
          message:"successfull"
     })
}

module.exports.ReadBlogs=async(req,res)=>{
     const {user}=req.body;
      Blog.aggregate([
        ...(user
          ? [
              {
                $match: {
                  userId: mongoose.Types.ObjectId(user),
                },
              },
            ]
          : []),
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails",
            pipeline: [
              {
                $project: {
                  _id: 0,
                  email: 0,
                  password: 0,
                  __v: 0,
                },
              },
            ],
          },
        },
      ])
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((err) => {
          console.log("err ", err);
          return res.status(200).json({
            message: "no data",
            error: err,
          });
        });
}

module.exports.UpdateBlog=async(req,res)=>{
     const {blogId}=req.params;
     const {title, description}=req.body;
     const updatedBlog=await Blog.findByIdAndUpdate(
          blogId,
          {
               title:title,
               description:description
          },
          { new: true, runValidators: true }
     )
     if(!updatedBlog){
          res.status(400)
     }
     res.status(200).json({
          message:"updated successfully"
     })
}

module.exports.DeleteBlog=async(req,res)=>{
     const {blogId}=req.params
      const deleteBlog=await Blog.findByIdAndDelete(blogId)
      if(!deleteBlog){
          res.status(200).json({
               message:"cannot be deleted check once"
          })
      }
      res.status(200).json({
          message:"deleted successfully"
      })
}