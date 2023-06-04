import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'team' })
export class TeamModel {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ ref: 'MemberModel', type: Types.ObjectId })
  teamLead: Types.ObjectId;

  @Prop({ ref: 'MemberModel', type: [Types.ObjectId] })
  members: Types.ObjectId[];
}

export type TeamModelDocument = TeamModel & Document;
export const TeamSchema = SchemaFactory.createForClass(TeamModel);

TeamSchema.index({ email: 'text' });
