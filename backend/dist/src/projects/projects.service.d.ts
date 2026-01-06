import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    private safeParseJSON;
    private parseProject;
    getAllProjects(status?: string): Promise<any[]>;
    getProjectBySlug(slug: string): Promise<any>;
    createProject(dto: CreateProjectDto): Promise<any>;
    updateProject(id: string, dto: UpdateProjectDto): Promise<any>;
    deleteProject(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        slug: string;
        image: string | null;
        technologies: string;
        category: string;
        status: string;
        year: string | null;
    }>;
}
