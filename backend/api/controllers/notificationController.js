const notifications = [];

export function notify() {
  const { userId, message } = req.body;
  if (!userId || !message) {
    return res.status(400).json({ error: 'userId and message are required.' });
  }
  const notification = {
    id: notifications.length + 1,
    userId,
    message,
    read: false,
    timestamp: new Date(),
  };
  notifications.push(notification);
  res.status(201).json({ success: true, notification });
}
