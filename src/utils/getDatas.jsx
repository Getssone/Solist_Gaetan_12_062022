import User from "../models/User";
import Activity from "../models/Activity";
import Session from "../models/Session";
import Performance from "../models/Performance";



/**
 * @description This class provides methods which fetch datas from mocked data or API
 */
export default class GetData {
  /**
   * @description gets the user information (depends on userID)
   * @param {number} userId  id of the user
   * @returns A promise with the User model object of this user
   * @numberof GetData
   */
  
  async getInfo(userId) {
    try {
    //mocked data
    const response = await fetch( userId + ".json");
    //API
    // const response = await fetch("http://localhost:3000/user/" + userId);
      // console.log("http://localhost:3000/user/" + userId)
      const datas = await response.json();
      return new User(datas.data)
      
    } 
    catch (error) {
    }
  }

  /**
   * @description gets the user  activity data (depends on userID)
   * @param {number} userId id of the user
   * @returns A promise with the Activity of this user
   * @numberof GetData
   */
  async getActivity(userId) {
    try {
      //mocked data
      const response = await fetch(userId + "/activity.json");
      //API
      // const response = await fetch("http://localhost:3000/user/" + userId +"/activity");
      // console.log("http://localhost:3000/user/" + userId +"/activity")
      const datas = await response.json();
      return new Activity(datas.data)
      
    } 
    catch (error) {
    }
  }

 /**
   * @description gets the user average session data (depends on userID)
   * @param {number} userId id of the user
   * @returns  A promise with the Session of this user
   * @numberof GetData
   */
  async getAverageSession(userId) {
    try {
      //mocked data
      const response = await fetch( userId + "/average-session.json");
      //API
      // const response = await fetch("http://localhost:3000/user/" + userId +"/average-sessions");
      // console.log("http://localhost:3000/user/" + userId +"/average-sessions")
      const datas = await response.json();
      return new Session(datas.data)
      
    } 
    catch (error) {
    }
  }

  /**
   * @description gets the user performance data (depends on userID)
   * @param {number} userId id of the user
   * @returns A promise with the Performance of this user
   * @numberof GetData
   */
  async getPerformance(userId) {
    try {
      //mocked data
      const response = await fetch(userId + "/performance.json");
      //API
      // const response = await fetch("http://localhost:3000/user/" + userId +"/performance");
      // console.log("http://localhost:3000/user/" + userId +"/performance")
      const datas = await response.json();
      return new Performance(datas.data);
    } catch (error) {
    }
  }
}
