import { Typography } from '@/components/Typography';
import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen md:mt-32 mt-28 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl bg-white rounded-lg shadow-md p-8 w-full">
                <Typography size="xxxl" weight="bold" color="blue" className="text-center mb-6">
                    About BALMUKUND IT ACADEMY
                </Typography>
                <Typography size="md" color="mediumGray" className="text-justify mb-4">
                    BALMUKUND IT ACADEMY is committed to providing high-quality education and training in various fields of technology.
                    Our courses are designed to equip students with the skills needed for success in the tech industry.
                    We offer courses in web development, data structures & algorithms, and web designing, among others.
                </Typography>
                <Typography size="md" color="mediumGray" className="text-justify mb-4">
                    At BALMUKUND IT ACADEMY, we believe in practical learning.
                    Our courses include hands-on projects and real-time applications to ensure our students are job-ready.
                </Typography>
                <Typography size="md" color="mediumGray" className="text-justify mb-4">
                    Whether you are a beginner looking to start your career in tech or an experienced professional seeking to upgrade your skills,
                    BALMUKUND IT ACADEMY has the right program for you. Join us and embark on a journey towards a successful career in technology.
                </Typography>
                <Typography size="xl" weight="bold" color="blue" className="text-center mt-8 mb-4">
                    Our Mission
                </Typography>
                <Typography size="md" color="mediumGray" className="text-justify mb-4">
                    Our mission is to empower individuals with the knowledge and skills required to thrive in the digital age.
                    We are committed to providing exceptional education and transforming lives through technology.
                </Typography>
                <Typography size="xl" weight="bold" color="blue" className="text-center mt-8 mb-4">
                    Our Vision
                </Typography>
                <Typography size="md" color="mediumGray" className="text-justify mb-4">
                    Our vision is to be a leading institution in technology education, recognized for our innovation, commitment to excellence, and positive impact on society.
                </Typography>
                <Typography size="xl" weight="bold" color="blue" className="text-center mt-8 mb-4">
                    Why Choose Us?
                </Typography>
                <ul className="list-disc list-inside text-mediumGray leading-relaxed mb-6">
                    <Typography size="sm" color="mediumGray">
                        <li>Expert instructors with real-world experience</li>
                    </Typography>
                    <Typography size="sm" color="mediumGray">
                        <li>Hands-on projects and practical learning</li>
                    </Typography>
                    <Typography size="sm" color="mediumGray">
                        <li>Comprehensive curriculum designed for industry needs</li>
                    </Typography>
                    <Typography size="sm" color="mediumGray">
                        <li>Job placement assistance and career support</li>
                    </Typography>
                    <Typography size="sm" color="mediumGray">
                        <li>State-of-the-art facilities and learning environment</li>
                    </Typography>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;