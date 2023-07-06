import doc from "./images/doc.jpg";
import { Link } from "react-router-dom";
import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { HiOutlineInformationCircle } from "react-icons/hi";

const SearchResult = ({ Doctors }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div className="Doc_Uniq">
      <div data-aos="zoom-out" className="docs bg-[#A5DD9D] py-11 px-6 rounded-xl flex flex-col items-center space-y-3 w-[330px] text-lg transition duration-100 ease-in-out mb-4">
        <img src={doc} alt="/" className="w-[80%] mb-6 rounded-lg" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
        <div className="flex" data-aos="fade-up">
          <span className="mr-2 font-bold">Name:</span>
          <p className="text-base">{Doctors.Name}</p>
        </div>
        <div className="flex" data-aos="fade-up">
          <span className="mr-2 font-bold">Specialization: </span>{" "}
          <p className="text-base">{Doctors.Specialization}</p>
        </div>
        <div className="flex" data-aos="fade-up">
          <span className="mr-2 font-bold">Schedule: </span>
          <p className="text-base mb-4">{Doctors.Schedule}</p>
        </div>
        <Link to="/DoctorInfo" data-aos="fade-up">
          <button className="flex text-base bg-[#418D3F] p-2 rounded-md text-white font-bold ring-[#418D3F] ring-2 transition duration-75 ease-in hover:bg-[#A5DD9D] hover:text-[#267124]">
            <HiOutlineInformationCircle className="mr-1" size={23} /> Check
            Information
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchResult;
