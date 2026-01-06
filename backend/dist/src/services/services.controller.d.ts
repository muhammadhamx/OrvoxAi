import { ServicesService } from './services.service';
import { CreateServiceDto, UpdateServiceDto } from './dto/service.dto';
export declare class ServicesController {
    private servicesService;
    constructor(servicesService: ServicesService);
    getAllServices(): Promise<any[]>;
    getServiceById(id: string): Promise<any>;
    createService(dto: CreateServiceDto): Promise<any>;
    updateService(id: string, dto: UpdateServiceDto): Promise<any>;
    deleteService(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        order: number;
        title: string;
        items: string;
    }>;
}
