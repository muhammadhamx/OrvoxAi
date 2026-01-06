import { TeamsService } from './teams.service';
import { CreateTeamGroupDto, UpdateTeamGroupDto } from './dto/team-group.dto';
import { CreateTeamMemberDto, UpdateTeamMemberDto } from './dto/team-member.dto';
export declare class TeamsController {
    private teamsService;
    constructor(teamsService: TeamsService);
    getAllGroups(): Promise<any[]>;
    getGroupById(id: string): Promise<any>;
    createGroup(dto: CreateTeamGroupDto): Promise<{
        id: string;
        title: string;
        description: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateGroup(id: string, dto: UpdateTeamGroupDto): Promise<{
        id: string;
        title: string;
        description: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteGroup(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllMembers(): Promise<any[]>;
    getMemberBySlug(slug: string): Promise<any>;
    createMember(dto: CreateTeamMemberDto): Promise<any>;
    updateMember(id: string, dto: UpdateTeamMemberDto): Promise<any>;
    deleteMember(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        role: string;
        slug: string;
        image: string;
        bio: string;
        skills: string;
        icon: string;
        color: string;
        linkedin: string | null;
        twitter: string | null;
        github: string | null;
        groupId: string;
    }>;
    uploadImage(file: Express.Multer.File): Promise<{
        url: string;
        filename: string;
    }>;
}
