import React from "react";

const GalleryCard = () => {
  return (
    <div className="flex flex-col" style={{ maxWidth: "304px" }}>
      <div
        className="flex flex-col p-6"
        style={{
          maxHeight: "52px",
          textOverflow: 'ellipsis',          
        }}
      >
        <div className="mb-3">TBD</div>
        <div>
          This is a sample description to test this. Half of this will be
          visible, half will be invisible. Let’s try some more here until it
          overflows.
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
