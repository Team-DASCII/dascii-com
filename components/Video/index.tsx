"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10">
      <div className="container">
          <video 
            width="1200" 
            height="700" 
            preload="auto"
            autoPlay
            muted
            playsInline
            loop={true}
            className="rounded-xl shadow-md mx-auto"
          >
            <source src="/video/animation.mp4" type="video/mp4" />
            {/* <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            /> */}
            Your browser does not support the video tag.
          </video>
      </div>
    </section>
  );
};

export default Video;
