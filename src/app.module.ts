import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModel, MemberSchema } from './schemas/member.schema';
import { TeamModel, TeamSchema } from './schemas/team.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb://localhost:27017/nestjs-mongo-ref',
        retryAttempts: 3,
      }),
    }),
    MongooseModule.forFeature([
      { name: MemberModel.name, schema: MemberSchema },
      { name: TeamModel.name, schema: TeamSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
