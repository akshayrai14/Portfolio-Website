import Typist from "react-typist";
import { motion } from "framer-motion";

import Link from "./Link";

export default function Terminal(props) {
  return (
    <motion.div
      className={`terminal flex flex-col items-start justify-start w-screen h-screen z-10 ${
        props.animated && "select-none rounded-xl overflow-hidden"
      }`}
      animate={props.controls}
    >
      <Titlebar closing={props.closing} />
      <div className="flex flex-col items-start justify-start w-full h-full p-10 bg-[#0C0C0C] space-y-3">
        <Dynamic time={props.time} weather={props.weather} />
        <div className="flex flex-col items-start justify-start space-y-1">
          <Intro />
          <Socials />
        </div>
        <Continue />
      </div>
    </motion.div>
  );
}

function Titlebar(props) {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-[#2D2D2D]">
      <div className="flex flex-row items-end justify-start h-12 pl-4">
        <div className="relative tab flex flex-row items-center justify-start h-10 px-4 space-x-32 bg-[#0C0C0C] rounded-t-md">
          <div className="flex flex-row items-center justify-start space-x-2">
            <i className="fab fa-ubuntu text-sm text-blue-300" />
            <p className="text-sm text-white tracking-wider">Ubuntu</p>
          </div>
          <div className="flex flex-row items-center justify-center w-5 h-5 hover:bg-white hover:bg-opacity-10 rounded-sm">
            <i className="fal fa-times text-sm text-white" />
          </div>
        </div>
      </div>
      <ActionBar closing={props.closing} />
    </div>
  );
}

function ActionBar(props) {
  return (
    <div className="flex flex-row items-center justify-start">
      <div className="flex flex-row items-center justify-center w-12 h-12 hover:bg-white hover:bg-opacity-10">
        <i className="fal fa-window-minimize text-sm text-white" />
      </div>
      <div className="flex flex-row items-center justify-center w-12 h-12 hover:bg-white hover:bg-opacity-10">
        <i className="fal fa-square-full text-sm text-white" />
      </div>
      <div
        id="closeButton"
        className={`flex flex-row items-center justify-center w-12 h-12 ${
          props.closing ? "bg-[#D30F20]" : "hover:bg-[#D30F20]"
        }`}
      >
        <i className="fal fa-times text-sm text-white" />
      </div>
    </div>
  );
}

function Dynamic(props) {
  return (
    <div className="flex flex-col items-start justify-start space-y-1">
      <div className="flex flex-row items-center justify-start space-x-4">
        <i className="fal fa-clock w-[25px] text-xl text-blue-300 text-center" />
        <p className="text-xl text-white text-opacity-90">
          {props.time.format("MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <Typist startDelay={500} avgTypingDelay={35} stdTypingDelay={30} cursor={{ show: false }}>
      <p className="text-xl text-white text-opacity-90">
        Welcome to my portfolio v2.1.0 <Typist.Delay ms={500} />(
        <span className="text-blue-300">@AkshayRai/latest</span>)
      </p>
    </Typist>
  );
}

function Socials() {
  return (
    <motion.div
      className="flex flex-col items-start justify-start"
      initial={{ display: "none" }}
      animate={{ display: "flex" }}
      transition={{ delay: 4 }}
    >
      <Link label="Email" link="akshay11rai@gmail.com" />
      <Link label="GitHub" link="https://github.com/akshayrai14" />
      <Link label="LinkedIn" link="https://www.linkedin.com/in/akshay-rai-5b21a3223/" />
    </motion.div>
  );
}

function Continue() {
  return (
    <motion.div
      className="flex flex-row items-center justify-start"
      initial={{ display: "none" }}
      animate={{ display: "flex" }}
      transition={{ delay: 5 }}
    >
      <p className="flex flex-row items-center justify-start space-x-1 text-xl text-white text-opacity-90">
        <span className="text-blue-300">AkshayRai@ubuntu</span>:~$ Hit F11 to enter full screen. Press
        any key to continue...
        <Typist cursor={{ show: true, blink: true }} />
      </p>
    </motion.div>
  );
}
