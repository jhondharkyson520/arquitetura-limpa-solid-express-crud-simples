import { User } from '../../domain/entities/user';

/*
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
*/
// assim é melhor, pois se eu precisar trocar de banco de dados por exemplo, basta eu criar outro prisma-user-repository, ou sei la SQLite-user-repository, etc
//Fica meio que sendo uma estrutura "generica", com esses métodos do proprio node

export interface UserRepository {
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: string, data: Partial<User>): Promise<User>;
    delete(id: string): Promise<User>;
}