import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from './dto/testimonial.dto';
export declare class TestimonialsController {
    private testimonialsService;
    constructor(testimonialsService: TestimonialsService);
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
    uploadImage(file: Express.Multer.File): Promise<{
        url: string;
        filename: string;
    }>;
}
