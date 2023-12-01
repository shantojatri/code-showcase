import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { INote } from '../interfaces/note.interface';

export type NoteDocument = Note & Document;

@Schema({
  timestamps: true,
})
export class Note implements INote {
  @Prop({ unique: true })
  title: string;

  @Prop()
  note: string;

  @Prop()
  colorClass: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
