import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AuthDocument = Auth & Document;
@Schema()
export class Auth {
    @Prop()
    userId: string;
    @Prop()
    userName: string;
    @Prop()
    email: string;
    @Prop()
    photoURL: string;
}
export const AuthSchema = SchemaFactory.createForClass(Auth)
