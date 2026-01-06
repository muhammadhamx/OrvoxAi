import { AdminService } from './admin.service';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getAdminInfo(): {
        message: string;
        endpoints: {
            dashboard: string;
            upload: string;
        };
    };
    getDashboard(): Promise<{
        teamGroups: number;
        teamMembers: number;
        projects: number;
        services: number;
        pricingPlans: number;
        stats: number;
        testimonials: number;
    }>;
    uploadTeamImage(file: Express.Multer.File): Promise<{
        url: string;
        filename: string;
    }>;
}
