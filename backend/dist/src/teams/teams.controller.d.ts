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
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string;
        description: string;
    }>;
    updateGroup(id: string, dto: UpdateTeamGroupDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string;
        description: string;
    }>;
    deleteGroup(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string;
        description: string;
    }>;
    getAllMembers(): Promise<any[]>;
    getMemberBySlug(slug: string): Promise<any>;
    createMember(dto: CreateTeamMemberDto): Promise<any>;
    updateMember(id: string, dto: UpdateTeamMemberDto): Promise<any>;
    deleteMember(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        linkedin: string | null;
        role: string;
        slug: string;
        image: string;
        bio: string;
        skills: string;
        color: string;
        twitter: string | null;
        github: string | null;
        groupId: string;
    }>;
    uploadImage(file: Express.Multer.File): Promise<{
        url: string;
        filename: string;
    }>;
}
