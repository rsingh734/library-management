import request from 'supertest';
import app from '../app';

describe('Members API', () => {
  let memberId: string;

  it('should create a new member', async () => {
    const res = await request(app)
      .post('/api/v1/members')
      .send({
        name: 'Test Member',
        joinDate: '2023-01-01',
        membershipType: 'Premium',
        borrowedBooks: [],
        contactPreferences: { email: true, sms: false }
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    memberId = res.body.id;
  });

  it('should get all members', async () => {
    const res = await request(app).get('/api/v1/members');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a member by id', async () => {
    const res = await request(app).get(`/api/v1/members/${memberId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', memberId);
  });

  it('should update a member', async () => {
    const res = await request(app)
      .put(`/api/v1/members/${memberId}`)
      .send({ membershipType: 'Standard' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.membershipType).toBe('Standard');
  });

  it('should delete a member', async () => {
    const res = await request(app).delete(`/api/v1/members/${memberId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
