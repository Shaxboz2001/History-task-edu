import React from "react";
import style from "./news.module.scss";
import Image from "next/image";
import newsImg1 from "./assets/Rectangle 681.png";
import newsImg2 from "./assets/Rectangle 68.png";
import thirdBoxImg1 from "./assets/Rectangle 71.png";
import thirdBoxImg2 from "./assets/Rectangle 71 (1).png";
import thirdBoxImg3 from "./assets/Rectangle 714.png";
import thirdBoxImg4 from "./assets/Rectangle 71 (2).png";
import Arrow from "../card/assets/Arrow";
const News = () => {
     return (
          <div className={style.news}>
               <div>
                    <h1>Yangiliklar</h1>
                    <sub>Barchasi</sub>
               </div>
               <div className={style.cardsCont}>
                    <NewsCard />
                    <NewsCardSecond />
                    <div className={style.thirdBox}>
                         <div>
                              <Image src={thirdBoxImg1} alt="box" />
                              <div>
                                   <p>Duis aute irure dolor in reprehenderit</p>
                              </div>
                         </div>
                         <div>
                              <Image src={thirdBoxImg2} alt="box" />
                              <div>
                                   <p>
                                        Esse cillum dolore eu fugiat nulla
                                        pariatur
                                   </p>
                              </div>
                         </div>
                         <div>
                              <Image src={thirdBoxImg3} alt="box" />
                              <div>
                                   <p>
                                        Excepteur sint occaecat cupidatat non
                                        proident
                                   </p>
                              </div>
                         </div>
                         <div>
                              <Image src={thirdBoxImg4} alt="box" />
                              <div>
                                   <p>
                                        Sunt in culpa qui officia deserunt
                                        mollit anim
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className={style.info}>
                    <h1>Tarixmanba.uz</h1>
                    <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit, sed do eiusmod tempor incididunt ut labore et
                         dolore magna aliqua. Ut enim ad minim veniam, quis
                         nostrud exercitation ullamco laboris nisi ut aliquip ex
                         ea commodo consequat. Duis aute irure dolor in
                         reprehenderit in voluptate velit esse cillum dolore eu
                         fugiat nulla pariatur. Excepteur sint occaecat
                         cupidatat non proident, sunt in culpa qui officia
                         deserunt mollit anim id est laborum.
                    </p>
               </div>
          </div>
     );
};

export default News;

const NewsCard = () => {
     return (
          <div className={style.newsCard}>
               <div>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <span>12.03.2022</span>
                    <div className={style.arrow}>
                         <Arrow />
                    </div>
               </div>
               <Image src={newsImg1} alt="img1" />
          </div>
     );
};
const NewsCardSecond = () => {
     return (
          <div className={style.newsCard}>
               <div>
                    <h1>Ut aliquip ex ea commodo</h1>
                    <span>10.03.2022</span>
                    <div className={style.arrow}>
                         <Arrow />
                    </div>
               </div>
               <Image src={newsImg2} alt="img1" />
          </div>
     );
};
