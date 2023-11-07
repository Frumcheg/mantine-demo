import { useUsers } from '@/hooks/useUsers';
import { act, renderHook } from '@testing-library/react';

const testUser = {
  name: {
    title: 'Mr',
    first: 'Heldo',
    last: 'Campos',
  },
  login: {
    uuid: '71deeadb-1d62-402a-aafa-2645bbafb318',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  nat: 'BR',
} as const;

describe('useUsers', () => {
  it('empty data', () => {
    const { result } = renderHook(() => useUsers([], '', []));
    expect(result.current.currentPage).toEqual([]);
    expect(result.current.total).toEqual(0);
  });
  it('one item', () => {
    const users = [testUser];
    const { result } = renderHook(() => useUsers(users, '', []));
    expect(result.current.currentPage).toEqual(users);
    expect(result.current.total).toEqual(1);
  });
  it('two page of data', () => {
    const users = Array.from({ length: 15 }, () => testUser);
    const { result } = renderHook(() => useUsers(users, '', []));
    expect(result.current.currentPage).toEqual(users.slice(0, 10));
    expect(result.current.total).toEqual(2);
    act(() => result.current.setPage(2));
    expect(result.current.currentPage).toEqual(users.slice(10));
  });
  it('many pages and jumping between them', () => {
    const users = Array.from({ length: 150 }, (_, i) => ({
      ...testUser,
      login: { uuid: `${i + 1}` },
    }));
    const { result } = renderHook(() => useUsers(users, '', []));
    expect(result.current.total).toEqual(15);
    act(() => result.current.setPage(3));
    expect(result.current.currentPage).toEqual(users.slice(20, 30));
    act(() => result.current.setPage(15));
    expect(result.current.currentPage).toEqual(users.slice(140));
  });
  it('filtering with empty result', () => {
    const users = Array.from({ length: 10 }, () => testUser);
    const { result } = renderHook(() => useUsers(users, 'zzz', []));
    expect(result.current.currentPage).toEqual([]);
  });
  it('filtering', () => {
    const genName = (i: number) => '...'.replaceAll('.', 'abcdefghijklmn'.charAt(i));
    const users = Array.from({ length: 10 }, (_, i) => ({
      ...testUser,
      name: { ...testUser.name, first: genName(i) },
    }));
    const { result } = renderHook(() => useUsers(users, 'ddd', []));
    expect(result.current.currentPage).toEqual([
      {
        ...testUser,
        name: { ...testUser.name, first: genName(3) },
      },
    ]);
  });
});
