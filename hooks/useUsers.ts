import { useMemo, useState } from 'react';
import { User } from '@/api/api';

const ITEM_PER_PAGE = 10;

export function useUsers(users: User[] = [], filter: string, nationalities: string[]) {
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => {
    if (!filter.length) return users;
    return users.filter((u) =>
      `${u.name.first} ${u.name.last}`.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, nationalities.join(), users.length]);
  const currentPage = filtered.slice((page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE);
  return {
    currentPage,
    total: Math.ceil(filtered.length / ITEM_PER_PAGE),
    setPage,
  };
}
