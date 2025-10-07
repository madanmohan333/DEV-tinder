const mongoose=require("mongoose");

const connectdb=async()=>{
   await mongoose.connect(
     `mongodb+srv://madanmohan:madanmadar333@cluster0.guwzahs.mongodb.net/devTinder`
   );
};
module.exports={connectdb};


// const mongoose = require("mongoose");

// const connectdb = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://madanmohan:plJLYfS9crB1CJvJ@cluster0.guwzahs.mongodb.net/myDatabase",
//     );
//     console.log("Database connection established ✅");
//   } catch (err) {
//     console.error("❌ Cannot connect to cluster:", err.message);
//   }
// };

// connectdb();
