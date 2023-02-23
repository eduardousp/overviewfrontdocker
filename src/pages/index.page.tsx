import { Permission } from '@model/Permission';
import { NextSeo } from 'next-seo';
import { useCallback, useEffect } from 'react';

import { api } from '@lib/api';

import { withSSRAuth } from '@utils/withSSRAuth';

export default function Home() {
  // TODO mover para o lugar correto
  const serviceGetPermissions = useCallback(async () => {
    try {
      const result = await api.get<Permission[]>('permissions');
      console.log('result', result.data);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    serviceGetPermissions();
  }, [serviceGetPermissions]);

  return (
    <div>
      <NextSeo title="Dashboard | Overview" />

      <h1>Home</h1>
    </div>
  );
}

export const getServerSideProps = withSSRAuth();
