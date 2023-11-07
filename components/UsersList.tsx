import { Accordion, Center, Pagination, Space } from '@mantine/core';
import React from 'react';
import { UserViewItem } from '@/components/UserViewItem';
import { useUsers } from '@/hooks/useUsers';
import { User } from '@/api/api';

export function UsersList({
  data,
  filter,
  nationalities,
}: {
  data: User[];
  filter: string;
  nationalities: string[];
}) {
  const { currentPage, total, setPage } = useUsers(data, filter, nationalities);
  return (
    <>
      <Accordion>
        {currentPage.map((user) => (
          <UserViewItem key={user.login.uuid} user={user} />
        ))}
      </Accordion>
      <Space h="md" />
      {data.length && (
        <Center>
          <Pagination total={total} onChange={setPage} />
        </Center>
      )}
    </>
  );
}
