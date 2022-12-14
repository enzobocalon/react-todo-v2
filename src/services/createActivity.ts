import axios from 'axios';

export const createActivity = async (message: string) => {
  if (message) {
    await axios.post(import.meta.env.VITE_API, {
      message: message,
      status: 0,
      isDeletable: true
    });
  }
};
