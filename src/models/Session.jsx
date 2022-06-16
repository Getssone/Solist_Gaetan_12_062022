export default class Session {
  userId;
  sessions;

  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
