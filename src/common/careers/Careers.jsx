import React from "react";
import { Link } from "react-router-dom";
const imageUrl =
    "https://res.cloudinary.com/dirwn9yno/image/upload/v1664379811/getblack/istockphoto-1167270974-612x612_kycpgo.jpg";

function Careers() {
    return (
        <div
            style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
            className="vendors-img career-pos"
        >
            <div>
                <header className="">
                    <h1 className="">
                        Join Our Team
                    </h1>
                    <p className="text-md text-white">
                        GetBlack is revolutionalizing the way African goods and products are been showcased to the world.
                    </p>
                    <p className="">
                        We are making it easy to manage your sales and deliver to your desired location.
                    </p>
                </header>
            </div>

            <div className="">
                <div className="">
                    <div className="">
                        <h1 className="">
                            Ready for the next adventure of your life?
                        </h1>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Link
                            to="/career-roles"
                            className="btn bg-[#FFD700] hover:bg-[#52CD8B] border-none text-black p-2 md:p-3 font-bold uppercase text-md rounded-lg w-full"
                        >
                            View all open roles
                        </Link>
                    </div>
                </div>
            </div>




        </div>




    );
}

export default Careers;
