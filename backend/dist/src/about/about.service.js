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
exports.AboutService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AboutService = class AboutService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllContent() {
        return this.prisma.aboutContent.findMany({
            orderBy: { order: 'asc' },
        });
    }
    async getContentById(id) {
        const content = await this.prisma.aboutContent.findUnique({
            where: { id },
        });
        if (!content) {
            throw new common_1.NotFoundException('About content not found');
        }
        return content;
    }
    async createContent(dto) {
        return this.prisma.aboutContent.create({
            data: dto,
        });
    }
    async updateContent(id, dto) {
        return this.prisma.aboutContent.update({
            where: { id },
            data: dto,
        });
    }
    async deleteContent(id) {
        return this.prisma.aboutContent.delete({
            where: { id },
        });
    }
};
exports.AboutService = AboutService;
exports.AboutService = AboutService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AboutService);
//# sourceMappingURL=about.service.js.map