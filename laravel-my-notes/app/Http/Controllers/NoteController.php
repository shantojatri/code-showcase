<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Support\Str;
use App\Http\Requests\NoteRequest;
use Illuminate\Support\Facades\Session;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notes = Note::get(['id', 'title', 'note_details', 'color_class', 'created_at']);
        return view('dashboard.notes.index', compact('notes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('dashboard.notes.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NoteRequest $request)
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['title']);
        $validated['color_class'] = Note::BG_COLORS[array_rand(Note::BG_COLORS)];
        $note = Note::create($validated);

        if ($note) {
            Session::flash('success', 'Note Created Successfully.');
            return redirect()->route('dashboard.notes.index');
        } else {
            Session::flash('error', 'Note Create Failed!');
            return back();
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Note $note)
    {
        return view('dashboard.notes.edit', compact('note'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(NoteRequest $request, Note $note)
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['title']);
        $note->update($validated);

        if ($note) {
            Session::flash('success', 'Note Updated Successfully.');
            return redirect()->route('dashboard.notes.index');
        } else {
            Session::flash('error', 'Note Update Failed!');
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        $del = $note->delete();

        if ($del) {
            Session::flash('success', 'Note Deleted Successfully.');
            return redirect()->route('dashboard.notes.index');
        } else {
            Session::flash('error', 'Note Delete Failed!');
            return back();
        }
    }
}
