import axios from 'axios';

export const deleteActivity = async (id: string) => {
  await axios.delete(`http://localhost:3001/${id}`);
};
