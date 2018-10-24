import * as mongoose from 'mongoose';

export const MenuOrderSchema = new mongoose.Schema({
	id:{
		type: mongoose.SchemaTypes.ObjectId,
		required: false,
	},

	name :{
		type: String,
		required: true,
	},

	types:{
		type: String,
		required: false,
	},

	price:{
		type: Number,
		required: true,
	},

	IsOrdered :{
		type: Boolean,
		required: true,
	}
})