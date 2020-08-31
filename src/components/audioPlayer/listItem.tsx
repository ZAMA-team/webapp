import React from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
import { play, arrowDown } from "ionicons/icons";
import "./index.css";
import { bindActionCreators } from "redux";
import * as Actions from "actions";
import { connect } from "react-redux";
import { Content } from "types";
import history from "reactHistory";

interface ListItemProps {
  actions: any;
  content: Content;
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

const ListItem: React.FC<ListItemProps> = ({ content, actions }) => {
  const listItemStyle = {
    background: `url("${content.thumbnail}")`,
    backgroundSize: "100%",
  };
  return (
    <div className="list-item" style={listItemStyle}>
      <div className="list-item-container">
        <div className="file-name">{content.FNAME}</div>
        <div className="actions">
          <div>{content.playingTime || "00:00"}</div>
          <div>
            <IonIcon
              icon={play}
              onClick={() => {
                actions.addContentFirstOrder(content);
                actions.setPlay(true);
                history.push("./tab2/player");
              }}
            ></IonIcon>
            <IonIcon
              icon={arrowDown}
              onClick={() => {
                actions.addContent(content);
              }}
            ></IonIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ListItem);
