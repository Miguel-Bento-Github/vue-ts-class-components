import Http from '@/http-common';

/**
 * @classdesc This Class will represent the API handler.
 * It will be a full CRUD @class. You can learn more about it at:
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/CRUD}
 */
class Fetch {
  getAll() {
    return Http.get('/posts');
  }

  get(id: number) {
    return Http.get(`/posts/${id}`);
  }

  create(data: any) {
    return Http.post('/posts', data);
  }

  update(id: number, data: any) {
    return Http.put(`/posts/${id}`, data);
  }

  delete(id: number) {
    return Http.delete(`/posts/${id}`);
  }

  findById(id: string) {
    return Http.get(`/comments?postId=${id}`);
  }
}

export default new Fetch();
