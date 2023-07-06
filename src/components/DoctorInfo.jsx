import React from "react";
import doc from './images/doc.jpg'

const DoctorInfo = () => {

  return (
    <div className="back p-24 flex space-x-20">
      <img src={doc} alt="" className="w-[20%]"/>

      <div className="absolute bg-white p-20 w-[60%]">

      </div>
    </div>
  );
};

export default DoctorInfo;
