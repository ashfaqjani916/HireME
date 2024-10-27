import axios from 'axios';

const BASE_URL = process.env.BACKEND_URL;


export async function findUser(user:any) {
  try {
    // console.log(BASE_URL);
    const response = await axios.post(`https://2b13-49-205-107-52.ngrok-free.app/checkUser`, 
      user,
    );
    // console.log(response.data)
    return response.data; // Return data if the request is successful
  } catch (error) {
    
      console.error('Unexpected error:', error);
    
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}
