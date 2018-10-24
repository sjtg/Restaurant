import { Connection } from 'mongoose';
import { MenuOrderSchema } from '../schemas/schema';
import { MENU_ORDER_MODEL_PROVIDER, DB_PROVIDER } from '../connections/constants';

export const menuorderProviders = [
	{
		provide: MENU_ORDER_MODEL_PROVIDER,
		useFactory: (connection: Connection) => connection.model('MenuOrder', MenuOrderSchema ),
		inject: [DB_PROVIDER],
	}
];