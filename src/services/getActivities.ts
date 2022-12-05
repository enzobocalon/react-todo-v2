import axios from 'axios';

export const getActivities = async () => {
  const response = await axios.get(import.meta.env.VITE_API as string);
  if (response) {
    return response.data;
  } else {
    console.log('❌ Failing fetching data.');
  }
};
