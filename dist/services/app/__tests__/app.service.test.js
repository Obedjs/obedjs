"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_service_1 = require("../../../services/app/app.service");
describe('App service', () => {
    it('should be defined', () => {
        const instance = new app_service_1.AppService();
        expect(instance).toBeDefined();
    });
    // Add more tests here
});
