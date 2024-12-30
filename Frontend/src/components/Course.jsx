import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 py-8 items-center  justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're Delighted to have you{" "}
            <span className="text-violet-500"> Here :)</span>
          </h1>
          <p  className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            libero ipsa velit cumque facere illum doloribus quidem itaque
            eveniet non repudiandae, dolorem facilis dicta, tempore,
            consequuntur recusandae labore exercitationem quod fugiat
            repellendus hic corrupti! Assumenda, maxime. Sapiente perspiciatis
            dicta nostrum?
          </p>
          <Link to="/">
          <button className=" mt-6 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 duration-300">Back</button>
          
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards key= {item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
