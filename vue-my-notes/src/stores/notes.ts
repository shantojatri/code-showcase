import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type NoteType } from "@/interfaces/notesType"

export const useCounterStore = defineStore('notes', () => {
  const notes = ref<NoteType[]>([
    {
      title: 'This is a demo note 1',
      note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, debitis laborum aspernatur aliquid placeat cum sed dolores omnis aut dignissimos inventore voluptate! Temporibus ipsum sed perferendis! Inventore architecto sunt ab?',
      color: 'bg-purple-200',
      createdAt: new Date().toLocaleDateString(),
    },
    {
      title: 'This is a demo note 2',
      note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, debitis laborum aspernatur aliquid placeat cum sed dolores omnis aut dignissimos inventore voluptate! Temporibus ipsum sed perferendis! Inventore architecto sunt ab?',
      color: 'bg-red-200',
      createdAt: new Date().toLocaleDateString(),
    },
    {
      title: 'This is a demo note 3',
      note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, debitis laborum aspernatur aliquid placeat cum sed dolores omnis aut dignissimos inventore voluptate! Temporibus ipsum sed perferendis! Inventore architecto sunt ab?',
      color: 'bg-yellow-200',
      createdAt: new Date().toLocaleDateString(),
    },
    {
      title: 'This is a demo note 4',
      note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, debitis laborum aspernatur aliquid placeat cum sed dolores omnis aut dignissimos inventore voluptate! Temporibus ipsum sed perferendis! Inventore architecto sunt ab?',
      color: 'bg-pink-200',
      createdAt: new Date().toLocaleDateString(),
    },
  ])
  const allNotes = computed(() => notes.value)

  function addNotes(item:NoteType) {
    notes.value.push(item);
  }

  return { notes, allNotes, addNotes }
})
