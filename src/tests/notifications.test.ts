import request from 'supertest';
import app from '../app';

describe('Notifications API', () => {
  it('should send registration confirmation email', async () => {
    const res = await request(app)
      .post('/api/v1/notifications/registration')
      .send({
        email: 'test@example.com',
        name: 'Test User',
      });

    expect(res.statusCode).toBe(200);
  });

  it('should send reservation available notice', async () => {
    const res = await request(app)
      .post('/api/v1/notifications/reservation')
      .send({
        email: 'test@example.com',
        bookTitle: 'Test Book',
      });

    expect(res.statusCode).toBe(200);
  });

  it('should send return reminder email', async () => {
    const res = await request(app)
      .post('/api/v1/notifications/return-reminder')
      .send({
        email: 'test@example.com',
        bookTitle: 'Test Book',
        dueDate: '2023-12-31',
      });

    expect(res.statusCode).toBe(200);
  });
});
