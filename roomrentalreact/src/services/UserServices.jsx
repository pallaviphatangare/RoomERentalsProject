import axios from 'axios';

export const API_URL = 'http://localhost:8080/api/users';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.timeout = 5000;  