import React from "react";
import style from "./card.module.scss";
import Image from "next/image";
import Eye from "./assets/Group 79.png";
import Star from "./assets/Rectangle 32.png";
import Message from "./assets/Rectangle 33.png";
import Arrow from "./assets/Arrow";
export interface ICard {
     title: string;
     imgUrl: string;
     author?: string;
}
const Card: React.FC<ICard> = ({ title, imgUrl, author }) => {
     return (
          <div className={style.card}>
               <Image src={imgUrl} width={315} height={340} alt={title} />
               <div className={style.cardBottom}>
                    <p>{title}</p>

                    {author ? (
                         <span>{author}</span>
                    ) : (
                         <div>
                              <p>
                                   <Image src={Eye} alt="eye" />
                                   <span>334</span>
                              </p>
                              <p>
                                   <Image src={Star} alt="star" />
                                   <span>4</span>
                              </p>
                              <p>
                                   <Image src={Message} alt="mesgesa" />
                                   <span>2</span>
                              </p>
                         </div>
                    )}
               </div>
               <div className={style.arrow}>
                    <Arrow />
               </div>
          </div>
     );
};

export default Card;
