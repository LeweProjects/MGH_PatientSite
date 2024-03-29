import React, { useEffect, useState } from "react";
import supabase from "./config/Supabase";
import { Link } from "react-router-dom";
import SearchRes from "./SearchResult";
import Specials from "./Specials.json";
import SubSpecial from "./SubSpecial.json";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  //For Search window drop function
  const [Show, FetchShow] = useState(null);
  const Open = () => FetchShow(true);
  const Close = () => FetchShow(false);

  //Doctor's data
  const [fetchError, setFetch] = useState(null);
  const [Doctors, setDoctors] = useState(null);

  useEffect(() => {
    const fetchDoc = async () => {
      const { data, error } = await supabase.from("Doctor Tables").select();

      if (error) {
        setFetch("Failed to fetch");
        setDoctors(null);
        console.log(error);
      }
      if (data) {
        setDoctors(data);
        setFetch(null);
      }
    };
    fetchDoc();
  }, []);

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  return (
    <div>
      <div className="hero1 p-28 py-28 flex flex-col items-center text-white space-y-14" data-aos="fade-up">
        <p className="text-5xl font-semibold" data-aos="fade-up">
          WE'RE HERE READY FOR YOUR SERVICE!
        </p>
        <p className="text-3xl font-light" data-aos="fade-up">
          Need some emergency assistance? Contact Us!
        </p>
        <Link to="/Contacts">
          <button data-aos="fade-up" className="bg-transparent text-[20px] px-7 py-2 border-solid border-white border-2 transition duration-50 ease-in-out hover:text-[#315E30] hover:bg-white">
            Click Here!
          </button>
        </Link>
      </div>

      <div className="back py-[80px] flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-[#315E30] mb-10" data-aos="fade-up">
          Find a Doctor
        </h1>

        <div className="find bg-white  flex flex-col p-14 pb-12" data-aos="zoom-in-up">
          <div className="flex flex-col items-center space-y-8">
            <table>
              <thead data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <tr>
                  <td className="text-2xl text-[#315E30] pr-6 pb-3">
                    Doctor's Name
                  </td>
                  <td className="text-2xl text-[#315E30] pr-6 pb-3">
                    Specialization
                  </td>
                  <td className="text-2xl text-[#315E30] pr-6 pb-3">
                    Sub-Specialization
                  </td>
                  <td className="text-2xl text-[#315E30] pr-6 pb-3">
                    HMO Accredation
                  </td>
                </tr>
              </thead>
              <tbody data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="py-2 mr-6 bg-white border-2 border-r-transparent border-t-transparent border-l-transparent focus:outline-none 
                        focus:border-b-[#315E30]"
                    />
                  </td>

                  <td>
                    <div className="flex mr-5">
                      {/* Specialization Dropdown */}
                      <select className="w-56 py-2 duration-100 border-b-2 focus:outline-[#315E30]">
                        <option>---</option>
                        {Specials.map((special) => {
                          return (
                            <option value={special.id} key={special.id}>
                              {special.Specialization}{" "}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="flex mr-5">
                      {/* Sub-Specialization Dropdown */}
                      <select
                        id="finddoctor-form-subspec"
                        className="w-full py-2 duration-100 border-b-2 border-siteGreen-darker"
                      >
                        <option value="">---</option>
                        {SubSpecial.map((subspec) => {
                          return (
                          <option value={subspec.id}>{subspec.SubSpecialization}</option>
                          );
                        }
                        )}
                        
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Accredation"
                      className="py-2 pr-8 bg-white border-2 border-r-transparent border-t-transparent border-l-transparent focus:outline-none 
              focus:border-b-[#315E30]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
            data-aos-anchor-placement="top-bottom" 
             data-aos="fade-up"
              onClick={Open}
              className="bg-[#418D3F] w-1/2 py-1 font-semibold text-2xl text-white rounded-md transition duration-10 ease-in-out hover:bg-[#A5DD9D] hover:text-[#267124] hover:ring-[#418D3F] hover:ring-[3px]"
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className={`${Show ? "show" : "hide"}`}>
          <div className="searchbg rounded-xl pl-20 py-14 pr-16 pt-16 bg mt-8 flex">
            {fetchError && <p>{fetchError}</p>}
            {Doctors && (
              <div className="Doctors overflow-x-scroll w-[93rem] grid grid-flow-col gap-x-12">
                {Doctors.map((Doctors) => (
                  <SearchRes key={Doctors.id} Doctors={Doctors} />
                ))}
              </div>
            )}
            <button
              onClick={Close}
              className="
            text-xl text-slate-400 bg-slate-200 px-1 py-2 w-[3%] h-full rounded-full ml-4 -mt-[50px] -mr-12
            transition duration-75 ease-in hover:bg-slate-300 hover:text-slate-500 hover:border-slate-400 border-2"
            >
              X
            </button>
          </div>
        </div>

        <section id="Contact-num">
          <div className="mt-[40px] mb-[33px] flex flex-col space-y-2 items-center">
            <p className="text-xl font-semibold text-[#315E30]" data-aos="fade-up">
              CONTACT NUMBER
            </p>
            <span className="text-[#315E30]" data-aos="fade-up">+639455963805</span>
            <p className="text-xl font-semibold text-[#315E30]" data-aos="fade-up">
              EMERGENCY HOT-LINE
            </p>
            <span className="text-[#315E30]" data-aos="fade-up">1234-567</span>
            <p className="text-xl font-semibold text-[#315E30]" data-aos="fade-up">
              E-MAIL ADDRESSES
            </p>
            <span className="text-[#315E30]" data-aos="fade-up">JuanCruz@email.com</span>
          </div>
        </section>

        <section id="services">
          <div className="flex flex-col items-center space-y-6 mb-8">
            <h1 className="text-4xl font-semibold text-[#315E30]" data-aos="fade-up" data-aos-duration="500">
              Showcase of Services Offered
            </h1>
            <div className="bg-slate-400 p-6 w-2/3 flex" data-aos="zoom-out" data-aos-anchor-placement="center-bottom" data-aos-duration="500">
              <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem temporibus dolor fugit quia tenetur, perferendis illo
              fuga accusantium voluptatum doloremque eveniet sit dolore rerum
              dolorem accusamus officiis totam velit minima tempora explicabo
              quod reprehenderit ipsa magnam. Repudiandae, et in? Veritatis sed
              sapiente a eaque nulla, modi at magni repellat temporibus!
              </p>
              <div className="p-20 bg-slate-500 justify-evenly font-bold" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
                PICTURE
              </div>
            </div>
            <div className="bg-slate-400 p-6 w-2/3 flex" data-aos="zoom-out" data-aos-anchor-placement="center-bottom" data-aos-duration="500">
              <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem temporibus dolor fugit quia tenetur, perferendis illo
              fuga accusantium voluptatum doloremque eveniet sit dolore rerum
              dolorem accusamus officiis totam velit minima tempora explicabo
              quod reprehenderit ipsa magnam. Repudiandae, et in? Veritatis sed
              sapiente a eaque nulla, modi at magni repellat temporibus!
              </p>
              <div className="p-20 bg-slate-500 justify-evenly font-bold" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
                PICTURE
              </div>
            </div>
          </div>
        </section>

        <section id="Blogs">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-semibold text-[#315E30]" data-aos="fade-up" data-aos-duration="500">Blogs</h1>
          <div className="bg-slate-400 p-6 w-2/3 flex" data-aos="zoom-out" data-aos-anchor-placement="center-bottom" data-aos-duration="500">
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            temporibus dolor fugit quia tenetur, perferendis illo fuga
            accusantium voluptatum doloremque eveniet sit dolore rerum dolorem
            accusamus officiis totam velit minima tempora explicabo quod
            reprehenderit ipsa magnam. Repudiandae, et in? Veritatis sed
            sapiente a eaque nulla, modi at magni repellat temporibus!
            </p>
            <div className="p-20 bg-slate-500 justify-evenly font-bold" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
              PICTURE
            </div>
          </div>
          <div className="bg-slate-400 p-6 w-2/3 flex" data-aos="zoom-out" data-aos-anchor-placement="center-bottom" data-aos-duration="500">
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            temporibus dolor fugit quia tenetur, perferendis illo fuga
            accusantium voluptatum doloremque eveniet sit dolore rerum dolorem
            accusamus officiis totam velit minima tempora explicabo quod
            reprehenderit ipsa magnam. Repudiandae, et in? Veritatis sed
            sapiente a eaque nulla, modi at magni repellat temporibus!
            </p>
            <div className="p-20 bg-slate-500 justify-evenly font-bold" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
              PICTURE
            </div>
          </div>
        </div>
      </section>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
