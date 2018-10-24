import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../../src/connections/constants';

export const databaseProviders = [
	{
		provide: DB_PROVIDER,
		useFactory: async () => {
			(mongoose as any) .Promise = global.Promise;
			// connection to our mongoose db
			return await mongoose.connect("mongodb://localhost:27017/restaurant");

		},
	},
];