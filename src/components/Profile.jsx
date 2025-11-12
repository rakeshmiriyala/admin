import React from "react";
import business1 from "../assets/c-1.jpeg";
import business2 from "../assets/image-7.png";
import business3 from "../assets/t-3.png";
import business4 from "../assets/o-2.jpg";

const Profile = () => {
  return (
    <div className="">
      {/* Profile Content on the Right */}
      <div className="ml-auto  pl-[420px] ">
        <h1 className="text-3xl font-bold mb-6">Business Profile</h1>

        {/* Business Information */}
        <div className="bg-white p-6 w-full">
          <h2 className="text-2xl font-semibold mb-4">Business Name: XYZ Interiors</h2>

          {/* Business Images */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Gallery</h3>
            <div className="grid grid-cols-3 gap-4">
              <img src={business1} alt="Business 1" className="rounded-lg shadow-md w-full" />
              <img src={business2} alt="Business 2" className="rounded-lg shadow-md w-full" />
              <img src={business3} alt="Business 3" className="rounded-lg shadow-md w-full" />
              <img src={business4} alt="Business 4" className="rounded-lg shadow-md w-full" />
            </div>
          </div>

          {/* Business Location */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-gray-700 mb-3">123 Business Street, New York, NY</p>

            {/* Google Maps Embed */}
            <iframe
              title="Business Location"
              className="w-full h-64 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1577158409494!2d78.4327151!3d17.5493632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ffb1e0a0e89%3A0x58221346edf42e25!2sGreenmetro%E2%80%99s%20Tulasi%20Lakefront%20block%209!5e0!3m2!1sen!2sin!4v1709292831026!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
