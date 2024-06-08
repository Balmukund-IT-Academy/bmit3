// CourseItem.tsx

import React, { FC } from 'react';
import { CourseType } from '../api/course';
import { Typography } from './Typography';
import Link from 'next/link';

const CourseItem: FC<{ course: CourseType }> = ({ course }) => {
  return (
    <Link href={`/course/id?token=${course.id}`}>
      <div className='flex items-center justify-center min-w-[260px] max-w-[450px] border-2 rounded-xl bg-[#fff6f6a8]'>
        <div className='md:p-4 p-2 flex flex-col gap-2'>
          <img className='rounded-lg' src={course.image} alt={course.name} />
          <Typography size={'lg'} weight={'semibold'}>{course.name}</Typography>
        </div>
      </div>
    </Link>
  );
}

export default CourseItem;
