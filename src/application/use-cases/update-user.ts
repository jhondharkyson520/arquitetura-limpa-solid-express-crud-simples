import { UserRepository } from "../../infrastructure/repositories/user-repository";

export class UpdateUser {
    constructor(private userRepository: UserRepository) {}

    async execute(id: string, name: string, email: string) {
        const updatedUser = await this.userRepository.update(id, {name, email});
        return updatedUser;
    }
}
