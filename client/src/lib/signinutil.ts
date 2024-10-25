import axios from 'axios';

const BASE_URL = process.env.BACKEND_URL;


export async function findUser(user:any) {
  try {
    console.log(BASE_URL);
    const response = await axios.post(`${BASE_URL}/checkUser`, 
      user,
    );
    console.log(response.data)
    return response.data; // Return data if the request is successful
  } catch (error) {
    
      console.error('Unexpected error:', error);
    
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}
