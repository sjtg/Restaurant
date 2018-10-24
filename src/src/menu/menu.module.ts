import { Module } from '@nestjs/common';
import { MenuController } from '../menu/menu.controller';
import { MenuService } from '../menu.service';
import { menuorderProviders } from 'providers/providers';
import { DatabaseModule } from 'database/database.module';


@Module({
	imports : [ DatabaseModule],
	controllers: [ MenuController],
	providers: [ MenuService, ...menuorderProviders,],
})
export class MenuModule {}
