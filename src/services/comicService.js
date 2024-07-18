import api from './api';

const comicService = {
  getAllComics: async (page = 1, limit = 10) => {
    try {
      const response = await api.get(`/comics?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getComicById: async (id) => {
    try {
      const response = await api.get(`/comics/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createComic: async (comicData) => {
    try {
      const response = await api.post('/comics', comicData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateComic: async (id, comicData) => {
    try {
      const response = await api.put(`/comics/${id}`, comicData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteComic: async (id) => {
    try {
      const response = await api.delete(`/comics/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getChapters: async (comicId) => {
    try {
      const response = await api.get(`/comics/${comicId}/chapters`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getChapter: async (comicId, chapterId) => {
    try {
      const response = await api.get(`/comics/${comicId}/chapters/${chapterId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  uploadChapter: async (comicId, chapterData) => {
    try {
      const formData = new FormData();
      formData.append('title', chapterData.title);
      formData.append('number', chapterData.number);
      chapterData.pages.forEach((page, index) => {
        formData.append('pages', page, `page-${index + 1}`);
      });

      const response = await api.post(`/comics/${comicId}/chapters`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default comicService;