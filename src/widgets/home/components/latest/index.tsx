import React from "react";
import style from "./latets.module.scss";
const Latest = () => {
     return (
          <div className={style.latest}>
               <h1>
                    <LatestIcon /> Oxirgi qo’shilganlar
               </h1>
               <div>
                    <ul>
                         <li>Qo’shilgan</li>
                         <li>31.03.2023</li>
                         <li>31.03.2023</li>
                         <li>31.03.2023</li>
                         <li>31.03.2023</li>
                         <li>31.03.2023</li>
                    </ul>
                    <ul>
                         <li>Kategoriya</li>
                         <li>Matbuot</li>
                         <li>Arxiv hujjatjar</li>
                         <li>Epigrafik manbalar</li>
                         <li>Muhrlar</li>
                         <li>Numizmatika</li>
                    </ul>
                    <ul>
                         <li>Manba nomi</li>
                         <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                         </li>
                         <li>
                              Sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua
                         </li>
                         <li>
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco
                         </li>
                         <li>
                              Laboris nisi ut aliquip ex ea commodo consequat
                         </li>
                         <li>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore
                         </li>
                    </ul>
               </div>
          </div>
     );
};

export default Latest;

const LatestIcon = () => {
     return (
          <svg
               width="20"
               height="24"
               viewBox="0 0 20 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <g opacity="0.3">
                    <path
                         d="M14 0H6C4.9 0 4 0.9 4 2V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6L14 0ZM18 18H6V2H13V7H18V18ZM2 4V22H18V24H2C0.9 24 0 23.1 0 22V4H2ZM8 10V12H16V10H8ZM8 14V16H13V14H8Z"
                         fill="#242424"
                    />
               </g>
          </svg>
     );
};
