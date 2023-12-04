import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User implements IUser {
  @Prop()
  fullName: string;

  @Prop({ unique: true })
  mobile: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ default: null })
  gender: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
