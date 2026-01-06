import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
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
    uploadImage(file: Express.Multer.File): Promise<{
        url: string;
        filename: string;
    }>;
}
