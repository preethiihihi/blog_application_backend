const mongoose=require("mongoose")

blogSchema=mongoose.Schema({
     userId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'Users',
         required:true
     },
      title:{
          type:String,
          required:true
      },
      description:{
          type:String,
          required:true
      },
      article:{
        type:String,
        required:true
      },
      timeStamp:{
          type:Date,
          default:Date.now
      }
})

const Blog=mongoose.model('Blogs',blogSchema);

module.exports=Blog
