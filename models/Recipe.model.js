const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
 
 title: {
   type: String, 
   unique: true,
   required: true
  },
 
 level: { type: String, enum:[ "EasyPeasy", "Amateur Chef", "Ultra ProChef"] },  

 ingredients: {type:[String]},
 
 cuisine : {type: String, required: true},
 
 dishType: { type: String, enum:["breakfast", "main_course", "soup","snack", "drink", "dessert", "other"]},
 
 image : { type:String, default: "https://images.media-allrecipes.com/images/75131.jpg " },
 
 duration : {type: Number,  min: 0 },
 
 Creator : { type:String},
 
 created : { type: Date, default: Date.now} 
 
 // TODO: write the schema
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
