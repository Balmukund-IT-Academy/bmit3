import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from './Typography';
import Image from 'next/image';

const steps = [
    { title: "Latest Curriculum", image: 'https://res.cloudinary.com/dxj9hipty/image/upload/v1716775260/BMIT/1_zalp0y.png', description: "We offer courses for both beginners and advanced learners, covering Web Development, Web Design, C++, Data Structures, and Algorithms (DSA)." },
    { title: "Experienced Instructors", image: 'https://res.cloudinary.com/dxj9hipty/image/upload/v1716775259/BMIT/2_faqc7u.png', description: "Our instructors are industry professionals with years of experience, bringing real-world insights and practical knowledge to the classroom." },
    { title: "Hands-on Learning", image: 'https://res.cloudinary.com/dxj9hipty/image/upload/v1716775262/BMIT/3_jpwnpu.png', description: "Our courses are interactive and practical, with real-life projects and coding challenges to prepare you for the tech industry." },
    { title: "Personalized Attention", image: 'https://res.cloudinary.com/dxj9hipty/image/upload/v1716775259/BMIT/4_tmhwwp.png', description: "We maintain small class sizes to provide personalized attention, with instructors dedicated to helping you overcome challenges and achieve your goals." },
    { title: "Career Support", image: 'https://res.cloudinary.com/dxj9hipty/image/upload/v1716775259/BMIT/5_gsduks.png', description: "Our career support services include resume building, interview preparation, and job placement assistance to help you land your dream job." },
    { title: "Continuous Improvement", image: 'https://res.cloudinary.com/dxj9hipty/image/upload/v1716775258/BMIT/6_iljxu9.png', description: "We continuously update our courses to keep up with the latest industry trends and technologies, ensuring you learn the most current and relevant skills." }
];

const WhyChooseUs: React.FC = () => {
    return (
        <div className="p-4 md:p-8 flex flex-col items-center gap-8">
            <Typography size={'xxxl'} weight={'bold'}>Why Choose us?</Typography>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-115 flex flex-col items-center"
                    >
                        <Image height={20} width={10} src={step.image} alt={step.title} className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-md mb-4" />
                        <Typography size={'xl'} weight={'bold'}>{step.title}</Typography>
                        <Typography size={'md'} className='text-center'>{step.description}</Typography>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
