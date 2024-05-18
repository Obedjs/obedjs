"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../../user/user.controller");
describe('User controller', () => {
    it('should be defined', () => {
        const instance = new user_controller_1.UserController();
        expect(instance).toBeDefined();
    });
    // Add more tests here
});
