import React from "react";

const Description = ({ description, color, classname }) => {
  return (
    <p
      className={`text-xl ${color} ${classname}`}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

export default Description;
