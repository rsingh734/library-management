export const sendReminder = (data: any) => {
  // For now, just return the data as if a notification was sent
  return { message: 'Notification sent successfully', notification: { memberId: data.memberId, message: data.message } };
};
