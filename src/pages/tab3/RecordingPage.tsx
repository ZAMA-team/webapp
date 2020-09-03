import React, { useState } from "react";
import { IonPage, IonContent, IonButton, IonItem, IonRange, IonLabel} from "@ionic/react";
import "./RecordingPage.css";
import history from "../../reactHistory";
// import Chart1 from "components/chart/chart1";
// import RecordComponent from "components/record";

const RecordingPage: React.FC = () => {
  const [value, setValue] = useState(50);
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  return (
    <IonPage>
      <IonContent>
        <div className="recording-sleep-time">
          <p>침대에 들어간 시간 입력</p>
          <p>잠 든 시간 입력</p>
          <p>잠 깬 시간 입력</p>
          <p>침대에서 일어난 시간 입력</p>
        </div>
      </IonContent>
      <IonContent style={{border:"red solid"}}>
        <div className="recording-sleep-score">
          <IonLabel>수면 만족도</IonLabel>
          <div className="recording-sleep-score-bar">
            <IonRange pin={true} value={value} onIonChange={e => setValue(e.detail.value as number)} />
            <p>{value}%</p>
          </div>
        </div>
      </IonContent>

      <IonButton
        expand="block"
        // disabled={contents.length === 0}
        onClick={() => {
          // actions.setPlay(true);
          // history.push("./tab2/player");
          console.log('저장하기')
        }}
      >
        저장하기
      </IonButton>
    </IonPage>
  );
};

export default RecordingPage;
