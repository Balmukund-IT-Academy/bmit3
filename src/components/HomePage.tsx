import { useState } from 'react';
import { EnrollmentModal } from './EnrollmentModal';
import { Typography } from './Typography';
import { supabase } from '@/utils/supabase';
import Link from 'next/link';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, mobile, email, message } = formData;

    await supabase
      .from('contact_us')
      .insert([
        { name, mobile, email, message }
      ]);

    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: '',
    });

    setIsModalOpen(false);
  };
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='md:flex-row flex-col-reverse flex w-11/12'>
        <div className='w-full flex items-center justify-center'>
          <div className='flex flex-col gap-4'>
            <Typography size="xxl" weight="medium" color="darkGray">
              Let's
            </Typography>
            <Typography size="xxxxl" weight="bold" color="blue">
              Learn Coding
            </Typography>
            <Typography size="xxxl" weight="semibold" color="darkGray">
              at Balmukund IT Academy
            </Typography>
            <Typography size="lg" color="mediumGray" className="mt-2">
              Empowering students to master coding essentials like Data Structures, Algorithms, Web Development, C, C++, and more.
            </Typography>
            <div className='flex gap-4 md:mt-8 mt-4'>
              <div className='text-xl font-bold rounded-full px-1 py-1 bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300 hover:shadow-xl cursor-pointer' onClick={() => setIsModalOpen(true)}>
                <div className='text-buttonText text-lg md:text-xl font-bold rounded-full px-4 md:px-6 py-2 bg-white hover:bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300'>
                  Apply now
                </div>
              </div>
              <Link href={'/about/'}>
                <div className='text-xl font-bold rounded-full px-1 py-1 bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300 hover:shadow-xl cursor-pointer'>
                  <div className='text-buttonText text-lg md:text-xl font-bold rounded-full px-4 md:px-8 py-2 bg-white hover:bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300'>
                    Read More
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <img
            className='md:max-h-[70%] md:max-w-[90%] max-h-[50%] max-w-[70%]'
            src='https://res.cloudinary.com/dxj9hipty/image/upload/v1711718018/File/Untitled_design_1_evdol8.png'
            alt='Coding Illustration'
          />
        </div>
      </div>
      <EnrollmentModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default HomePage;
