import { Body, Param, Controller, Post, Get, Put, Query, Delete } from '@nestjs/common';
import { FileModel } from 'src/Models/file.model';
import { FileService } from './file.service';
@Controller('file')
export class FileController {
    constructor(private fileService: FileService) {
    }
    // file/get
    @Get('getAll')
    getAll() {
        return this.fileService.getAll();
    }

    @Get('get')
    getById(@Query('id') fileId: string) {
        return this.fileService.getById(fileId);
    }

    @Get('getByUser')
    getByUser(@Query('id') userId: string) {
        return this.fileService.getByUserId(userId);
    }

    @Get('getByMember')
    getByMember(@Query('id') userId: string) {
        return this.fileService.getByMemberId(userId);
    }

    @Delete('delete')
    deleteById(@Query('id') fileId: string) {
        return this.fileService.deleteById(fileId);
    }

    @Post('create')
    create(@Body() file: FileModel) {
        return this.fileService.create(file);
    }

    @Put('update')
    update(@Query('id') fileId: string, @Body() file: FileModel){
        return this.fileService.update(fileId, file);
    }

    @Get('getFilesByDate')
    getFilesByDate(){
        return this.fileService.getFilesByDate();
    }

    @Get('getFilesByTitle')
    getFilesByTitle(){
        return this.fileService.getFilesByTitle();
    }
}