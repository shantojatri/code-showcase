import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { type NoteType } from "@/interfaces/notesType";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_ENDPOINT;

export const useNoteStore = defineStore("notes", () => {
  const notes = ref<NoteType[]>([]);
  const allNotes = computed(() => notes.value);

  async function getAllNotes() {
    await axios
      .get(`${apiUrl}/notes`)
      .then((res) => {
        notes.value = res?.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function addNote(note: NoteType) {
    await axios
      .post(`${apiUrl}/notes`, note)
      .then((res) => {
        getAllNotes();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function updateNote(noteId: string, note: NoteType) {
    await axios
      .patch(`${apiUrl}/notes/${noteId}`, note)
      .then((res) => {
        getAllNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function deleteNote(noteId: string) {
    await axios
      .delete(`${apiUrl}/notes/${noteId}`)
      .then((res) => {
        getAllNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { notes, allNotes, addNote, getAllNotes, deleteNote, updateNote };
});
