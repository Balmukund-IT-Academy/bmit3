import { WhatYouWillLearnApi } from '../api/whatYouWillLearn';
import ReactParallaxTilt from 'react-parallax-tilt';
import { Typography } from './Typography';
import Image from 'next/image';

const WhatYouWillLearn = () => {
    return (
        <div className='flex w-full items-center justify-center'>
            <div className='flex w-11/12 mt-8 flex-col items-center'>
                <Typography size={'xxxl'} weight={'bold'}>What You Will Learn?</Typography>
                <div className='flex flex-wrap justify-evenly md:gap-12 gap-6 md:py-14 my-6'>
                    {
                        WhatYouWillLearnApi.map((item) => (
                            <ReactParallaxTilt key={item.id} perspective={500}
                                tiltMaxAngleX={12}
                                tiltMaxAngleY={12}
                                gyroscope={true}
                                scale={1.02}>
                                <div className='flex flex-col items-center md:min-w-72 min-w-28 ring-2 bg-slate-100 rounded-lg p-4 gap-2'>
                                    <Image height={200} width={200} src={item.image} alt={item.name} className='md:w-32 w-16' />
                                    <Typography size={'lg'}>{item.name}</Typography>
                                </div>
                            </ReactParallaxTilt>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatYouWillLearn;
