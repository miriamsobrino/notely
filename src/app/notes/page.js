'use client';

import { useSession } from 'next-auth/react';
import { Navbar } from '@/components/Navbar';
import { NotesContainer } from '@/components/NotesContainer';
import { Aside } from '@/components/Aside';
import { Loader } from '@/components/Loader';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const currentDate = new Date().toISOString();
    setNotes((prevNotes) => [
      {
        id: uuidv4(),
        text: '',
        color: color,
        date: currentDate,
        isSaved: false,
      },
      ...prevNotes,
    ]);
  };
  return (
    <div className='flex flex-col w-5/6 mx-auto'>
      <Navbar />
      <div className='flex flex-col-reverse lg:flex-row gap-8 relative'>
        <Aside addNote={addNote} />
        <NotesContainer notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}
