"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../../../services/user/user.service");
describe('User service', () => {
    it('should be defined', () => {
        const instance = new user_service_1.UserService();
        expect(instance).toBeDefined();
    });
    // Add more tests here
});
