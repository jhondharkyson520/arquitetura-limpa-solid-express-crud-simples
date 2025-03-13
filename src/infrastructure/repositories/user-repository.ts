import { prisma } from '../database/prisma-client';
import { User } from '../../domain/entities/user';

export class UserRepository {
    async create(user: User) {
        return prisma.user.create({data: user})
    }

    async findAll() {
        return prisma.user.findMany();
    }

    async update(id: string, data: Partial<User>) {
        return prisma.user.update({where: {id}, data});
    }

    async delete(id: string) {
        return prisma.user.delete({where: {id}});
    }
}
