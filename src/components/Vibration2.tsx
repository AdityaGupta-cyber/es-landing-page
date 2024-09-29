import NextVideo from "next-video";
import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Vibration2() {
  return (
    <ParallaxProvider>
      <main className="max-w-full w-full px-4 mt-10">
        <section className="mb-24">
          <div className="-ml-[70px]">
            <NextVideo
              src={"/1.mp4"}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          </div>
          <div className="flex gap-40 justify-start mt-40">
            <p className="text-4xl uppercase tracking-widest mt-2 w-[400px]">
              CONTENT & BRIEF
            </p>
            <p className="font-sans uppercase w-[400px] text-left">
              Lumière Élégance is a distinguished luxury furniture brand that
              embodies the pinnacle of sophistication and artisanal
              craftsmanshipLumière Élégance is a distinguished luxury furniture
              brand that embodies the pinnacle of sophistication and artisanal
              craftsmanship. .
            </p>
          </div>
        </section>

        <section className="mb-24 min-w-screen">
          <div className="relative mb-4 -ml-[150px] w-screen">
            <ParallaxBanner
              className="para"
              style={{ aspectRatio: "2 / 1" }}
              layers={[{ image: "/vibration2-1.png", speed: -30 }]}
            />
          </div>

          <div className="flex gap-40 justify-start mt-40">
            <p className="text-4xl uppercase tracking-widest mt-2 w-[400px]">
              ART DIRECTION
            </p>
            <p className="font-sans uppercase w-[400px] text-left">
              Lumière Élégance is a distinguished luxury furniture brand that
              embodies the pinnacle of sophistication and artisanal
              craftsmanshipLumière Élégance is a distinguished luxury furniture
              brand that embodies the pinnacle of sophistication and artisanal
              craftsmanship.
            </p>
          </div>
        </section>

        <section className="min-w-screen">
          <div className="relative mb-4 -ml-[150px] w-screen">
            <ParallaxBanner
              className="para"
              style={{ aspectRatio: "2 / 1" }}
              layers={[{ image: "/vibration2-2.png", speed: -30 }]}
            />
          </div>
        </section>

        <section className="-ml-[70px] my-40 text-center">
          <h3 className="text-5xl font-light  leading-relaxed mb-4">
            LIFE AND LIVING ALL NOT EQUAL
            <br />
            FLAMES AND FIRE ARE NOT IN SAME SEQUEL
          </h3>
          <p className="text-lg tracking-widest">- EKANT SINGH</p>
        </section>

        <section className="-ml-20 mb-24 grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/5.1]">
            <Image
              src="/vibration2-3.png"
              alt="Elegant table in a luxurious setting"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="relative aspect-[4/2.5]">
              <Image
                src="/vibration2-4.png"
                alt="Close-up of a wooden table with intricate design"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-[4/2.5]">
              <Image
                src="/vibration2-2.png"
                alt="Close-up of a wooden table with intricate design"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="-ml-[70px] flex gap-10 justify-center flex-col mt-40 align-middle items-center text-center">
            <p className="text-4xl uppercase tracking-widest mt-2 w-[700px] overflow-hidden">
              STORY
            </p>
            <p className="font-sans uppercase w-[700px]">
              Lumière Élégance is a distinguished luxury furniture brand that
              embodies the pinnacle of sophistication and artisanal
              craftsmanshipLumière Élégance is a distinguished luxury furniture
              brand that embodies the pinnacle of sophistication and artisanal
              craftsmanship. Lumière Élégance is a distinguished luxury
              furniture brand that embodies the pinnacle of sophistication and
              artisanal craftsmanshipLumière Élégance is a distinguished luxury
              furniture brand that embodies the pinnacle of sophistication and
              artisanal craftsmanship. . .
            </p>
          </div>
        </section>
      </main>
    </ParallaxProvider>
  );
}
