import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FileModel } from 'src/Models/file.model';

export type InvitationDocument = HydratedDocument<Invitation>;

@Schema()
export class Invitation {

  @Prop()
  id: string;

  @Prop()
  from: string

  @Prop()
  name: string

  @Prop()
  to: string;

  @Prop()
  status: string;;

  @Prop()
  fileId: string;

  @Prop()
  fileName: string;


}

export const InvitationSchema = SchemaFactory.createForClass(Invitation);