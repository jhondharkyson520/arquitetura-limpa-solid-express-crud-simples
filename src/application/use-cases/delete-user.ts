import { UserRepository } from "../../infrastructure/repositories/user-repository";

export class DeleteUser {
    constructor(private userRepository: UserRepository) {}

    async execute(id: string) {
        const user =  await this.userRepository.delete(id);
        return user;
    }
}
