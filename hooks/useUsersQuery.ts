import { useQuery } from '@tanstack/react-query';
import { api } from '@/api/api';

export function useUsersQuery(nationalities: string[]) {
  return useQuery({
    queryKey: ['users', nationalities.join()],
    queryFn: () => api.getUsers(nationalities),
  });
}
