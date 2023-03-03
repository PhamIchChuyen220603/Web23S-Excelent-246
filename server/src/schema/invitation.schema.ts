import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FileModel } from 'src/Models/file.model';

export type InvitationDocument = HydratedDocument<Invitation>;

@Schema()
export class Invitation {
  @Prop()
  from: string

  @Prop()
  to: string;

  @Prop()
  isAccepted: boolean;

  @Prop()
  file: string;


}

export const InvitationSchema = SchemaFactory.createForClass(Invitation);