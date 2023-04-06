import Image from "next/image";
import Slider from "../components/Slider";

export default function Portfolio() {
  const images = [
    { path: "/image/stringlab/stringlab1.png", alt: "stringlab1" },
    { path: "/image/stringlab/stringlab2.png", alt: "stringlab2" },
    { path: "/image/stringlab/stringlab3.png", alt: "stringlab3" },
  ];
  return (
    <>
      <div className="max-w-md lg:mx-0 mx-auto">
        <Slider>
         {images.map((image) => (
           <Image
             key={image.path}
             src={image.path}
             alt={image.alt}
             priority 
             // width="600"
             // height="120"
             width="600"
             height="1600"
           />
        ))}
       </Slider>
     </div>
    </>
  );
}
