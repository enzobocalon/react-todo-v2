import axios from 'axios';

export const updateStatus = async (id: string, status: number) => {
  await axios.patch(`${import.meta.env.VITE_API as string}/${id}`, {
    status: status
  });
};
