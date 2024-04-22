import Image from "next/image";
import React from "react";

const GalleryCard = () => {
  return (
    <div
      className="flex flex-col z-10 rounded-xl bg-white "
      style={{ maxWidth: "304px" }}
    >
      {" "}
      <div className="rounded-t-xl" style={{ overflow: "hidden" }}>
        <Image
          src="/images/insta-post-2.svg" // Route of the image file
          height={152} // Desired size with correct aspect ratio
          width={304} // Desired size with correct aspect ratio
          alt="insta-post"
        />
      </div>
      <div className="flex flex-col p-6 gap-6">
        <div className="flex flex-col">
          <div className="mb-3">TBD</div>
          <div className="line-clamp-2">
            This is a sample description to test this. Half of this will be
            visible, half will be invisible. Let’s try some more here until it
            overflows.
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>TBD</div>
          <div className="py-1 px-2 bg-backgroundEmPrimary rounded-full">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
