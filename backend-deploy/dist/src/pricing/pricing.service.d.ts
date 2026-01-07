import { PrismaService } from '../prisma/prisma.service';
import { CreatePricingPlanDto, UpdatePricingPlanDto } from './dto/pricing-plan.dto';
export declare class PricingService {
    private prisma;
    constructor(prisma: PrismaService);
    private parsePricingPlan;
    private safeParseJSON;
    getAllPlans(): Promise<any[]>;
    getPlanById(id: string): Promise<any>;
    createPlan(dto: CreatePricingPlanDto): Promise<any>;
    updatePlan(id: string, dto: UpdatePricingPlanDto): Promise<any>;
    deletePlan(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        price: string;
        period: string;
        features: string;
        highlight: boolean;
    }>;
}
