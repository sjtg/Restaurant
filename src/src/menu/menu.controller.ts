import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMenuOrderDto } from 'dto/create.dto';
import { MenuService } from 'src/menu.service';
import { MenuOrder as MenuOrderInterface } from 'interfaces/interface';


@Controller('menu')
export class MenuController {
	constructor(private readonly menuService: MenuService){}

	//Post menu orders to the database
	@Post()
	async create(@Body() createMenuOrderDto: CreateMenuOrderDto ){
		this.menuService.create(createMenuOrderDto);
	}

	//Get all data from the database (menu orders)
	@Get()
	async findAll(): Promise<MenuOrderInterface[]>{
		return this.menuService.findAll();
	}
}
