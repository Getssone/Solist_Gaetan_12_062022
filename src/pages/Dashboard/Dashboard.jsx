import "./Dashboard.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hello from "../../components/Hello/Hello";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import Goals from "../../components/Charts/Goals/Goals";
import Rada from "../../components/Charts/Radar/Rada";
import Score from "../../components/Charts/Score/Score";
import DashboardAside from "../../components/DashboardAside/DashboardAside";
import GetData from "../../utils/getDatas";
import calories from "../../assets/calories-icon.svg";
import proteines from "../../assets/protein-icon.svg";
import glucides from "../../assets/carbs-icon.svg";
import lipides from "../../assets/fat-icon.svg";
import Weight from "../../components/Charts/Weight/Weight"

export default function Dashboard() {
  const param = useParams();
  const userId = param.id;

  console.log(userId);
  const [user, updateUser] = useState({});
  const [userActivity, updateUserActivity] = useState({});
  const [userAverageSession, updateUserAverageSession] = useState({});
  const [userPerfomance, updateUserPerfomance] = useState({});

  useEffect(getAllData, [userId]);

  /**
   * @description gets all the data from mocked data or API
   */

   function getAllData() {
    const datas = new GetData();

    datas.getInfo(userId).then((data) => updateUser(data));
    datas.getActivity(userId).then((data) => updateUserActivity(data));
    datas
      .getAverageSession(userId)
      .then((data) => updateUserAverageSession(data));
    datas.getPerformance(userId).then((data) => updateUserPerfomance(data));
  }


  return (
    <div className="dashboard">
      <Header />
      <Aside />
      <Hello userName={user?.userInfos?.firstName}/>

      <div className="mainDashboard">
      <div className="allFigures">
        <Weight data={userActivity?.sessions} />
          <div className="figures">
          <Goals data={userAverageSession} />
          <Rada data={userPerfomance} />
          <Score data={user?.todayScore} />
          </div>
        </div>
        <div className="dashboard-aside">
        <DashboardAside        
            image={calories}
            title="Calories"
            value={user?.keyData?.calorieCount}
            unit="kCal"/>
        <DashboardAside 
            image={proteines}
            title= "Proteines"
            value={user?.keyData?.proteinCount}
            unit="g"/>
        <DashboardAside 
            image={glucides}
            title= "Glucides"
            value={user?.keyData?.carbohydrateCount}
            unit="g"/>
        <DashboardAside
            image={lipides}
            title="Lipides"
            value={user?.keyData?.lipidCount}
            unit="g"
          />
        </div>
      </div>
      </div>
  );
}

//;
