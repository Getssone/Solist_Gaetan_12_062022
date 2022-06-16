export default class Activity {
  userId;
  sessions;

  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
