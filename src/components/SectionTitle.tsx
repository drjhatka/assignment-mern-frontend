import { TSectionTitlePropType } from '../types/types';


const SectionTitle = (sectionContent:TSectionTitlePropType) => {
    const {title, description, image} = sectionContent
    return (
        <div className='flex  flex-col justify-center items-center py-2 mx-2 pb-2 border-green-600 border-2 shadow-xl rounded-md mb-3 mt-3'>
            <div className='flex gap-4 items-center'>
                {
                    image && <img src={image} alt="" />
                }
                <h1 className=' text-2xl font-bold text-red-500 mb-2'>{title}</h1>
            </div>
            <div>
                <p className='font-semibold text-blue-700'>{description}</p>
            </div>
        </div>
    );
};

export default SectionTitle;