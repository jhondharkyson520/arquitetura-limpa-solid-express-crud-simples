import { UserRepository } from "../../infrastructure/repositories/user-repository";

export class GetUsers {
    constructor(private userRepository: UserRepository) {}

    async execute() {
        const users = await this.userRepository.findAll();
        return users;
    }
}