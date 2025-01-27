import { Link } from 'react-router-dom';

const ReviewCard = () => {
    return (
        <div className='flex gap-y-4  px-4 py-4 flex-col w-80 mt-2 mb-2 border-green-400 border-2 rounded-lg'>
            <div className='flex justify-center '>
            <img src="person.jpg" className='rounded-full' width='150px'  alt="Image" />

            </div>
            <div className='flex justify-center text-blue-500 font-semibold'>
                Alice says
            </div>
            <div className='mt-4 mb-4 font-semibold text-red-900 text-sm'>
                blah blah blah blah blah blah blah blah blah blah blah blah
                .....<Link to='/' className='link'> Read More</Link>
            </div>
            <div></div>
        </div>
    );
};

export default ReviewCard;