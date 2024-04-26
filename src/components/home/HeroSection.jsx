import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-20 justify-center md:mx-5 ">
      <div className="hero-section-1 ">
        <video
          autoPlay={true}
          muted
          loop
          className=" md:h-96 h-60 rounded-tr-xl rounded-bl-xl lg:block hidden"
        >
          <source
            src="https://bzbuptkwljynshsmyfgk.supabase.co/storage/v1/object/sign/Videos-Inicio/v1.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJWaWRlb3MtSW5pY2lvL3YxLm1wNCIsImlhdCI6MTcxMzc5MjgyOSwiZXhwIjoxNzQ1MzI4ODI5fQ.04R3UViqP2-sl-TeFnAlZ5XSeYhMBqy0JTOJveS2H0Y&t=2024-04-22T13%3A33%3A26.644Z"
            type="video/mp4"
          />
        </video>
        <p className="md:text-6xl text-4xl flex items-center justify-center gap-4 font-bold my-5">
          BE <span> FREELANCER</span>
        </p>
      </div>
      <div className="hero-section-2 flex flex-col-reverse">
        <video
          autoPlay={true}
          muted
          loop
          className="rounded-tr-xl rounded-bl-xl md:h-96 h-60"
        >
          <source
            src="https://bzbuptkwljynshsmyfgk.supabase.co/storage/v1/object/sign/Videos-Inicio/v2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJWaWRlb3MtSW5pY2lvL3YyLm1wNCIsImlhdCI6MTcxMzc5Mjg3MywiZXhwIjoxNzQ1MzI4ODczfQ.211WMKzDY6Q2Si6c8p9AKKSHlr5tK-OQyucPaJIotiM&t=2024-04-22T13%3A34%3A10.723Z"
            type="video/mp4"
          />
        </video>
        <p className="md:text-6xl text-4xl font-bold my-5 flex items-center justify-center gap-4">
          SHOW YOUR VALUE
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
