export interface User {
  name: {
    first: string;
    last: string;
  };
}
const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow',
};
export const getUsers = async () => {
  const res = await fetch(
    'https://randomuser.me/api/?results=3',
    requestOptions
  );

  const users: User[] = (await res.json())['results'];
  return users;
};
