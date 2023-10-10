// import React from 'react';
// import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
// import consts from 'react-elastic-carousel';


// const HorizontalCarousel: React.FC<ReactElasticCarouselProps> = (props) => {
//     const customArrow = ({type, onClick, isEdge}) => {
//         const pointer = type === consts.PREV ? "<" : ">";

//         if(type === consts.PREV) 
//             return (
//                 <button onClick={onClick} disabled={isEdge}>
//                     {"<"}
//                 </button>
//             )
//         else
//             return (
//                 <button onClick={onClick} disabled={isEdge}>
//                     {">"}
//                 </button>
//             )   
//     }
//     return (
//         <>
//             <Carousel {...props}>
//                 <div className="w-[700px] h-[300px] bg-[#1890ff] text-[#fff]">1</div>
//                 <div className="w-[700px] h-[300px] bg-[#1890ff] text-[#fff]">1</div>
//                 <div className="w-[700px] h-[300px] bg-[#1890ff] text-[#fff]">1</div>
//                 <div className="w-[700px] h-[300px] bg-[#1890ff] text-[#fff]">1</div>
//                 <div className="w-[700px] h-[300px] bg-[#1890ff] text-[#fff]">1</div>
//                 <div className="w-[700px] h-[300px] bg-[#1890ff] text-[#fff]">1</div>
//                 <div className="w-[700px] h-[300px] bg-[#1890ff] text-[#fff]">1</div>
//             </Carousel>
//         </>
//     )
// }

// export default HorizontalCarousel;