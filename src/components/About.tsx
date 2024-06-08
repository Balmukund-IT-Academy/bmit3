import React from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'
import { Typography } from './Typography'

const About = () => {
  return (
    <ReactParallaxTilt
      perspective={500}
      tiltMaxAngleX={1}
      tiltMaxAngleY={1}
      gyroscope={true}
    >
      <div className='w-full flex items-center justify-center'>
        <div className='w-11/12 bg-[#e3f9ff45] hover:bg-[#effcff9c] border-2 rounded-2xl flex transition-all duration-300 flex-col md:flex-row'>
          <div className='flex w-full'>
            <div className='md:p-8 p-4 w-full rounded-xl overflow-hidden'><img className='w-full rounded-xl object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxXRj6p-RWwSGVxOSwgmOOQ7YV09hZFIXkw&s" alt="" /></div>
          </div>
          <div className='flex w-full'>
            <div className='md:p-8 p-4 flex flex-col gap-4'>
              <Typography size={'xxxl'} weight={'bold'}>About Us</Typography>
              <Typography size={'lg'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae libero totam ratione, enim temporibus eveniet ut quasi inventore a tempore illum quas eaque itaque et est quaerat optio consequatur corporis? Recusandae minima neque, dicta consequuntur quis autem possimus obcaecati aperiam pariatur nam, eos, deserunt modi facere sapiente! Minima labore ratione aspernatur velit possimus mollitia ad doloribus sed eum sapiente reiciendis a, ut quam. Ducimus nulla, commodi, recusandae illum cupiditate enim iure corporis itaque ut nam nisi dicta fugiat exercitationem numquam animi dolorem, at delectus repudiandae. Veniam, voluptatibus accusamus ipsa commodi a nemo consectetur, nisi architecto fuga cupiditate in maiores animi numquam sed. Rem, debitis quas. Eaque officia ipsam totam. Nostrum nihil nobis voluptate. Illo voluptatum quos corrupti vero optio perspiciatis?</Typography>
            </div>
          </div>
        </div>
      </div>
    </ReactParallaxTilt>
  )
}

export default About