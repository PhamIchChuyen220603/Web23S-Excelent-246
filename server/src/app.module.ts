import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './API/Auth/auth.module';
import { ChatModule } from './API/chat/chat.module';
import { FileModule } from './API/file/file.module';
import { InvitationModule } from './api/invitation/invitation.module';



@Module({
  imports: [

    // api module
    AuthModule,
    FileModule,
    ChatModule,
    // database mongo config
    MongooseModule.forRoot('mongodb+srv://admin:123@cluster0.o8n39ex.mongodb.net/?retryWrites=true&w=majority'),

    ConfigModule.forRoot(),

    InvitationModule,
  ],
  controllers: [
  ],
  providers: [],
})
export class AppModule { }
