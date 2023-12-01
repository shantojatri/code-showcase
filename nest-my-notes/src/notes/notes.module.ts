import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { NoteSchema } from './schema/note.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'note', schema: NoteSchema }])],
  controllers: [NotesController],
  providers: [NotesService],
  // exports: [NotesService],
})
export class NotesModule {}
