import { useState } from 'react';
import { DeleteIcon } from '@/assets/Icons';

export const NoteItem = ({
  color,
  onSave,
  onDelete,
  noteId,
  date,
  initialContent,
  isSaved,
  setIsSaved,
}) => {
  const [noteContent, setNoteContent] = useState(initialContent || '');

  const maxLengthCharacters = 140;
  const handleChangeContentNote = (event) => {
    setNoteContent(event.target.value);
  };

  const handleDeleteNote = () => {
    onDelete(noteId);
  };

  const handleSaveNote = () => {
    onSave(noteId, noteContent);
  };

  const handleFocus = () => {
    setIsSaved(false);
  };
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString();
  };
  return (
    <article
      className={` lg:w-60 w-full h-auto  mt-4 rounded-lg relative ${
        isSaved ? 'opacity-70 ' : 'opacity-100'
      }`}
      style={{ backgroundColor: color }}
    >
      <div className='flex justify-between items-center px-2  h-[28px] rounded-lg rounded-b-none  '>
        <small>{formatDate(date)}</small>
        <button onClick={handleDeleteNote}>
          <DeleteIcon className='icon icon-tabler icons-tabler-outline icon-tabler-x w-4  hover:text-red-400 transition-all duration-100  ' />
        </button>
      </div>
      <textarea
        type='text'
        value={noteContent}
        onChange={handleChangeContentNote}
        onFocus={handleFocus}
        placeholder='Type to add a note...'
        className='resize-none border-none outline-none w-full h-44  px-2 py-1  bg-transparent rounded-lg rounded-t-none placeholder:text-gray-950'
        maxLength={maxLengthCharacters}
      />
      <button
        onClick={handleSaveNote}
        className='bg-zinc-950 text-zinc-50 right-2 bottom-[8px] px-2 rounded-full text-sm absolute'
      >
        {isSaved ? 'Saved' : 'Save'}
      </button>
    </article>
  );
};
