"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_controller_1 = require("../../app/app.controller");
const app_service_1 = require("../../../services/app/app.service");
describe('App controller', () => {
    it('should be defined', () => {
        const service = new app_service_1.AppService();
        const instance = new app_controller_1.AppController(service);
        expect(instance).toBeDefined();
    });
    // Add more tests here
});
