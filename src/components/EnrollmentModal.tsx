import { FC } from "react";
import { Typography } from "./Typography";
import { IoIosClose } from "react-icons/io";

export const EnrollmentModal: FC<{ isModalOpen: any, setIsModalOpen: any, formData: any, handleInputChange: any, handleFormSubmit: any }> = ({ isModalOpen, setIsModalOpen, formData, handleInputChange, handleFormSubmit }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <Typography size="xxl" weight="bold">Enroll Now</Typography>
          <button onClick={() => setIsModalOpen(false)} className="text-gray-600"><IoIosClose className=" text-3xl"/></button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Mobile Number"
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message (Optional)"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className='text-xl font-bold rounded-full px-1 py-1 bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300 hover:shadow-xl cursor-pointer' onClick={() => setIsModalOpen(true)}>
              <button type="submit" className='text-buttonText text-lg md:text-xl font-bold rounded-full px-4 md:px-6 py-2 bg-white hover:bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};