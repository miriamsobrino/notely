'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { GoogleIcon } from '@/assets/Icons';
import { Title } from '@/components/Title';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/notes');
  }
  const handleSignInGoogle = async () => {
    await signIn('google', { redirect: false });
  };

  return (
    <div className='flex-col flex justify-center items-center min-h-screen gap-6 text-center'>
      <div className='flex flex-col justify-center items-center'>
        <Title size='text-5xl'>Notely</Title>
        <h2 className='text-lg text-blue-300'>
          Create notes easily and keep your ideas organized
        </h2>
      </div>
      <button
        onClick={handleSignInGoogle}
        className='flex gap-2 p-2 px-4 rounded-full shadow-md items-center text-sm text-neutral-600'
      >
        <GoogleIcon /> Sign in with Google
      </button>
    </div>
  );
}
