import { account } from './appwrite';
import { ID } from 'react-native-appwrite';

const authService = {
  // Register a user
  async register(email, password) {
    try {
      const user = await account.create(ID.unique(), email, password);
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message || 'Registration failed' };
    }
  },

  // Login
  async login(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return { success: true, session };
    } catch (error) {
      return { success: false, error: error.message || 'Login failed' };
    }
  },

  // Get logged-in user
  async getUser() {
    try {
      return await account.get(); // ✅ Directly return user object
    } catch (error) {
      return null; // ✅ No need to return an error message here
    }
  },

  // Logout user
  async logout() {
    try {
      await account.deleteSession('current');
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Logout failed' };
    }
  },
};

export default authService;
