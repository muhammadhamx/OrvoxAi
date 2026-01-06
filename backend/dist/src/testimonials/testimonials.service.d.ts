import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from './dto/testimonial.dto';
export declare class TestimonialsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTestimonials(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        image: string | null;
        text: string;
        author: string;
        company: string | null;
        verified: boolean;
    }[]>;
    getTestimonialById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        image: string | null;
        text: string;
        author: string;
        company: string | null;
        verified: boolean;
    }>;
    createTestimonial(dto: CreateTestimonialDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        image: string | null;
        text: string;
        author: string;
        company: string | null;
        verified: boolean;
    }>;
    updateTestimonial(id: string, dto: UpdateTestimonialDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        image: string | null;
        text: string;
        author: string;
        company: string | null;
        verified: boolean;
    }>;
    deleteTestimonial(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        image: string | null;
        text: string;
        author: string;
        company: string | null;
        verified: boolean;
    }>;
}
