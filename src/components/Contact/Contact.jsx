import React from 'react';
import Heading from '../headingAndSubHeading/Heading';
import Halmeet from '../Halmeet';



const Contact = () => {
    return (
      <div>
        <div className="bg-[#9538e2] w-full h-[350px] z-50">
          <div className="pt-5 flex flex-col items-center justify-center">
            <Heading
              title={
                <>
                  <span>Contact with us</span>
                </>
              }
              subtitle={
                <>
                  <span>
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the <br /> coolest
                    accessories, we have it all!
                  </span>
                </>
              }
            ></Heading>
          </div>
        </div>

        <div className="bg-yellow-100 w-[70%] h-[750px] mx-auto z-0 relative -top-[150px]">
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massage</span>
                </label>
                <textarea
                  placeholder="write your massage"
                  className="textarea textarea-bordered w-full h-[250px]"
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-accent w-full"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Halmeet title={`Contact || Sakib's Gadge Shops`}></Halmeet>
      </div>
    );
};

export default Contact;