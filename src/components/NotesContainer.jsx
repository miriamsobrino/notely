import { useSession } from 'next-auth/react';
import { NoteItem } from './NoteItem';
import { useEffect } from 'react';

export const NotesContainer = ({ notes, setNotes }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const savedNotes = localStorage.getItem('Notes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      const filteredNotes = parsedNotes.filter(
        (note) => note.text.trim() !== ''
      );
      setNotes(filteredNotes);
    }
  }, []);

  const user = session?.user;

  const deleteNote = (noteId) => {
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
    localStorage.setItem('Notes', JSON.stringify(filteredNotes));
  };

  const saveNote = (noteId, newContent) => {
    if (!newContent.trim()) {
      return;
    }

    const updateNotes = notes.map((note) =>
      note.id == noteId ? { ...note, text: newContent, isSaved: true } : note
    );
    setNotes(updateNotes);
    localStorage.setItem('Notes', JSON.stringify(updateNotes));
  };

  const setIsSaved = (noteId, value) => {
    const updateNotes = notes.map((note) =>
      note.id == noteId ? { ...note, isSaved: value } : note
    );
    setNotes(updateNotes);
    localStorage.setItem('Notes', JSON.stringify(updateNotes));
  };
  return (
    <section className='w-full flex flex-col '>
      <div className='flex items-end gap-2 '>
        <span className='text-3xl  font-light'>{user?.name}'s Notes</span>
      </div>
      <div className='h-[1px] bg-neutral-200 w-full mt-2'></div>
      <div className=' grid-cols-1 lg:grid-cols-5 grid '>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            onDelete={deleteNote}
            onSave={saveNote}
            noteId={note.id}
            color={note.color}
            date={note.date}
            initialContent={note.text}
            isSaved={note.isSaved}
            setIsSaved={(value) => setIsSaved(note.id, value)}
          />
        ))}
      </div>
    </section>
  );
};
