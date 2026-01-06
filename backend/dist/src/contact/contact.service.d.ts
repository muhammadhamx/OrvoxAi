import { PrismaService } from '../prisma/prisma.service';
import { CreateContactMessageDto } from './dto/contact-message.dto';
export declare class ContactService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllMessages(): Promise<{
        id: string;
        name: string;
        email: string;
        subject: string | null;
        message: string;
        read: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUnreadCount(): Promise<number>;
    createMessage(dto: CreateContactMessageDto): Promise<{
        id: string;
        name: string;
        email: string;
        subject: string | null;
        message: string;
        read: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    markAsRead(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        subject: string | null;
        message: string;
        read: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteMessage(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        subject: string | null;
        message: string;
        read: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
