import React, {useState} from 'react';
import cn from "classnames";

import VerticalSliderPropTypes from './VerticalSlider.types';

import CaroItem from '../CaroItem';


const VerticalSilder: React.FC<VerticalSliderPropTypes> = ({lists}: VerticalSliderPropTypes) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const halfwayIndex = Math.ceil(lists.length / 2);

    const itemHeight = 56;

    const shuffleThreshold = halfwayIndex * itemHeight;

    const visibleStyleThreshold = shuffleThreshold / 2;

    const determinePlacement = (itemIndex: number) => {
        if (activeIndex === itemIndex) return 0;

        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(lists.length + activeIndex - itemIndex) * itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (lists.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }

        return 0;
    };


    return (
        <div className='container'>
            <section className="outer-container max-w-[342px] w-[342px] lg:max-w-[547px] lg:w-[547px] lg:m-auto lg:flex lg:overflow-hidden">
                <div className="carousel-wrapper flex-1 lg:flex lg:flex-col">
                    <div className="carousel lg:h-full lg:flex lg:flex-1">
                        <div className="slides self-start w-full overflow-hidden flex-1">
                            <div className="carousel-inner relative max-h-[396px] h-[396px] lg:max-h-[542px] lg:h-[542px]">
                                {lists.map((item, i: number) => (
                                    <CaroItem
                                        key={i}
                                        index = {i}
                                        activeIndex = {activeIndex}
                                        onClick={() => setActiveIndex(i)}
                                        cn={
                                            `carousel-item ${activeIndex === i ? "active": ""} ${Math.abs(determinePlacement(i)) <= visibleStyleThreshold ? "visible" : ""} gap-[12px]`
                                        }
                                        value={item}
                                        posY={determinePlacement(i)}

                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`                      
                      .carousel-inner::before,
                      .carousel-inner::after {
                        content: "";
                        z-index: 1;
                        position: absolute;
                        width: 100%;
                        height: 220px;
                        width: 556px;
                        pointer-events: none;
                      }
                      
                      .carousel-inner::before {
                        top: 0;
                        background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
                      }
                      
                      .carousel-inner::after {
                        bottom: 0;
                        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
                      }
                      
                      .carousel-item {
                        position: absolute;
                        margin: 0;
                        opacity: 0;
                        top: 250px;
                        transition: transform 0.4s ease, opacity 0.4s ease;
                      }
                      
                      .carousel-item.visible {
                        opacity: 1;
                      }
                    `}
                </style>
            </section>
        </div>
    )
}

export default VerticalSilder;