"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_route_1 = __importDefault(require("./routes/app/app.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', app_route_1.default); // Use the generated route
const PORT = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
