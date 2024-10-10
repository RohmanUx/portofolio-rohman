import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const LandingPage: React.FC = () => {
    const [, setCurrentSlide] = useState(0);

    const onChange = (index: number) => {
        setCurrentSlide(index);
        console.log(`Slide changed to: ${index}`);
    };

    const onClickItem = (index: any) => {
        console.log(`Clicked item at index: ${index}`);
    };

    const onClickThumb = (index: any) => {
        console.log(`Clicked thumbnail at index: ${index}`);
    };

    return (
        <div className="flex justify-center items-center">
            <Carousel 
                showArrows={true} 
                onChange={onChange} 
                onClickItem={onClickItem} 
                onClickThumb={onClickThumb} 
                className="h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full"
                dynamicHeight={true} // Optional: Dynamically adjust height
            >
                <div>
                    <img src="assets/1.jpeg" alt="A scenic view of mountains" />
                    <p className="legend text-white bg-black bg-opacity-50 p-2">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt="A beautiful sunset over the ocean" />
                    <p className="legend text-white bg-black bg-opacity-50 p-2">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="A vibrant city skyline" />
                    <p className="legend text-white bg-black bg-opacity-50 p-2">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" alt="A tranquil forest path" />
                    <p className="legend text-white bg-black bg-opacity-50 p-2">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" alt="An adventurous hike in the mountains" />
                    <p className="legend text-white bg-black bg-opacity-50 p-2">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" alt="A bustling market scene" />
                    <p className="legend text-white bg-black bg-opacity-50 p-2">Legend 6</p>
                </div>
            </Carousel>
        </div>
    );
};

export default LandingPage;
