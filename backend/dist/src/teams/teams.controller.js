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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const teams_service_1 = require("./teams.service");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const public_decorator_1 = require("../common/decorators/public.decorator");
const team_group_dto_1 = require("./dto/team-group.dto");
const team_member_dto_1 = require("./dto/team-member.dto");
const multer_1 = require("multer");
const path_1 = require("path");
let TeamsController = class TeamsController {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    async getAllGroups() {
        return this.teamsService.getAllGroups();
    }
    async getGroupById(id) {
        return this.teamsService.getGroupById(id);
    }
    async createGroup(dto) {
        return this.teamsService.createGroup(dto);
    }
    async updateGroup(id, dto) {
        return this.teamsService.updateGroup(id, dto);
    }
    async deleteGroup(id) {
        return this.teamsService.deleteGroup(id);
    }
    async getAllMembers() {
        return this.teamsService.getAllMembers();
    }
    async getMemberBySlug(slug) {
        return this.teamsService.getMemberBySlug(slug);
    }
    async createMember(dto) {
        return this.teamsService.createMember(dto);
    }
    async updateMember(id, dto) {
        return this.teamsService.updateMember(id, dto);
    }
    async deleteMember(id) {
        return this.teamsService.deleteMember(id);
    }
    async uploadImage(file) {
        return {
            url: `/uploads/team/${file.filename}`,
            filename: file.filename,
        };
    }
};
exports.TeamsController = TeamsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('groups'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getAllGroups", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getGroupById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('groups'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_group_dto_1.CreateTeamGroupDto]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "createGroup", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, team_group_dto_1.UpdateTeamGroupDto]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "updateGroup", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('groups/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "deleteGroup", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('members'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getAllMembers", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('members/slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getMemberBySlug", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('members'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_member_dto_1.CreateTeamMemberDto]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "createMember", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('members/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, team_member_dto_1.UpdateTeamMemberDto]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "updateMember", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('members/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "deleteMember", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/team',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `team-${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "uploadImage", null);
exports.TeamsController = TeamsController = __decorate([
    (0, common_1.Controller)('api/teams'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
//# sourceMappingURL=teams.controller.js.map