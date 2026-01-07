import { PrismaService } from '../prisma/prisma.service';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getDashboardStats(): Promise<{
        teamGroups: number;
        teamMembers: number;
        projects: number;
        services: number;
        pricingPlans: number;
        stats: number;
        testimonials: number;
    }>;
}
