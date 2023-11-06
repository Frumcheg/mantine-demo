const apiBase = 'https://randomuser.me/api';

export const api = {
  getUsers: async () => {
    const response = await fetch(`${apiBase}/?inc=gender,name,nat,id,picture&results=5`);
    return await response.json();
  },
};