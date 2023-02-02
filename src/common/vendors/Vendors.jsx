import React from 'react'
import { Link } from "react-router-dom";
const imageUrl =
  "https://res.cloudinary.com/eworldtech/image/upload/c_scale,w_1024/v1661538897/getBlack/bruno-kelzer-LvySG1hvuzI-unsplash_bawbyw.jpg";

const vendors = () => {
  return (
    <div
    style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
    className="vendors-img"
  >
    <div className=" v_flex">
      <div className="vp_flex">
        <div className="">
          <h1 className="">
            Reach new customers and get more orders with GetBlack.
          </h1>
        </div>
      </div>
      <div className="vp_btn">
        <div className="vp_btn-main">
          <Link
            to="/vendor-register"
            className="v_btn bg-[#FFD700] hover:bg-[#52CD8B] border-none text-black p-2 md:p-3 font-bold uppercase text-md rounded-lg w-full"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default vendors