import { ContactService } from './contact.service';
import { CreateContactMessageDto } from './dto/contact-message.dto';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
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
    getUnreadCount(): Promise<{
        count: number;
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
