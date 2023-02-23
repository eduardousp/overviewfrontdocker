import ptBR from 'date-fns/locale/pt-BR';
import { NextPage } from 'next';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps as NextAppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { registerLocale } from 'react-datepicker';

import { Layout } from '@components/Layout';

import '@styles/global.css';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ptBR', ptBR);

type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
    getSidebar?: () => ReactNode;
  };

  pageProps: NextAppProps['pageProps'] & {
    session: Session;
  };
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  let CustomComponent: ReactNode;

  if (Component.getLayout && Component.displayName !== 'ErrorPage') {
    CustomComponent = Component.getLayout(<Component {...pageProps} />);
  } else if (Component.displayName === 'ErrorPage') {
    CustomComponent = <Component {...pageProps} />;
  } else {
    CustomComponent = (
      <Layout renderSidebar={Component.getSidebar}>
        <Component {...pageProps} />
      </Layout>
    );
  }

  return <SessionProvider session={session}>{CustomComponent}</SessionProvider>;
}
