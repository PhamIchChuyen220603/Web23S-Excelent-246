import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type FileDocument = File & Document;
@Schema()
export class File {
    @Prop()
    FileId: string;
    @Prop()
    name: string;
    @Prop()
    createdDate: string;
    @Prop()
    modifiedDate: string;
    @Prop()
    size: number;
    @Prop()
    type: string;
    @Prop()
    createdBy: string;
    @Prop()
    data: {};
}
export const FileSchema = SchemaFactory.createForClass(File)
