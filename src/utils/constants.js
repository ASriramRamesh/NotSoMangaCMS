export const ROLES = {
    USER: 'user',
    ADMIN: 'admin',
    MODERATOR: 'moderator'
  };
  
  export const COMIC_GENRES = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Slice of Life',
    'Superhero',
    'Thriller'
  ];
  
  export const COMIC_STATUS = {
    ONGOING: 'ongoing',
    COMPLETED: 'completed',
    HIATUS: 'hiatus',
    CANCELLED: 'cancelled'
  };
  
  export const ITEMS_PER_PAGE = 20;
  
  export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  
  export const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/webp'];
  
  export const API_ROUTES = {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
    USER_PROFILE: '/users/profile',
    COMICS: '/comics',
    CHAPTERS: '/chapters'
  };