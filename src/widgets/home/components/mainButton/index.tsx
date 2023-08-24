import React from "react";
import style from "./mainButton.module.scss";
interface IMainBtn {
     title: string;
     Icon?: React.FC;
}
const MainButton: React.FC<IMainBtn> = ({ title, Icon }) => {
     return (
          <button
               className={style.mainButton}
               style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "17px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    padding: "18px 28px",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
               }}
          >
               {title} {Icon ? <Icon /> : ""}
          </button>
     );
};

export default MainButton;
