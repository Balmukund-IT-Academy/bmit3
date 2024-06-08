'use client';
import { useEffect, useState } from 'react';
import { courseApi, CourseType } from '../api/course';
import { Typography } from './Typography';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { EnrollmentModal } from './EnrollmentModal';
import { supabase } from '@/utils/supabase';

const CourseDetail = () => {
  const [course, setCourse] = useState<CourseType | null>(null);
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const toggleWeek = (week: string) => {
    setExpandedWeek(prevState => (prevState === week ? null : week));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = parseInt(searchParams.get('token') ?? '');
    const selectedCourse = courseApi.find(course => course.id === courseId) || null;
    setCourse(selectedCourse);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, mobile, email, message } = formData;
    const course_name = course?.name;

    // Insert the form data into Supabase
    const { data, error } = await supabase
      .from('enrollments') // Replace 'enrollments' with your table name
      .insert([
        { name, mobile, email, message, course_name }
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }

    // Optionally, reset the form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: '',
    });

    // Close the modal
    setIsModalOpen(false);
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Image height={50} width={50} className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/199956/loading-loader.svg" alt="Loading icon" />
      </div>
    );
  }

  return (
    <div className="flex justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative md:h-72 sm:h-56 h-40">
          <Image
            height={20}
            width={20}
            className="w-full h-full object-cover object-center"
            src={course.image}
            alt={course.name}
          />
        </div>

        <div className="p-6">
          <Typography size="xxxl" weight="bold" className="pb-4">
            {course.name}
          </Typography>
          <div className="flex flex-col sm:items-center sm:justify-between mb-4">
            <Typography size="lg" className="mb-2 text-gray-600">
              {course.description}
            </Typography>
            <div className="text-xl font-bold rounded-full px-1 py-1 bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300 hover:shadow-xl cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <div className="text-center text-buttonText text-lg md:text-xl font-bold rounded-full px-4 md:px-6 py-2 bg-white hover:bg-gradient-to-r from-gradientFrom to-gradientTo hover:text-white transition-all duration-300">
                Enroll Now
              </div>
            </div>
          </div>
          <div className="mb-6">
            <Typography size="md" weight="bold" className="mb-2">
              Objectives
            </Typography>
            <ul className="list-disc list-inside">
              {course.objectives.map((objective, index) => (
                <li key={index} className="ml-4 text-gray-600">
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Outline */}
          <div className="mb-6">
            <Typography size="md" weight="bold" className="mb-2">
              Course Outline
            </Typography>
            {course.outline.map(week => (
              <div key={week.section} className={`mb-4 border border-gray-200 rounded-lg transition-all ${expandedWeek === week.section ? 'min-h-20' : 'min-h-14'}`}>
                <div
                  className="flex items-center justify-between cursor-pointer p-4"
                  onClick={() => toggleWeek(week.section)}
                >
                  <Typography size="sm" weight="bold">
                    {week.section}
                  </Typography>
                  <IoIosArrowForward className={`transition-transform ${expandedWeek === week.section ? 'transform rotate-90' : ''}`} />
                </div>
                {expandedWeek === week.section && (
                  <div className="p-4 h-full">
                    <ul className="list-disc list-inside ml-4">
                      {week.topics.map((topic, index) => (
                        <li key={index} className="ml-2 text-gray-600">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enroll Now Modal */}
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

export default CourseDetail;
