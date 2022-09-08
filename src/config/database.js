const mongoose	=	require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
main().catch(err => console.log(err));

async function main(){
	await	mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
}