import request from 'supertest';
import app from '../app';

describe('Notifications API', () => {
  let memberId = 'member1';

  it('should send a reminder notification', async () => {
    const res = await request(app)
      .post('/api/v1/notifications/reminder')
      .send({
        memberId,
        message: 'Please return your borrowed book.',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Notification sent successfully');
    expect(res.body.notification).toMatchObject({ memberId });
  });
});
