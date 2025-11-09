import request from 'supertest';
import app from '../app'; 

describe('Loans API', () => {
  let memberId = 'member1';
  let bookId = 'book1';

  it('should borrow a book', async () => {
    const res = await request(app)
      .post('/api/v1/loans/borrow')
      .send({ memberId, bookId });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Book borrowed successfully');
    expect(res.body.loan).toMatchObject({ memberId, bookId });
  });

  it('should return a book', async () => {
    const res = await request(app)
      .post('/api/v1/loans/return')
      .send({ memberId, bookId });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Book returned successfully');
    expect(res.body.loan).toMatchObject({ memberId, bookId });
  });
});
