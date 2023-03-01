import { Module } from "@nestjs/common";
import { File, FileSchema } from "src/schema/file.schema";
import { FileController } from "./file.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from "./file.service";
@Module({
    imports: [
        MongooseModule.forFeature([{ name: File.name, schema: FileSchema }])
    ],
    controllers: [
        FileController
    ],
    providers: [
        FileService
    ],
})

export class FileModule { }