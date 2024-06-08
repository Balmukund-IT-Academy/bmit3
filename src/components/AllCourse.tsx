import { courseApi } from '../api/course'
import CourseItem from './CourseItem'
import { Typography } from './Typography'

const AllCourse = () => {
  return (
    <div className='flex w-full items-center justify-center'>
        <div className='flex w-11/12 mt-8 flex-col items-center'>
            <Typography size={'xxxl'} weight={'bold'}>What would you like to learn?</Typography>
            <div className='flex flex-wrap justify-evenly md:gap-12 gap-4 md:py-14 py-6'>
                {
                    courseApi.map((course) => (
                        <CourseItem key={course.id} course={course}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AllCourse