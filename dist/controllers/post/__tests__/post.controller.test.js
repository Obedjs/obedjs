"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("../../post/post.controller");
const post_service_1 = require("../../../services/post/post.service");
describe('Post controller', () => {
    it('should be defined', () => {
        const service = new post_service_1.PostService();
        const instance = new post_controller_1.PostController(service);
        expect(instance).toBeDefined();
    });
    // Add more tests here
});
