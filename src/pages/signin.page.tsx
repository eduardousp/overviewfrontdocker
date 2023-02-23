import { signIn } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { ReactElement } from 'react';

export default function Signin() {
  return (
    <div className="bg-purple-900 h-[100vh] flex justify-center items-center flex-col px-3">
      <NextSeo title="Login | Overview" />

      <Image src="/svg/logo-white.svg" height={64} width={465} />

      <div className="rounded-3xl flex flex-col items-center w-full max-w-lg gap-6 px-20 py-12 mt-8 bg-white">
        <h1 className="text-3xl font-medium text-purple-900 uppercase">
          Seja bem vindo(a)!
        </h1>

        <button
          type="button"
          className="hover:bg-purple-900 hover:text-white flex items-center gap-4 px-5 py-3 text-xl font-medium text-purple-900 uppercase transition-colors border border-purple-900 rounded-lg"
          onClick={() => signIn('google', { callbackUrl: '/' })}
        >
          <Image src="/svg/google.svg" height={30} width={30} alt="" />
          Entrar com o Google
        </button>
      </div>
    </div>
  );
}

Signin.getLayout = (page: ReactElement) => page;
