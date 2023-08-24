import React from "react";
import style from "./header.module.scss";
import firstImg from "./assets/Group 36.png";
import Image from "next/image";
import User from "./assets/Vector (10).png";
import Eye from "./assets/ic_baseline-remove-red-eye.png";
import Link from "next/link";
import MainButton from "../home/components/mainButton";
import Icon from "./assets/Icon";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

interface Props {
     /**
      * Injected by the documentation to work in an iframe.
      * You won't need it on your project.
      */
     window?: () => Window;
     children: React.ReactElement;
}

function HideOnScroll(props: Props) {
     const { children, window } = props;
     // Note that you normally won't need to set the window ref as useScrollTrigger
     // will default to window.
     // This is only being set here because the demo is in an iframe.
     const trigger = useScrollTrigger({
          target: window ? window() : undefined,
     });

     return (
          <Slide appear={false} direction="down" in={!trigger}>
               {children}
          </Slide>
     );
}

export default function Header(props: Props) {
     return (
          <React.Fragment>
               <CssBaseline />
               <HideOnScroll {...props}>
                    <AppBar>
                         <div className={style.header}>
                              <h1>Tarixmanba.uz</h1>
                              <MainButton title="Manbalar" Icon={Icon} />
                              <ul>
                                   <li>
                                        <Link href={"!"}>Biz haqimizda</Link>
                                   </li>
                                   <li>
                                        <Link href={"!"}>Yangiliklar</Link>
                                   </li>
                                   <li>
                                        <Link href={"!"}>Kutubxona</Link>
                                   </li>
                                   <li>
                                        <Link href={"!"}>Bog’lanish</Link>
                                   </li>
                              </ul>
                              <ul>
                                   <li>
                                        <a href="!">
                                             <Image src={User} alt="user" />
                                             Shaxsiy xona
                                        </a>
                                   </li>
                                   <li>
                                        <a href="!">
                                             <Image src={Eye} alt="Eye" />
                                             Zaif koʻruvchilar uchun
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </AppBar>
               </HideOnScroll>
               {/* <Toolbar /> */}
          </React.Fragment>
     );
}

// const Header = () => {
//      return (

//      );
// };

// export default Header;
