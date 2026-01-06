"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const services_service_1 = require("./services.service");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const public_decorator_1 = require("../common/decorators/public.decorator");
const service_dto_1 = require("./dto/service.dto");
let ServicesController = class ServicesController {
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    async getAllServices() {
        return this.servicesService.getAllServices();
    }
    async getServiceById(id) {
        return this.servicesService.getServiceById(id);
    }
    async createService(dto) {
        return this.servicesService.createService(dto);
    }
    async updateService(id, dto) {
        return this.servicesService.updateService(id, dto);
    }
    async deleteService(id) {
        return this.servicesService.deleteService(id);
    }
};
exports.ServicesController = ServicesController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "getAllServices", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "getServiceById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_dto_1.CreateServiceDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "createService", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateService", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "deleteService", null);
exports.ServicesController = ServicesController = __decorate([
    (0, common_1.Controller)('api/services'),
    __metadata("design:paramtypes", [services_service_1.ServicesService])
], ServicesController);
//# sourceMappingURL=services.controller.js.map