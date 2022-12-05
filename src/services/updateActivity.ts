import axios from 'axios';

export const updateStatus = async (id: string, status: number) => {
  await axios.patch(`${import.meta.env.VITE_API}${id}`, {
    status: status
  });
};
