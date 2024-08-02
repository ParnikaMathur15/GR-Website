'use client'
import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";

import "./timeline.css";
import Link from "next/link";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("Event one");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Event two");
  };

  const someCallback3 = () => {
    setMessage3("Event three");
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="absolute left-[100px] font-semibold whitespace-nowrap text-white -bottom-10 p-5 text-6xl rounded-2xl shadow-[0px_0px_400px_0px_#3182ce]">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="absolute right-[100px] font-semibold whitespace-nowrap text-white -bottom-10 p-5 text-6xl rounded-2xl shadow-[0px_0px_400px_0px_#3182ce]">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="absolute left-[100px] font-semibold whitespace-nowrap text-white -bottom-10 p-5 text-6xl rounded-2xl shadow-[0px_0px_400px_0px_#3182ce]">{message3}</div>
      </div>
    </div>
  );
};

export default function Timeliner() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App flex flex-col justify-center items-center">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#2791a3"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <Link href={'/events'}>
      <div className=" text-white font-bold text-3xl flex flex-col justify-center items-center mt-24 ">
        <div class="rounded-full bg-gradient-to-r from-secondary via-orange-300 to-primary p-1">
          <div class="rounded-full bg-black py-5 px-10">
            See Details
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
