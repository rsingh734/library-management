import request from 'supertest';
import app from '../app';

describe('Books API', () => {
  let bookId: string;

  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/v1/books')
      .send({
        title: 'Test Book',
        authorId: 'some-author-id', // replace with actual authorId if needed
        ISBN: '1234567890',
        publicationYear: 2023,
        genre: 'Fiction',
        availableCopies: 5,
        totalCopies: 5,
        description: 'Test book description'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    bookId = res.body.id;
  });

  it('should get all books', async () => {
    const res = await request(app).get('/api/v1/books');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a book by id', async () => {
    const res = await request(app).get(`/api/v1/books/${bookId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', bookId);
  });

  it('should update a book', async () => {
    const res = await request(app)
      .put(`/api/v1/books/${bookId}`)
      .send({ title: 'Updated Book' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toBe('Updated Book');
  });

  it('should delete a book', async () => {
    const res = await request(app).delete(`/api/v1/books/${bookId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
