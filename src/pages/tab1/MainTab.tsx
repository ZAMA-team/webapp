import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonModal } from "@ionic/react";
import MainContainer from "components/containers/MainContainer";
import SlideContainer from "components/containers/SlideContainer";
import GridContainer from "components/containers/GridContainer";
import SurveyAlert from "components/alerts/SurveyAlert";
import Survey from "components/survey/Survey";
import { useParams } from 'react-router-dom';

const MainTab: React.FC = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("익명");
  const { userId } = useParams();
  useEffect(() => {
    console.log(userId)
      fetch(`${process.env.REACT_APP_BASE_URL}/user/${userId}/`)
        .then((res) => res.json())
        .then((res) => {
          // console.log(res[0].USERNAME);
          setUsername(res[0].USERNAME);
        });
  }, []);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BASE_URL}/user/`)
  //     // fetch(`http://localhost:8000/content/`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setLoading(true);
  //       contentsSetState(res);
  //     });
  //   setLoading(false);
  // }, []);

  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <Survey setShowModal={setShowModal}></Survey>
        </IonModal>
        <SurveyAlert setShowModal={setShowModal}></SurveyAlert>
        {/*<MainContainer name="김홍도" />*/}
        <MainContainer name={username} />
        <SlideContainer title="오늘의 추천 수면"></SlideContainer>
        <GridContainer title="수면 카테고리"></GridContainer>
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
