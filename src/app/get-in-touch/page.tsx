'use client'
import { Typography } from '@/components/Typography';
import { supabase } from '@/utils/supabase';
import React, { useState } from 'react';

const GetInTouch: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        const { error } = await supabase
            .from('contact_us')
            .insert([
                { name, mobile: mobileNumber, email, message }
            ]);
        if (error) {
            setError('Please try again!');            
        }
        else {
            setError('');
            setName('');
            setEmail('');
            setMessage('');
            setMobileNumber('');
        }
    };

    return (
        <div className="rounded-lg p-8 w-full md:mt-32 mt-28">
            <Typography size="xxxl" weight="bold" color="blue" className="text-center mb-6">
                Get in Touch
            </Typography>
            <div className="flex flex-col gap-2">
                <div className="flex md:flex-row flex-col gap-4 items-center">
                    <div className='w-full'>
                        <iframe className='md:h-60 h-36 w-full rounded-md' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14876.633163741202!2d72.8985858!3d21.2255708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f04ccd3d787%3A0xbae0373f80d52e99!2sBalmukund%20IT%20Academy!5e0!3m2!1sen!2sin!4v1717251222225!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
                    </div>
                    <div className='w-full'>
                        <Typography size="xl" color="blue" weight={'bold'}>
                            Head Office
                        </Typography>
                        <Typography size="md" color="mediumGray">
                            124, Shadhdha Row-house, Sarthana Jakat Naka, Near Sarthana Community Hall, Nana Varachha, Surat, Gujarat 395006
                        </Typography>
                        <Typography size="md" color="mediumGray">
                            +91 70699 71072
                        </Typography>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <img
                            className='hidden md:block h-96 w-2/3 object-contain'
                            src="https://res.cloudinary.com/dxj9hipty/image/upload/v1717252543/File/Untitled_design_4_alk2gg.png"
                            alt="Contact illustration"
                        />
                        <form onSubmit={handleSubmit} className="md:ml-8 space-y-4 md:p-8 rounded-lg md:w-2/3 w-full">
                            <Typography size="xl" weight="bold" color="blue" className="text-center mb-6">
                                Contact Us
                            </Typography>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:ring-gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:ring-gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="mobile_number"
                                    name="mobile_number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:ring-gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none ring-1 focus:ring-2 ring-gradientFrom focus:gradientFrom focus:border-transparent shadow-md shadow-gradientFrom"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <div className='text-xl font-bold rounded-full px-1 py-1 bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300 hover:shadow-xl cursor-pointer' onClick={handleSubmit}>
                                <div className='text-center text-buttonText text-lg md:text-xl font-bold rounded-full px-3 md:px-6 py-1 bg-white hover:bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300'>
                                    Submit
                                </div>
                            </div>
                            {error && <Typography size={'sm'} color={'red'}>{error}</Typography>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
