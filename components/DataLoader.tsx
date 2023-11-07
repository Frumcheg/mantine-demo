import React from 'react';
import { Center, Loader } from '@mantine/core';
import { useUsersQuery } from '@/hooks/useUsersQuery';
import { Error } from '@/components/Error';
import { UsersList } from '@/components/UsersList';

export function DataLoader({ nationalities, filter }: { nationalities: string[]; filter: string }) {
  const query = useUsersQuery(nationalities);
  return (
    <>
      {query.isLoading && (
        <Center h={100}>
          <Loader color="blue" />
        </Center>
      )}
      {query.isError && (
        <Center h={100}>
          <Error refetch={() => query.refetch()} />
        </Center>
      )}
      {query.data && (
        <UsersList
          key={filter}
          data={query.data.results}
          filter={filter}
          nationalities={nationalities}
        />
      )}
    </>
  );
}
