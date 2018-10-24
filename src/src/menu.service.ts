import { Model} from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { MenuOrder } from 'interfaces/interface';
import { CreateMenuOrderDto } from 'dto/create.dto';
import { MENU_ORDER_MODEL_PROVIDER } from '../connections/constants';


@Injectable()
export class MenuService {
	constructor(@Inject(MENU_ORDER_MODEL_PROVIDER)
		private readonly menuorderModel: Model<MenuOrder>
		){}

	async create(createMenuOrderDto: CreateMenuOrderDto) : Promise<MenuOrder> {
		const createdOrder = new this.menuorderModel(createMenuOrderDto);
		return await createdOrder.save();
	}

	async findAll(): Promise<MenuOrder[]> {
		return await this.menuorderModel.find().exec();
		
	}
}
