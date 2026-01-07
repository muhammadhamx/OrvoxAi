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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProjectsService = class ProjectsService {
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
    parseProject(project) {
        return {
            ...project,
            technologies: this.safeParseJSON(project.technologies, []),
        };
    }
    async getAllProjects(status) {
        const where = status ? { status } : {};
        const projects = await this.prisma.project.findMany({
            where,
            include: {
                members: {
                    include: {
                        member: {
                            include: {
                                group: true,
                            },
                        },
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        return projects.map(p => this.parseProject(p));
    }
    async getProjectBySlug(slug) {
        const project = await this.prisma.project.findUnique({
            where: { slug },
            include: {
                members: {
                    include: {
                        member: {
                            include: {
                                group: true,
                            },
                        },
                    },
                },
            },
        });
        if (!project) {
            throw new common_1.NotFoundException('Project not found');
        }
        return this.parseProject(project);
    }
    async createProject(dto) {
        const { memberIds, ...projectData } = dto;
        const project = await this.prisma.project.create({
            data: projectData,
        });
        if (memberIds && memberIds.length > 0) {
            await this.prisma.projectMember.createMany({
                data: memberIds.map((memberId) => ({
                    projectId: project.id,
                    memberId,
                })),
            });
        }
        return this.getProjectBySlug(project.slug);
    }
    async updateProject(id, dto) {
        const { memberIds, ...projectData } = dto;
        await this.prisma.project.update({
            where: { id },
            data: projectData,
        });
        if (memberIds !== undefined) {
            await this.prisma.projectMember.deleteMany({
                where: { projectId: id },
            });
            if (memberIds.length > 0) {
                await this.prisma.projectMember.createMany({
                    data: memberIds.map((memberId) => ({
                        projectId: id,
                        memberId,
                    })),
                });
            }
        }
        const project = await this.prisma.project.findUnique({
            where: { id },
            include: {
                members: {
                    include: {
                        member: {
                            include: {
                                group: true,
                            },
                        },
                    },
                },
            },
        });
        return this.parseProject(project);
    }
    async deleteProject(id) {
        return this.prisma.project.delete({
            where: { id },
        });
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map