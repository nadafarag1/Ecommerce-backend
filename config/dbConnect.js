const { default: mongoose } = require("mongoose");
const dcConnect = require("mongoose");

const dbConnect = () => {
    try {
            const conn= mongoose.connect(process.env.MONGO_URL);
            console.log("Database connected successfully");
    } catch (error) {
        console.log("DAtabase error");
    }
};
module.exports = dbConnect;