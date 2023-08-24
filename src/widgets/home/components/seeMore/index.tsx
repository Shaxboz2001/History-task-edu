import React from "react";
import style from "./seeMore.module.scss";
import Image from "next/image";
import rect24 from "./assets/Rectangle 24.png";
import MicroPhone from "./assets/MicroPhone";
import Photo from "./assets/Photo";
import Book from "./assets/Book";
import Global from "./assets/Global";
const SeeMore = () => {
     return (
          <div className={style.seeMore}>
               <h1>
                    <SeeMoreIcon />
                    Ko’p ko&apos;rilganlar
               </h1>
               <div>
                    <SeeCard />
                    <SeeCard />
                    <SeeCard />
                    <SeeCard />
               </div>
          </div>
     );
};

export default SeeMore;

const SeeMoreIcon = () => {
     return (
          <svg
               width="24"
               height="23"
               viewBox="0 0 24 23"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <g opacity="0.3">
                    <path
                         d="M24 8.688L15.372 7.944L12 0L8.628 7.956L0 8.688L6.552 14.364L4.584 22.8L12 18.324L19.416 22.8L17.46 14.364L24 8.688ZM12 16.08L7.488 18.804L8.688 13.668L4.704 10.212L9.96 9.756L12 4.92L14.052 9.768L19.308 10.224L15.324 13.68L16.524 18.816L12 16.08Z"
                         fill="#242424"
                    />
               </g>
          </svg>
     );
};

const SeeCard = () => {
     return (
          <div className={style.seeCard}>
               <Image src={rect24} alt="library" />
               <div>
                    <ul>
                         <li>
                              <p>Asar nomi:</p>
                              <span>Tarixi tabariy</span>
                         </li>
                         <li>
                              <p>Yili:</p>
                              <span>839-923</span>
                         </li>
                         <li>
                              <p>Tili:</p>
                              <span>Arab tili</span>
                         </li>
                         <li>
                              <p>Yeri:</p>
                              <span>Eron</span>
                         </li>
                    </ul>
                    <div>
                         <p>
                              Audio
                              <span>
                                   <MicroPhone />
                              </span>
                         </p>
                         <p>
                              Rasm
                              <span>
                                   <Photo />
                              </span>
                         </p>
                         <p>
                              Tekst
                              <span>
                                   <Book />
                              </span>
                         </p>
                         <p>
                              Xarita
                              <span>
                                   <Global />
                              </span>
                         </p>
                    </div>
               </div>
          </div>
     );
};
