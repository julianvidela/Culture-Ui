import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: false, unique: true })
  auth0Id?: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  password?: string; // for local login

  @Prop()
  name: string;

  @Prop({ default: false })
  isPremium: boolean;

  @Prop({ type: Date })
  premiumExpiration?: Date;

  @Prop({ enum: Role, default: Role.USER })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
