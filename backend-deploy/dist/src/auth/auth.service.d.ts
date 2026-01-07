import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        admin: {
            id: any;
            email: any;
            name: any;
        };
    }>;
    validateToken(payload: any): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
