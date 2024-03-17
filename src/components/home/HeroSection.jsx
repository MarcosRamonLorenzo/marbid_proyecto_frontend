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
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/Videos-Inicio/VideoInicio2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJWaWRlb3MtSW5pY2lvL1ZpZGVvSW5pY2lvMi5tcDQiLCJpYXQiOjE3MDgzNTkyNjUsImV4cCI6MTczOTg5NTI2NX0.VixkQFOyFEuCTku8XU9D-4szwstSk7ooMP_4Pmikc7k&t=2024-02-19T16%3A14%3A25.623Z"
            type="video/mp4"
          />
        </video>
        <p className="md:text-6xl text-4xl flex items-center justify-center gap-4 font-bold y-5">
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
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/Videos-Inicio/VideoInicio1.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJWaWRlb3MtSW5pY2lvL1ZpZGVvSW5pY2lvMS5tcDQiLCJpYXQiOjE3MDgzNTkyNDgsImV4cCI6MTczOTg5NTI0OH0.cTbxugZO42xN9N9Pq6wnavszVuGFwgfAqylwYJG6zko&t=2024-02-19T16%3A14%3A08.422Z"
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
