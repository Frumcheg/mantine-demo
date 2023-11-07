import { Code } from '@/components/NatSelector';

const apiBase = 'https://randomuser.me/api';

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
  nat: Code;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export const api = {
  getUsers: async (nationalities: string[]): Promise<{ results: User[]; info: Info }> => {
    const response = await fetch(
      `${apiBase}/?inc=name,nat,picture,login&results=500&seed=123${
        nationalities.length ? `&nat=${nationalities.join(',')}` : ''
      }`
    );
    return await response.json();
  },
};
