import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

const MONGO_MODEL = MongooseModule.forFeature([
  {
    name: 'userModel',
    schema: UserSchema,
    collection: 'user',
  },
]);
//表示全局模块，这样就不用重复引入db模块了
@Global()
@Module({
  imports: [
    //引入数据库以外还要引入模型
    MongooseModule.forRoot('mongodb://localhost:27017/sora'),
    MONGO_MODEL,
  ],
  exports: [MONGO_MODEL],
})
// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: (): Promise<typeof mongoose> =>
//       mongoose.connect('mongodb://localhost/nest'),
//   },
// ];
export class DbModule {}
