import { PrismaService } from '../prisma/prisma.service';
import { CreateContactMessageDto } from './dto/contact-message.dto';
export declare class ContactService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllMessages(): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        message: string;
        read: boolean;
    }[]>;
    getUnreadCount(): Promise<number>;
    createMessage(dto: CreateContactMessageDto): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        message: string;
        read: boolean;
    }>;
    markAsRead(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        message: string;
        read: boolean;
    }>;
    deleteMessage(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        message: string;
        read: boolean;
    }>;
}
