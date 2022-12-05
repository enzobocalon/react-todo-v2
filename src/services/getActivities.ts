import axios from 'axios';

export const getActivities = async () => {
  const response = await axios.get('http://localhost:3001');
  if (response) {
    return response.data;
  } else {
    console.log('❌ Failing fetching data.');
  }
};
