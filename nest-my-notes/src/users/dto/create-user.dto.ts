import { IsString, IsNotEmpty } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends UserEntity {
  @IsString()
  @IsNotEmpty({ message: 'The full name should not be empty' })
  readonly fullName: string;

  @IsString()
  @IsNotEmpty({ message: 'The mobile should not be empty' })
  readonly mobile: string;

  @IsString()
  @IsNotEmpty({ message: 'The email should not be empty' })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'The gender should not be empty' })
  readonly gender: string;

  @IsString()
  @IsNotEmpty({ message: 'The password should not be empty' })
  readonly password: string;
}
