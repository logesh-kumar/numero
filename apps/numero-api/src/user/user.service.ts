import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
}
