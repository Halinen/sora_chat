import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/db/schemas/user.schema';
import { Model } from 'mongoose';
import { createUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('userModel') private readonly userModel: Model<User>,
  ) {}

  /**
   * @description 新增用户
   * @date 08/03/2022
   * @param {createUserDto} user
   * @memberof UsersService
   */
  public createOne(user: createUserDto) {
    new this.userModel(user).save();
  }
}
