import axios from 'axios';

export const updateStatus = async (id: string, status: number) => {
  await axios.patch(`http://localhost:3001/${id}`, {
    status: status
  });
};
