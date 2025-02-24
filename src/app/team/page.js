"use client";
import * as React from "react";

import { Footer } from "../footer";

import NavMenu from "../NavMenu";
import Team from "../Team";
// import {Accommodation} from './testAcc'
import Competitions from "../Competitions";


export default function TeamPage() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <NavMenu />
        <Team/>
        <Footer />
      </div>
    </>
  );
}
