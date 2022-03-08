import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop()
  @ApiProperty({
    default: 'normalUser',
  })
  user: string;
  @Prop()
  @ApiProperty({
    default: '123456',
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
