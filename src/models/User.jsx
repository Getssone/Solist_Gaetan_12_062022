export default class User {
  id;
  userInfos;
  todayScore;
  keyData;

  constructor(data) {
    this.userId = data.userId;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore;
    this.keyData = data.keyData;
  }
}
