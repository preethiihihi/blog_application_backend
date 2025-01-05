const Blog=require('../models/blog')

module.exports.CreateBlog=async(req,res)=>{
     const {userId,title,description}=req.body
     const newBlog=new Blog({
          userId:userId,
          title:title,
          description:description
     })
     await newBlog.save()
     res.status(200).json({
          message:"successfull"
     })
}

module.exports.ReadBlogs=async(req,res)=>{
      const blogs=await Blog.find();
      res.status(200).json(blogs)
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