import { useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import { Sidebar } from '@components/Sidebar';

import { routesConfig } from '@config/routesConfig';

type LayoutProps = {
  children: ReactNode;
  renderSidebar?: () => ReactNode;
};

function LoadingPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <NextSeo title="Carregando... | Overview" />

      <div role="status">
        <Loading />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export function Layout({ children, renderSidebar }: LayoutProps) {
  const session = useSession();

  const [isRouteChanging, setIsRouteChanging] = useState(false);

  const router = useRouter();

  useEffect(() => {
    function handleStart() {
      setIsRouteChanging(true);
    }

    function handleStop() {
      setIsRouteChanging(false);
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  if (session.status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <NextSeo title="Carregando... | Overview" />
        <div role="status">
          <Loading />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {renderSidebar ? renderSidebar() : <Sidebar routes={routesConfig} />}

      <div className="w-full h-full flex flex-col overflow-hidden">
        <Header />

        <main className="overflow-auto h-full scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5] scrollbar-thin">
          {isRouteChanging ? <LoadingPage /> : children}
        </main>
      </div>
    </div>
  );
}
