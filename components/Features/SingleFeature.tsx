import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title, paragraph, id } = feature;
  return (
    <div className="w-full bg-primary bg-opacity-10 p-5 rounded-lg shadow-three dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
      <div className="wow fadeInUp " data-wow-delay=".15s">
        <div className="mb-10 p-5 flex justify-center align-items rounded-md  text-primary">
          <Image src={image} height={300} width={300} alt=""/>
        </div>
        <div>
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {`${id}. ${title}`}
          </h3>
          <p className="pr-[10px] text-base leading-relaxed text-body-color text-justify">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
