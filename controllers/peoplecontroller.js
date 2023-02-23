const user = require("../models/people");

exports.people_get_custom =  (async (req, res) => {    
  try {
     const filter = req.body.query;
     let where = {};
     filter_by = Object.keys(filter)[0]
     if (filter_by) {
         where[filter_by] = { $regex: filter[filter_by], $options: "i" }
     }
  
     const page = parseInt(req.query.page) || 1;
     const pagesize = parseInt(req.query.pagesize) || 10;
     const skip = (page - 1) * pagesize;
     const total = await user.countDocuments(where);
     const pages = Math.ceil(total / pagesize);
     const order = req.body.order
     const sort_d = {}
     sort_d[filter_by]=order
     let data = await user.find(where).sort(sort_d).skip(skip).limit(pagesize);
     if (page > pages) {
         return res.status(404).json({
             status: "fail",
             message: "No page found",
         });
     }
     res.json({
         status: "success",
         filter,
         count: data.length,
         page,
         pages,
         data: data
     });
 } catch (error) {
     console.log(error);
     res.status(400).json({
         status: "error",
         message: "Server Error",
     });
   }
  });
exports.people_get_all =  async (request, response) => {

    try {
      const peoples = await peopleModel.find();
      response.send(peoples);
    } catch (error) {
      response.status(500).send(error);
    }
};
exports.people_get = async(req,res)=>{
  try
  {
      const people = await user.findById(req.params.id);
      res.status(200).json({"message":people})
  }catch(err){
      res.status(500).json({"message":err});  
  }
  };

exports.people_post = async (request, response) => {

    try {
      const people = new user(request.body);
      await people.save();
      response.send(people);
    } catch (error) {
      response.status(500).send(error);
    }
};
exports.people_put = async (request, response) => {
    try {
      const people=await user.findByIdAndUpdate(request.params.id, request.body);
      await people.save();
      response.send(people);
    } catch (error) {
      response.status(500).send(error);
    }
};
exports.people_delete = async (request, response) => {
    try {
      const people = await user.findByIdAndDelete(request.params.id);
  
      if (!people) response.status(404).send("No item found");
      response.status(200).send("Deleted");
    } catch (error) {
      response.status(500).send(error);
    }
};