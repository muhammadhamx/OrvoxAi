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
exports.TestimonialsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const testimonials_service_1 = require("./testimonials.service");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const public_decorator_1 = require("../common/decorators/public.decorator");
const testimonial_dto_1 = require("./dto/testimonial.dto");
const multer_1 = require("multer");
const path_1 = require("path");
let TestimonialsController = class TestimonialsController {
    constructor(testimonialsService) {
        this.testimonialsService = testimonialsService;
    }
    async getAllTestimonials() {
        return this.testimonialsService.getAllTestimonials();
    }
    async getTestimonialById(id) {
        return this.testimonialsService.getTestimonialById(id);
    }
    async createTestimonial(dto) {
        return this.testimonialsService.createTestimonial(dto);
    }
    async updateTestimonial(id, dto) {
        return this.testimonialsService.updateTestimonial(id, dto);
    }
    async deleteTestimonial(id) {
        return this.testimonialsService.deleteTestimonial(id);
    }
    async uploadImage(file) {
        return {
            url: `/uploads/testimonials/${file.filename}`,
            filename: file.filename,
        };
    }
};
exports.TestimonialsController = TestimonialsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "getAllTestimonials", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "getTestimonialById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [testimonial_dto_1.CreateTestimonialDto]),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "createTestimonial", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testimonial_dto_1.UpdateTestimonialDto]),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "updateTestimonial", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "deleteTestimonial", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/testimonials',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `testimonial-${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "uploadImage", null);
exports.TestimonialsController = TestimonialsController = __decorate([
    (0, common_1.Controller)('api/testimonials'),
    __metadata("design:paramtypes", [testimonials_service_1.TestimonialsService])
], TestimonialsController);
//# sourceMappingURL=testimonials.controller.js.map