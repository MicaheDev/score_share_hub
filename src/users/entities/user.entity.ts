import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: [true, 'Name is required, error from db'] })
  name: string;
  @Prop({ required: [true, 'Date is required, error from db'] })
  email: string;
  @Prop({ required: [true, 'isPaid is required, error from db'] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
