"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeamsService = class TeamsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    safeParseJSON(jsonString, fallback = []) {
        if (jsonString === null || jsonString === undefined)
            return fallback;
        if (typeof jsonString !== 'string') {
            if (Array.isArray(jsonString) || (typeof jsonString === 'object' && jsonString !== null)) {
                return jsonString;
            }
            return fallback;
        }
        if (jsonString.trim() === '')
            return fallback;
        try {
            const parsed = JSON.parse(jsonString);
            return parsed;
        }
        catch (error) {
            console.error('JSON parse error:', { jsonString, error });
            return fallback;
        }
    }
    parseTeamMember(member) {
        if (!member)
            return member;
        return {
            ...member,
            skills: this.safeParseJSON(member.skills, []),
        };
    }
    parseGroupWithMembers(group) {
        if (!group)
            return group;
        return {
            ...group,
            members: (group.members || []).map((member) => this.parseTeamMember(member)),
        };
    }
    async getAllGroups() {
        const groups = await this.prisma.teamGroup.findMany({
            include: {
                members: {
                    include: {
                        projects: {
                            include: {
                                project: true,
                            },
                        },
                    },
                },
            },
            orderBy: { order: 'asc' },
        });
        return groups.map(g => this.parseGroupWithMembers(g));
    }
    async getGroupById(id) {
        const group = await this.prisma.teamGroup.findUnique({
            where: { id },
            include: {
                members: {
                    include: {
                        projects: {
                            include: {
                                project: true,
                            },
                        },
                    },
                },
            },
        });
        if (!group) {
            throw new common_1.NotFoundException('Team group not found');
        }
        return this.parseGroupWithMembers(group);
    }
    async createGroup(dto) {
        return this.prisma.teamGroup.create({
            data: dto,
        });
    }
    async updateGroup(id, dto) {
        return this.prisma.teamGroup.update({
            where: { id },
            data: dto,
        });
    }
    async deleteGroup(id) {
        return this.prisma.teamGroup.delete({
            where: { id },
        });
    }
    async getAllMembers() {
        const members = await this.prisma.teamMember.findMany({
            include: {
                group: true,
                projects: {
                    include: {
                        project: true,
                    },
                },
            },
        });
        return members.map(m => this.parseTeamMember(m));
    }
    async getMemberBySlug(slug) {
        const member = await this.prisma.teamMember.findUnique({
            where: { slug },
            include: {
                group: true,
                projects: {
                    include: {
                        project: true,
                    },
                },
            },
        });
        if (!member) {
            throw new common_1.NotFoundException('Team member not found');
        }
        return this.parseTeamMember(member);
    }
    async createMember(dto) {
        const member = await this.prisma.teamMember.create({
            data: dto,
            include: {
                group: true,
            },
        });
        return this.parseTeamMember(member);
    }
    async updateMember(id, dto) {
        const member = await this.prisma.teamMember.update({
            where: { id },
            data: dto,
            include: {
                group: true,
            },
        });
        return this.parseTeamMember(member);
    }
    async deleteMember(id) {
        return this.prisma.teamMember.delete({
            where: { id },
        });
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeamsService);
//# sourceMappingURL=teams.service.js.map