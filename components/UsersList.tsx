import { Accordion, Center, Loader, Pagination, Space } from '@mantine/core';
import React from 'react';
import { Error } from '@/components/Error';
import { UserViewItem } from '@/components/UserViewItem';
import { useUsers } from '@/hooks/useUsers';
import { useUsersQuery } from '@/hooks/useUsersQuery';

export function UsersList({ filter, nationalities }: { filter: string; nationalities: string[] }) {
  const query = useUsersQuery(nationalities);
  const { currentPage, total, setPage } = useUsers(query.data?.results, filter, nationalities);
  if (query.isLoading)
    return (
      <Center h={100}>
        <Loader color="blue" />
      </Center>
    );
  if (query.isError)
    return (
      <Center h={100}>
        <Error refetch={() => void query.refetch()} />
      </Center>
    );
  return (
    <>
      <Accordion>
        {currentPage.map((user) => (
          <UserViewItem key={user.login.uuid} user={user} />
        ))}
      </Accordion>
      <Space h="md" />
      {query.data && (
        <Center>
          <Pagination total={total} onChange={setPage} />
        </Center>
      )}
    </>
  );
}
