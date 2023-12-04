import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const { password, ...newDto } = createUserDto;
    const hashed = await this.hashedPassword(password);
    return await new this.userModel({ ...newDto, ...hashed }).save();
  }

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find({}, 'fullName phone email gender');
  }

  async findOne(id: string) {
    return await this.userModel.findById(id, 'fullName phone email gender');
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    const { password, ...newDto } = updateUserDto;
    const hashed = await this.hashedPassword(password);
    return await this.userModel.findByIdAndUpdate(
      id,
      { ...newDto, ...hashed },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }

  async findWithEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  /***
   * Hashed password
   ***/
  async hashedPassword(password: string) {
    const hashed = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT_VALUE),
    );
    return {
      password: hashed,
    };
  }
}
