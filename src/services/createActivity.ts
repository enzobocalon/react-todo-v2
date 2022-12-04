import axios from 'axios';

export const createActivity = async (message: string) => {
  const response = await axios.post('http://localhost:3001', {
    message: message,
    status: 0,
    isDeletable: true
  });
};
