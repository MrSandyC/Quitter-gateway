import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueetModule } from './queet/queet.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Queet-service',
        transport: Transport.TCP,
        options: {
          port: 5001,
        },
      },
      {
        name: 'User-service',
        transport: Transport.TCP,
        options: {
          port: 5002,
        },
      },
    ]),
    QueetModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
