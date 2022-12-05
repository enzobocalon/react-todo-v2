import axios from 'axios';

export const deleteActivity = async (id: string) => {
  await axios.delete(`${import.meta.env.VITE_API}${id}`);
};
