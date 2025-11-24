import request from 'supertest';
import app from '../app';

describe('Authors API', () => {
  let authorId: string;

  it('should create a new author', async () => {
    const res = await request(app)
      .post('/api/v1/authors')
      .send({
        name: 'Test Author',
        biography: 'Biography here',
        nationality: 'Testland',
        birthDate: '1990-01-01'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    authorId = res.body.id; // capture the generated ID
  });

  it('should get all authors', async () => {
    const res = await request(app).get('/api/v1/authors');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get an author by id', async () => {
    const res = await request(app).get(`/api/v1/authors/${authorId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', authorId);
  });

  it('should update an author', async () => {
    const res = await request(app)
      .put(`/api/v1/authors/${authorId}`)
      .send({ name: 'Updated Author' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Updated Author');
  });

  it('should delete an author', async () => {
    const res = await request(app).delete(`/api/v1/authors/${authorId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
