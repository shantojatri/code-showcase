<?php

namespace Database\Seeders;

use App\Models\Note;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NoteSeeder extends Seeder
{
      /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $notes = [
            [
                'title'        => 'This is first note',
                'slug'         => Str::slug('This is the first note'),
                'note_details' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam autem, earum officiis officia dolore ab nesciunt aliquid, ipsa modi inventore architecto itaque in tenetur, aliquam delectus id enim repudiandae maiores.',
                'color_class'  => 'bg-red-200',
            ],
            [
                'title'        => 'This is second note',
                'slug'         => Str::slug('This is second note'),
                'note_details' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam autem, earum officiis officia dolore ab nesciunt aliquid, ipsa modi inventore architecto itaque in tenetur, aliquam delectus id enim repudiandae maiores.',
                'color_class'  => 'bg-purple-200',
            ],
            [
                'title'        => 'This is third note',
                'slug'         => Str::slug('This is third note'),
                'note_details' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam autem, earum officiis officia dolore ab nesciunt aliquid, ipsa modi inventore architecto itaque in tenetur, aliquam delectus id enim repudiandae maiores.',
                'color_class'  => 'bg-pink-200',
            ],
            [
                'title'        => 'This is fourth note',
                'slug'         => Str::slug('This is fourth note'),
                'note_details' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam autem, earum officiis officia dolore ab nesciunt aliquid, ipsa modi inventore architecto itaque in tenetur, aliquam delectus id enim repudiandae maiores.',
                'color_class'  => 'bg-cyan-200',
            ],
        ];

        foreach ($notes as $note) {
            Note::create($note);
        }
    }
}
