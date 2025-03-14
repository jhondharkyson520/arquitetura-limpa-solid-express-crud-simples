import { prisma } from '../database/prisma-client';
import { User } from '../../domain/entities/user';
import { UserRepository } from './user-repository';

export class PrismaUserRepository implements UserRepository {
    async create(user: User): Promise<User> {
        return prisma.user.create({
            data: user
        });
    }

    async findAll(): Promise<User[]> {
        return prisma.user.findMany();
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        return prisma.user.update({
            where: { id },
            data
        });
    }

    async delete(id: string): Promise<User> {
        return prisma.user.delete({
            where: { id }
        });
    }
}
