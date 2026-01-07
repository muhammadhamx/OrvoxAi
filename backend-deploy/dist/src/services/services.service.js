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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServicesService = class ServicesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    safeParseJSON(jsonString, fallback = []) {
        if (jsonString === null || jsonString === undefined)
            return fallback;
        if (typeof jsonString !== 'string') {
            if (Array.isArray(jsonString) || (typeof jsonString === 'object' && jsonString !== null)) {
                return jsonString;
            }
            return fallback;
        }
        if (jsonString.trim() === '')
            return fallback;
        try {
            const parsed = JSON.parse(jsonString);
            return parsed;
        }
        catch (error) {
            console.error('JSON parse error:', { jsonString, error });
            return fallback;
        }
    }
    parseServiceItems(service) {
        return {
            ...service,
            items: this.safeParseJSON(service.items, []),
        };
    }
    async getAllServices() {
        const services = await this.prisma.service.findMany({
            orderBy: { order: 'asc' },
        });
        return services.map(s => this.parseServiceItems(s));
    }
    async getServiceById(id) {
        const service = await this.prisma.service.findUnique({
            where: { id },
        });
        if (!service) {
            throw new common_1.NotFoundException('Service not found');
        }
        return this.parseServiceItems(service);
    }
    async createService(dto) {
        const service = await this.prisma.service.create({
            data: dto,
        });
        return this.parseServiceItems(service);
    }
    async updateService(id, dto) {
        const service = await this.prisma.service.update({
            where: { id },
            data: dto,
        });
        return this.parseServiceItems(service);
    }
    async deleteService(id) {
        return this.prisma.service.delete({
            where: { id },
        });
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServicesService);
//# sourceMappingURL=services.service.js.map