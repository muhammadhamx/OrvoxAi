import { PrismaService } from '../prisma/prisma.service';
import { CreateAboutContentDto, UpdateAboutContentDto } from './dto/about-content.dto';
export declare class AboutService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllContent(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string | null;
        content: string;
    }[]>;
    getContentById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string | null;
        content: string;
    }>;
    createContent(dto: CreateAboutContentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string | null;
        content: string;
    }>;
    updateContent(id: string, dto: UpdateAboutContentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string | null;
        content: string;
    }>;
    deleteContent(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string | null;
        content: string;
    }>;
}
