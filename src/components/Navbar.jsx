import { useSession, signOut } from 'next-auth/react';
import { Title } from './Title';
import { Loader } from './Loader';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const { data: session, status } = useSession();
  const [showButtonLogOut, setShowButtonLogOut] = useState(false);
  const user = session?.user;
  const logoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        setShowButtonLogOut(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (status === 'loading') {
    return (
      <div className='flex min-h-screen w-full justify-center mt-10'>
        <Loader />
      </div>
    );
  }
  const showLogOut = () => {
    setShowButtonLogOut(!showButtonLogOut);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };
  return (
    <nav className='flex justify-between mb-14 lg:mb-10 mt-2 items-center '>
      <Link href='/notes' className='cursor-pointer'>
        <Title>Notely</Title>
      </Link>
      <div className='flex gap-2'>
        <button onClick={showLogOut} className='relative'>
          <img
            src={user?.image}
            className='rounded-full w-8 '
            alt={`${user.name}'s profile`}
          />
        </button>
        <div ref={logoutRef}>
          {showButtonLogOut && (
            <button
              className='bg-zinc-950 text-zinc-50 px-4 rounded-full h-8  absolute top-16 right-10 lg:right-40 hover:opacity-70'
              onClick={handleSignOut}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
