import { Typography } from "./Typography";

const Footer = () => {
    return (
        <div className='flex flex-col items-center gap-4 w-full bg-gradient-to-r from-[#6060d8] to-[#9298f0] text-primaryWhite p-4'>
            <div className='w-11/12 flex md:flex-row flex-col'>
                <div className='flex flex-col w-full'>
                    <div>
                        <img src="https://res.cloudinary.com/dxj9hipty/image/upload/fl_preserve_transparency/v1714880433/File/fuaodjzbkq0s48zioo04.jpg?_s=public-apps" alt="" className='h-24' />
                    </div>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <Typography size={'xl'} weight={'bold'} color={'primary'}>Contact us</Typography>
                    <div className='flex flex-col gap-1'>
                    <Typography size={'md'} color={'primary'}><b>Address: </b>124, Shardha Row-House, Near Sarthana Community Hall, Simada Gam, Surat - 395006</Typography>
                    <Typography size={'md'} color={'primary'}><b>Phone: </b>+91 70699 71072</Typography>
                    <Typography size={'md'} color={'primary'}><b>Email: </b>balmukund.itacademy@gmail.com</Typography>
                    </div>
                </div>
            </div>
            <div className='h-[1px] bg-white w-11/12'></div>
            <div className='w-11/12 flex'>
                <Typography size={'sm'} color={'primary'}>&#169; 2024 - Balmukund IT Academy. All Rights Reserved.</Typography>
            </div>
        </div>
    );
};

export default Footer;