export declare class CreateProjectDto {
    title: string;
    slug: string;
    category: string;
    description: string;
    status: string;
    technologies?: string;
    image?: string;
    year?: string;
    memberIds?: string[];
}
export declare class UpdateProjectDto {
    title?: string;
    slug?: string;
    category?: string;
    description?: string;
    status?: string;
    technologies?: string;
    image?: string;
    year?: string;
    memberIds?: string[];
}
