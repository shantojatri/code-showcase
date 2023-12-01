import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { NoteEntity } from '../entities/note.entity';

export class CreateNoteDto extends NoteEntity {
  @IsString()
  @IsNotEmpty({ message: 'Title should not be empty' })
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: 'Note should not be empty' })
  readonly note: string;

  @IsString()
  @IsNotEmpty({ message: 'Color class should not be empty' })
  readonly colorClass: string;
}
