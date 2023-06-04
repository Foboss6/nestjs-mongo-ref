import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MemberDto } from 'src/dto/member.dto';

@Schema({ collection: 'member' })
export class MemberModel implements MemberDto {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;
}

export type MemberModelDocument = MemberModel & Document;
export const MemberSchema = SchemaFactory.createForClass(MemberModel);

MemberSchema.index({ email: 'text' });
