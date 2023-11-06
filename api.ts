const apiBase = "https://randomuser.me/api";

export const api = {
  getUsers: async (nationalities: string[]) => {
    const response = await fetch(`${apiBase}/?inc=gender,name,nat,id,picture,login&results=500&seed=123${nationalities.length ? `&nat=${nationalities.join(",")}` : ""}`);
    return await response.json();
  },
};