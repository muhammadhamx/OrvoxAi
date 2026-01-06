import { ContactService } from './contact.service';
import { CreateContactMessageDto } from './dto/contact-message.dto';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
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
    getUnreadCount(): Promise<{
        count: number;
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
