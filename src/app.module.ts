import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MenuService } from '../src/src/menu.service';
// import { MenuController } from '../src/src/menu/menu.controller';
import { MenuModule } from '../src/src/menu/menu.module';

@Module({
  imports: [MenuModule],
  // controllers: [AppController, MenuController],
  // providers: [AppService, MenuService],
})
export class AppModule {}
