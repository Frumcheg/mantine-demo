import { useQuery } from '@tanstack/react-query';
import { api } from '@/api';
import { Accordion, Center, Loader, Pagination, Space } from '@mantine/core';
import React, { useMemo } from 'react';
import { Error } from '@/components/Error/Error';
import { UserViewItem } from '@/components/UserViewItem/UserViewItem';

const ITEM_PER_PAGE = 10;

export function UsersList({ filter, nationalities }: { filter: string; nationalities: string[] }) {
  const [page, setPage] = React.useState(1);
  const userQuery = useQuery({
    queryKey: ['users', nationalities.join()],
    queryFn: () => api.getUsers(nationalities),
  });
  const filtered = useMemo(() => {
    if (!userQuery.data) return [];
    if (!filter.length) return userQuery.data.results;
    return userQuery.data.results.filter((u) =>
      `${u.name.first} ${u.name.last}`.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, userQuery.data?.info.seed, nationalities.join()]);
  const currentPage = filtered.slice((page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE);
  if (userQuery.isLoading)
    return (
      <Center h={100}>
        <Loader color="blue" />
      </Center>
    );
  if (userQuery.isError)
    return (
      <Center h={100}>
        <Error refetch={() => void userQuery.refetch()} />
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
      {userQuery.data && (
        <Center>
          <Pagination total={Math.floor(filtered.length / ITEM_PER_PAGE)} onChange={setPage} />
        </Center>
      )}
    </>
  );
}
