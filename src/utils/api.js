import axios from 'axios';
import AuthService from '../utils/auth';

const BASE_URL = 'https://forum-api.dicoding.dev/v1';
const requestConfig = {
  baseURL: BASE_URL,
  timeout: 5000, // in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create an Axios instance with default configuration
const api = axios.create(requestConfig);
const apiWithAuth = axios.create(requestConfig);

// Request interceptor for Authenticated API calls
apiWithAuth.interceptors.request.use(
  (config) => {
    const token = AuthService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptors
const onFulfilledResponseInterceptor = (response) => response.data.data;
const onRejectedResponseInterceptor = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 500:
        console.error('Server error');
        break;
      default:
        console.error('An error occurred');
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received from server');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error setting up request:', error.message);
  }
  return Promise.reject(error);
};

api.interceptors.response.use(onFulfilledResponseInterceptor, onRejectedResponseInterceptor);
apiWithAuth.interceptors.response.use(
  onFulfilledResponseInterceptor,
  onRejectedResponseInterceptor,
);

const ApiService = {
  // Users endpoints
  registerUser: ({ name, email, password }) => api.post('/register', { name, email, password }),
  loginUser: ({ email, password }) => api.post('/login', { email, password }),
  getAllUsers: () => api.get('/users'),
  getOwnProfile: () => apiWithAuth.get('/users/me'),

  // Threads endpoints
  createThread: ({ title, body, category }) =>
    apiWithAuth.post('/threads', { title, body, category }),
  getAllThreads: () => api.get('/threads'),
  getThreadById: (threadId) => api.get(`/threads/${threadId}`),

  // Comments endpoints
  createComment: ({ threadId, content }) =>
    apiWithAuth.post(`/threads/${threadId}/comments`, { content }),

  // Votes endpoints
  upVoteThread: (threadId) => apiWithAuth.post(`/threads/${threadId}/up-vote`),
  downVoteThread: (threadId) => apiWithAuth.post(`/threads/${threadId}/down-vote`),
  neutralizeVoteThread: (threadId) => apiWithAuth.post(`/threads/${threadId}/neutral-vote`),
  upVoteComment: ({ threadId, commentId }) =>
    apiWithAuth.post(`/threads/${threadId}/comments/${commentId}/up-vote`),
  downVoteComment: ({ threadId, commentId }) =>
    apiWithAuth.post(`/threads/${threadId}/comments/${commentId}/down-vote`),
  neutralizeVoteComment: ({ threadId, commentId }) =>
    apiWithAuth.post(`/threads/${threadId}/comments/${commentId}/neutral-vote`),

  //Leaderboards endpoints
  getLeaderboards: () => api.get('/leaderboards'),
};

export default ApiService;
