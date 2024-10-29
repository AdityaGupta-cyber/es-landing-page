import NextVideo from "next-video";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import localFont from "next/font/local";

const CR = localFont({
  src: "../pages/fonts/CR.otf",
});
const GS = localFont({
  src: "../pages/fonts/GS.ttf",
});

export default function CaseStudy({ dark, setDark, idd }: any) {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Function to handle back action
    const handleBackAction = () => {
      window.open("/", "_self");
      // Add your custom logic here
    };

    // Add event listener to detect back button press
    window.addEventListener("popstate", handleBackAction);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleBackAction);
    };
  }, [router]);

  const products = [
    [
      "/images/0/video.mp4",
      "A table inspired by the Art Deco era, celebrating the fusion of craftsmanship and modernity. The piece features intricate gold inlay work as its centerpiece, symbolizing the opulence and geometric precision characteristic of the 1920s and 1930s. It aims to capture the spirit of luxury, optimism, and technological progress that defined this vibrant period in design history.",
      "/images/0/4.png",

      "Create a sophisticated table design that blends Art Deco aesthetics with contemporary functionality. Use bold, contrasting colors typical of Art Deco, such as black and gold, or deep blue and gold. The gold inlay should be the focal point, with its geometric patterns and sleek lines highlighted through strategic design and placement. Consider materials like polished wood, lacquer, or marble to complement the gold work",
      "/images/0/5.png",
      <>
        Life and living all not equal,
        <br />
        Flames and fire are not in same sequel.
      </>,
      "/images/0/6.png",
      "/images/0/7.png",
      "/images/0/8.png",
      "The designer, inspired by the glamour of the Roaring Twenties and the precision of machine-age aesthetics, embarked on a journey to revive traditional gold inlay techniques. This quest led to collaborations with master goldsmiths and a deep dive into Art Deco archives, resulting in a table that marries century-old craftsmanship with modern design sensibilities. The creation process became a personal exploration of the balance between handcraft and industrial precision, mirroring the ethos of the Art Deco movement itself.",
    ],
    [
      "/images/1/video.mp4",
      "A chair inspired by the opulence of the Baroque period, merged with the comfort demands of modern living. The piece showcases luxurious red velvet upholstery contrasted with ornate gold metalwork, symbolizing the grandeur of 17th-century European courts and the contemporary desire for both aesthetics and comfort. It aims to capture the spirit of dramatic flair and sensual comfort that defined the Baroque era, while meeting the ergonomic needs of today's users.",
      "/images/1/4.png",
      "Create a striking chair design that blends Baroque extravagance with contemporary ergonomics. Use a deep, rich red velvet for the upholstery, reminiscent of royal chambers and theater curtains. The gold metalwork should feature elaborate, curving forms typical of Baroque design, but streamlined for a modern touch. Consider incorporating motifs like acanthus leaves, shells, or scrollwork in the gold elements. The chair's form should be generous and inviting, with plush cushioning that promises extreme comfort.",
      "/images/1/5.png",
      <>
        Attraction can have their own definition,
        <br />
        Security and safety possess their own reason
      </>,
      "/images/1/6.png",
      "/images/1/7.png",
      "/images/1/8.png",
      `The designer, fascinated by the tension between visual opulence and physical comfort, set out to create a chair that would be at home in both a palace and a modern living room. Inspired by visits to Baroque palaces and consultations with ergonomic experts, the designer developed a unique internal structure that allows for sumptuous curves and deep cushioning without sacrificing support. The gold metalwork was crafted using both traditional techniques and modern fabrication methods, resulting in a piece that honors historical craftsmanship while embracing contemporary technology.

The red velvet was specially developed to be both visually rich and highly durable, ensuring that the chair maintains its luxurious appearance even with regular use. Each curve and fold of the fabric was carefully considered to create an interplay of light and shadow, enhancing the chair's dramatic presence.
This concept aims to create a statement piece that serves as a functional, extremely comfortable chair while also being a work of art that tells a story of timeless luxury adapted for modern living.
Would you like to explore any specific aspects of this chair design further? Perhaps we could delve into the ergonomic features, the specific Baroque-inspired motifs, or the techniques used in the metalwork?`,
    ],
    [
      "/images/2/video.mp4",
      'A coffee table that embodies the essence of a blooming garden landscape, bringing the vibrant energy of nature into interior spaces. Named "Bloomscape," this piece celebrates the delicate beauty of flowers and the organic shapes of a thriving garden. The design aims to create a living artwork that serves as both a functional table and a conversation-starting centerpiece, blurring the lines between furniture and sculpture.',
      "/images/2/4.png",
      "Create an innovative coffee table design that captures the dynamic, flowing forms of a flower garden in full bloom. Use a combination of materials to represent different elements of a garden landscap",
      "/images/2/5.png",
      <>
        Attraction can have their own definition,
        <br />
        Security and safety possess their own reason
      </>,
      "/images/2/6.png",
      "/images/2/7.png",
      "/images/2/8.png",
      `THE DESIGNER, AN AVID GARDENER AND FURNITURE MAKER, SOUGHT TO BRING THE JOY AND TRANQUILITY OF THEIR GARDEN INTO THE HOME. INSPIRED BY THE WAY FLOWERS REACH TOWARDS THE LIGHT, CREATING NATURAL CANOPIES AND LAYERS, THEY ENVISIONED A TABLE THAT WOULD EMBODY THIS ORGANIC GROWTH PATTERN.
THE CREATION PROCESS INVOLVED COUNTLESS HOURS OBSERVING GARDENS IN DIFFERENT LIGHT CONDITIONS AND SEASONS. THE DESIGNER EXPERIMENTED WITH VARIOUS MATERIALS TO CAPTURE THE TRANSLUCENCY OF PETALS AND THE STRENGTH OF STEMS. THEY COLLABORATED WITH A GLASSBLOWER TO DEVELOP CUSTOM TECHNIQUES FOR CREATING THE IRREGULAR, PETAL-LIKE SURFACES, AND WORKED WITH A METALSMITH TO CRAFT THE DELICATE YET STURDY 'STEM' STRUCTURES.`,
    ],

    [
      "/images/3/video.mp4",
      "A console inspired by the Renaissance era, celebrating the transformation of nature and human achievement. The piece features petrified wood as its centerpiece, symbolizing the metamorphosis from the medieval to the modern world. It aims to capture the spirit of artistic and scientific breakthroughs that defined this pivotal period in history.",
      "/images/3/4.png",
      "Create a luxurious console design that blends Renaissance aesthetics with contemporary elegance. Use rich, warm colors reminiscent of Italian Renaissance art, incorporating gold accents to represent the era's opulence. The petrified wood should be the focal point, with its natural patterns and colors highlighted through careful lighting and placement.",
      "/images/3/5.png",
      <>
        life and living all not equal
        <br />
        Flames and fire are not in same sequel
      </>,

      "/images/3/6.png",
      "/images/3/7.png",
      "/images/3/8.png",
      `The designer, fascinated by the parallel between petrified wood's transformation and the Renaissance's cultural shift, embarked on a journey through Italian quarries to handpick the perfect specimen. This quest became a personal Renaissance, inspiring a deep connection between natural history and human creativity, ultimately leading to the console's unique design.`,
    ],
    [
      "/images/4/video.mp4",
      "A unique couch inspired by basketball, specifically extending the Jordan merchandise line. The piece is designed to replicate a basketball's form and texture, featuring meticulous attention to detail including the ball's stitching and signature orange color. It aims to blend sports culture with high-end furniture design, appealing to basketball enthusiasts and design aficionados alike.",
      "/images/4/4.png",
      "Create a bold, eye-catching couch that mimics the spherical shape of a basketball. Use premium leather in the iconic orange hue of a basketball, with exaggerated black stitching to replicate the ball's seams. Incorporate subtle Jordan brand elements, such as a small Jumpman logo, to tie it to the merchandise line. The overall aesthetic should balance playfulness with sophistication.",
      "/images/4/5.png",
      <>
        Shine and grace are not the same,
        <br />
        There is a difference between smooth and plain.
      </>,

      "/images/4/6.png",
      "/images/4/7.png",
      "/images/4/8.png",
      `The designer, a lifelong basketball fan, conceived this idea during a pivotal NBA game. Observing the ball's movement and texture up close inspired a vision to bring the sport's energy into home decor. After months of prototyping to perfect the spherical form and comfort, the couch emerged as a unique tribute to the game and Jordan's lasting impact on sports culture.`,
    ],
    [
      "/images/5/video.mp4",
      "A luxurious table inspired by the Colosseum's restoration, symbolizing resilience and rebirth. Crafted from teak and ash wood with a brown-tinted glass top, the table mirrors the Colosseum's architectural elements and grandeur. It aims to blend historical significance with contemporary luxury, appealing to those who appreciate both classical aesthetics and modern craftsmanship.",
      "/images/5/4.png",
      "Design an imposing table that echoes the Colosseum's circular structure. Use rich, warm tones in the wood to evoke ancient Rome, contrasting with the sleek glass top. Incorporate intricate carvings on the ash wood pillars to mimic the Colosseum's decorative elements. The overall aesthetic should balance monumental presence with refined elegance, capturing both the Colosseum's scale and its detailed artistry.",
      "/images/5/5.png",
      <>
        Attraction and affection have their own definition,
        <br />
        Security and safety posses their own reasons.
      </>,

      "/images/5/6.png",
      "/images/5/7.png",
      "/images/5/8.png",
      `The designer, moved by a visit to the restored Colosseum, envisioned a piece that could bring its majesty into modern homes. Months were spent studying architectural plans and restoration techniques to authentically recreate the Colosseum's essence in furniture form. The creation process became a personal journey of revival, mirroring the monument's own restoration and resulting in a table that's as much a historical tribute as it is a functional work of art.`,
    ],
    [
      "/images/6/video.mp4",
      "A conference table that draws inspiration from the mesmerizing patterns and colors of a tiger's eye gemstone. Viewed from above, the table mimics the unique chatoyancy effect of the stone, creating an illusion of a shifting golden-brown surface that appears to change as light moves across it. This design aims to bring the mystique and power associated with the tiger's eye into a corporate setting, symbolizing clarity of vision, executive decision-making, and the dynamic nature of business",
      "/images/6/4.png",
      "Create an elegant and striking conference table design that captures the essence of a tiger's eye gemstone when viewed from above. Use a combination of materials to replicate the stone's distinctive banded appearance, incorporating rich golden-browns, honey tones, and deep amber hues. The surface should have a high-gloss finish to emulate the gemstone's natural luster and create the illusion of depth. Consider incorporating subtle lighting elements within the table to enhance the chatoyancy effect, making the surface appear to shift and change as people move around it.",
      "/images/6/5.png",
      <>
        Poison and venom have different,
        <br />
        Earth and glob have different density
      </>,

      "/images/6/6.png",
      "/images/6/7.png",
      "/images/6/8.png",
      `The designer, inspired by a visit to a natural history museum where a massive tiger's eye specimen was on display, became captivated by the stone's ability to seemingly shift and change while remaining solid. This led to an exploration of how to translate this natural phenomenon into a functional piece of furniture that could inspire creativity and dynamic thinking in a business environment.
The creation process involved extensive experimentation with various materials, including specially treated woods, resins, and metal inlays, to achieve the desired visual effect. The designer collaborated with optical experts to understand the physics of chatoyancy and with master craftsmen to develop techniques that could replicate this effect on a larger scale.`,
    ],
  ];
  const [p, setP] = useState<any>(products[Number(id) || idd]);

  return (
    <ParallaxProvider>
      <main className="max-w-[1600px] w-full px-4 mt-10 2xl:flex 2xl:flex-col 2xl:items-center 2xl:-ml-20 lg:-ml-28">
        <section className="mb-24">
          <div className=" md:-ml-12  2xl:-ml-16 w-screen">
            <NextVideo
              src={p[0]}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          </div>
          <div className="px-10 lg:px-0 w-[98%] mx-auto flex flex-col md:flex-row  justify-between mt-20 lg:mt-40 lg:mb-20 xl:mb-14 md:-ml-12 2xl:ml-0 xl:px-20">
            <p className="text-xl md:text-4xl uppercase  mb-2 md:mb-0 tracking-widest mt-2 w-full md:w-[50%]">
              CONTENT & BRIEF
            </p>
            <p className=" font-sans font-light normal-case  w-full md:w-[46%] lg:w-[50%] text-left text-sm md:text-lg lg:text-2xl">
              {p[1]}
            </p>
          </div>
        </section>

        <section className="mb-24 min-w-screen">
          <div className="relative mb-4 md:-ml-12 2xl:-ml-16 w-screen">
            <ParallaxBanner
              className="para"
              style={{ aspectRatio: "2 / 1" }}
              layers={[
                {
                  speed: -30,
                  children: (
                    <Image
                      src={p[2]}
                      alt="Elegant table in a luxurious setting"
                      layout="fill"
                      objectFit="cover"
                    />
                  ),
                },
              ]}
            />
          </div>

          {/*} <div className="flex gap-40 justify-start mt-32">
            <p className="text-4xl uppercase tracking-widest mt-0 w-[400px]">
              ART DIRECTION
            </p>
            <p className="font-sans uppercase w-[400px] text-left">{p[3]}</p>
          </div>
        </section>*/}

          <section className="min-w-screen">
            <div className="relative mb-4 -ml-0 md:-ml-12 2xl:-ml-16 w-screen">
              <ParallaxBanner
                onMouseEnter={() => {
                  if (!dark) {
                    setDark(true);
                  }
                }}
                className="para"
                style={{ aspectRatio: "2 / 1" }}
                layers={[
                  {
                    speed: -30,
                    children: (
                      <Image
                        src={p[4]}
                        alt="Elegant table in a luxurious setting"
                        layout="fill"
                        objectFit="cover"
                      />
                    ),
                  },
                ]}
              />
            </div>
          </section>

          <section className="px-4 lg:-ml-6 w-full md:w-[98%] mx-auto my-24 md:my-36 lg:my-40 text-center">
            <h3
              className={`${CR.className} text-xl md:text-3xl lg:text-5xl font-light leading-snug mb-4 uppercase`}
            >
              {p[5]}
            </h3>
            <p
              className={`text-sm w-full md:text-lg font-normal text-right max-w-[800px] xl:max-w-[1200px] tracking-widest font-sans text-[#FF7600]`}
            >
              - EKANT SINGH
            </p>
          </section>

          <section className="lg:ml-20 md:-ml-20 xl:-ml-20 mb-24 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5.3] md:aspect-[4/5.1]">
              <Image
                src={p[6]}
                alt="Elegant table in a luxurious setting"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/2.5]">
                <Image
                  src={p[7]}
                  alt="Close-up of a wooden table with intricate design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative aspect-[4/2.5]">
                <Image
                  src={p[8]}
                  alt="Close-up of a wooden table with intricate design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>

          {/*<section className="mb-24">
          <div className="-ml-[70px] flex gap-10 justify-center flex-col mt-40 align-middle items-center text-center">
            <p className="text-4xl uppercase tracking-widest mt-2 w-[700px] overflow-hidden">
              STORY
            </p>
            <p className="font-sans uppercase w-[700px]">{p[9]}</p>
          </div>
        </section>*/}
        </section>
      </main>
    </ParallaxProvider>
  );
}
