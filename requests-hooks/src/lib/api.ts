const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  async all() {
    const res = await fetch(`${BASE_URL}/todos`);
    const data = await res.json();
    return data;
  },
  async create(title: string, body: string, userId: number) {
    const res = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      body: JSON.stringify({ title, body, userId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  },
};
