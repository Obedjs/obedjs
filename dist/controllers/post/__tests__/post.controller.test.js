"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("../../post/post.controller");
describe('Post controller', () => {
    it('should be defined', () => {
        const instance = new post_controller_1.PostController();
        expect(instance).toBeDefined();
    });
    // Add more tests here
});
