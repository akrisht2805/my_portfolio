import React from 'react';
import img_cogno from '../../Images/cognologix_logo.jpeg';

const ExperienceCard = (props) => {

    return (
        <div className={'flex lg:flex-row flex-col text-white min-h-[40vh] box-border gap-0'}>
            <div className='mt-4 mx-2 mb-2 lg:w-[15%] text-xl font-semibold' >
                {props.details.duration}
            </div>
            <div className='w-[10%] lg:flex mx-3 flex-col items-center justify-center hidden'>
                <img className='bg-white border-2 border-white rounded-full  w-14' src={img_cogno} alt="company Logo" srcSet="" />
                <div className='bg-white w-[2px] h-full'>
                </div>
            </div>

            <div className='md:w-[75%] mb-4 border-b-2 p-4 border-white rounded-md bg-zinc-600'>
                <h1 className='text-3xl font-semibold' >{props.details.designation}</h1>
                <h3 className='text-xl italic'>{props.details.companyName}</h3>
                <ul className='mt-3 px-5 list-outside list-disc leading-7 text-justify'>
                    {props.details.description?.map((item, index) =>
                        <li className='' key={index}>
                            {item}
                        </li>
                    )}
                </ul>
                <h6 className='text-xl py-2'>Tech: <span className='italic px-2' >{props.details.techOnWorked}</span></h6>
            </div> 


        </div>
    )
}

export default ExperienceCard;