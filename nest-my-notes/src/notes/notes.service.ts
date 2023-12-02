import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { INote } from './interfaces/note.interface';

@Injectable()
export class NotesService {
  constructor(@InjectModel('note') private readonly noteModel: Model<INote>) {}

  async create(createNoteDto: CreateNoteDto): Promise<INote> {
    return await new this.noteModel(createNoteDto).save();
  }

  async findAll(): Promise<INote[]> {
    const noteData = await this.noteModel.find(
      {},
      'title note colorClass createdAt',
    );
    if (!noteData || noteData.length == 0) {
      throw new NotFoundException('Notes data not found!');
    }
    return noteData;
  }

  async findOne(id: string): Promise<INote> {
    const existingNote = await this.noteModel
      .findById(id, 'title note colorClass createdAt')
      .exec();
    if (!existingNote) {
      throw new NotFoundException(`Note #${id} not found`);
    }
    return existingNote;
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<INote> {
    const existingNote = await this.noteModel.findByIdAndUpdate(
      id,
      updateNoteDto,
    );
    if (!existingNote) {
      throw new NotFoundException(`Note #${id} not found`);
    }
    return existingNote;
  }

  async remove(id: string) {
    const deletedNote = await this.noteModel.findByIdAndDelete(id);
    if (!deletedNote) {
      throw new NotFoundException(`Note #${id} not found`);
    }
    return deletedNote;
  }
}
