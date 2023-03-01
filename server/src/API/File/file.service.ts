import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { File, FileDocument } from "src/schema/file.schema";
import { FileModel } from '../../Models/file.model'
@Injectable({})
export class FileService {
    constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {
    }
    async getAll() {
        return await this.fileModel.find();
    }
    async getById(id: string): Promise<FileModel> | null {
        try {
            let fileData = await this.fileModel.findOne({ FileId: id });
            return fileData as FileModel;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    async create(file: FileModel) {
        let createdFile = new this.fileModel(file);
        return await createdFile.save();
    }
}