import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        admin: {
            id: any;
            email: any;
            name: any;
        };
    }>;
    getProfile(req: any): Promise<any>;
}
