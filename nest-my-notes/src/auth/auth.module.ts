import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './strategies/local-strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schema/user.schema';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: `${process.env.JWT_SECRET}`,
        signOptions: { expiresIn: `${process.env.JWT_SECRET_EXPIRATION}` },
        // signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [AuthService, UsersService, LocalStrategy, RefreshJwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {
  constructor() {}
}
