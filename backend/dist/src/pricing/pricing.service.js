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
exports.PricingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PricingService = class PricingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    parsePricingPlan(plan) {
        return {
            ...plan,
            features: this.safeParseJSON(plan.features, []),
        };
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
    async getAllPlans() {
        const plans = await this.prisma.pricingPlan.findMany({
            orderBy: { order: 'asc' },
        });
        return plans.map(p => this.parsePricingPlan(p));
    }
    async getPlanById(id) {
        const plan = await this.prisma.pricingPlan.findUnique({
            where: { id },
        });
        if (!plan) {
            throw new common_1.NotFoundException('Pricing plan not found');
        }
        return this.parsePricingPlan(plan);
    }
    async createPlan(dto) {
        const plan = await this.prisma.pricingPlan.create({
            data: dto,
        });
        return this.parsePricingPlan(plan);
    }
    async updatePlan(id, dto) {
        const plan = await this.prisma.pricingPlan.update({
            where: { id },
            data: dto,
        });
        return this.parsePricingPlan(plan);
    }
    async deletePlan(id) {
        return this.prisma.pricingPlan.delete({
            where: { id },
        });
    }
};
exports.PricingService = PricingService;
exports.PricingService = PricingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PricingService);
//# sourceMappingURL=pricing.service.js.map