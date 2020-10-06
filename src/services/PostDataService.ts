import http from '@/http-common';

class PostDataService {
  getAll() {
    return http.get('/posts');
  }

  get(id: number) {
    return http.get(`/posts/${id}`);
  }

  create(data: any) {
    return http.post('/posts', data);
  }

  update(id: number, data: any) {
    return http.put(`/posts/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/posts/${id}`);
  }

  deleteAll() {
    return http.delete('/posts');
  }

  findByTitle(title: string) {
    return http.get(`/posts?title=${title}`);
  }
}

export default new PostDataService();
