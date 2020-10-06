import http from '@/http-common';

class Api {
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

  findById(id: string) {
    return http.get(`/comments?postId=${id}`);
  }
}

export default new Api();
