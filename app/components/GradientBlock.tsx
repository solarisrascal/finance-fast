import React from 'react';
import CaroItem from './CaroItem';
import Carousel from 'react-elastic-carousel';


type GradientBlockType = {
  lists: string[],
  index: number,
  size: number,
  position: "before" | "after"
}
const GradientBlock = (props: GradientBlockType) => {
  const { lists, index, size, position } = props

  console.log(index)
  const rows = [];
  if(position === "before") {
    for(let i = 1; i <= size; i++)
    {
      if(index + i > size) {
        rows.push(<CaroItem key={i} value={lists[i]}/>)
      }
      else {
        rows.push(<CaroItem key={i} value={lists[lists.length - i]}/>)
      }
    }
    return (
      <Carousel itemPosition={'left'} verticalMode itemsToShow={size} pagination={false} showArrows={false}>
        {rows}
      </Carousel>
    )
  }
} 

export default GradientBlock;

