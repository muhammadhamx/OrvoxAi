import { StatsService } from './stats.service';
import { CreateStatDto, UpdateStatDto } from './dto/stat.dto';
export declare class StatsController {
    private statsService;
    constructor(statsService: StatsService);
    getAllStats(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        prefix: string | null;
        label: string;
        value: string;
        suffix: string | null;
        icon: string | null;
        order: number;
    }[]>;
    getStatById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        prefix: string | null;
        label: string;
        value: string;
        suffix: string | null;
        icon: string | null;
        order: number;
    }>;
    createStat(dto: CreateStatDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        prefix: string | null;
        label: string;
        value: string;
        suffix: string | null;
        icon: string | null;
        order: number;
    }>;
    updateStat(id: string, dto: UpdateStatDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        prefix: string | null;
        label: string;
        value: string;
        suffix: string | null;
        icon: string | null;
        order: number;
    }>;
    deleteStat(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        prefix: string | null;
        label: string;
        value: string;
        suffix: string | null;
        icon: string | null;
        order: number;
    }>;
}
