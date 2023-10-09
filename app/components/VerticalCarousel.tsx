import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import CaroItem from './CaroItem';
import GradientBlock from './GradientBlock';

type CarouselProps = {
  lists: string[];
}

const MyCarousel: React.FC<CarouselProps> = ({lists}) => {
  const [currentItem, setCurrentItem] = useState(0)
  const handleItemChange = (currentItemObject, currentPageIndex) => {
    setCurrentItem(currentPageIndex)
  }
  return (
    // <div className="relative before:content-[''] before:top-0 before:bg-gradient-white-before before:absolute before:z-10 before:w-[100%] before:h-[60%] before:pointer-events-none after:bottom-0 after:bg-gradient-white-after after:absolute after:z-10 after:w-[100%] after:h-[60%] after:pointer-events-none">
    <>
      <GradientBlock position='before' index={currentItem} lists={lists} size={4}/>
      <Carousel itemPosition={'left'} verticalMode itemsToShow={1} pagination={false} showArrows={false} onChange={handleItemChange}>
        {lists.map((image, index) => (
          <CaroItem key={index} value={image} />
        ))}
      </Carousel>
    </>
      
    // </div>
  );
};

export default MyCarousel;