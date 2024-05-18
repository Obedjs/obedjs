"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_service_1 = require("../../../services/post/post.service");
describe('Post service', () => {
    it('should be defined', () => {
        const instance = new post_service_1.PostService();
        expect(instance).toBeDefined();
    });
    // Add more tests here
});
