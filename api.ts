const apiBase = 'https://randomuser.me/api';

export const api = {
  getUsers: async () => {
    const response = await fetch(`${apiBase}/?inc=gender,name,nat,id,picture,login&results=500&seed=123`);
    return await response.json();
  },
};