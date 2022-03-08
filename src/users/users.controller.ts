import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { brotliDecompressSync } from 'zlib';

@ApiTags('用户模块')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiOperation({
    summary: '创建新用户',
  })
  @Post()
  //加了@Body()装饰器可以看参数
  createUser(@Body() createUserDto: createUserDto) {
    this.usersService.createOne(createUserDto);
  }
}
