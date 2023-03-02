import { Body, Param, Controller, Post, Get, Put } from '@nestjs/common';
import { FileModel } from 'src/Models/file.model';
import { FileService } from './file.service';
@Controller('file')
export class FileController {
    constructor(private fileService: FileService) {
    }
    // file/get
    @Get('get')
    get() {
        return this.fileService.getAll();
    }

    @Get('get/:id')
    getById(@Param('id') id: string) {
        return this.fileService.getByFileId(id);
    }

    @Post('create')
    create(@Body() file: FileModel) {
        return this.fileService.create(file);
    }

}