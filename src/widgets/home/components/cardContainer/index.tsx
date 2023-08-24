import React, { Children, ReactNode } from "react";
import style from "./cardContainer.module.scss";
import Card, { ICard } from "../card";
import Rect25 from "../../assets/Rectangle 25.png";
import Rect251 from "../../assets/Rectangle 25 (1).png";
import Rect252 from "../../assets/Rectangle 25 (2).png";
import Rect253 from "../../assets/Rectangle 25 (3).png";
interface ICards {
     // cards: ICard[];
     children?: ReactNode;
     titleContainer: string;
}
const CardContainer: React.FC<ICards> = ({ children, titleContainer }) => {
     return (
          <div className={style.cardContainer}>
               <div className={style.top}>
                    <div>
                         <h1>
                              {titleContainer} <span>Barchasi</span>
                         </h1>
                    </div>
                    <Nav />
               </div>
               <div className={style.cards}>{children}</div>
          </div>
     );
};

export default CardContainer;

export const Nav = () => {
     return (
          <svg
               width="70"
               height="30"
               viewBox="0 0 70 30"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <rect opacity="0.12" width="30" height="30" fill="#242424" />
               <path
                    d="M17 10L12 15L17 20"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
               />
               <rect
                    opacity="0.4"
                    width="30"
                    height="30"
                    transform="matrix(-1 0 0 1 70 0)"
                    fill="#242424"
               />
               <path
                    d="M53 10L58 15L53 20"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
               />
          </svg>
     );
};
