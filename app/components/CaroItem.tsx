import Image from "next/image";

type ItemProps = {
  index: number;
  value: string;
  onClick: () => void;
  cn: string;
  activeIndex: number;
  posY:number;
}

const CaroItem:React.FC<ItemProps> = ({index, activeIndex, posY, value, onClick, cn}) => {
  if(activeIndex === index)
    return <div className={`bg-[#F9F9F9] border-[1px] border-[#94949480] rounded-[24px] mt-4 px-[10px] py-[8px] flex items-center ${cn}`} onClick={onClick} style={{transform:`translateY(${posY}px)`, cursor: 'pointer'}}>
      <Image src='/assets/images/x-mark.png' width={24} height={24} alt='' />
      <p className="font-satoshi font-normal font-[14px] lg:font-[16px] text-[#3a3a3a] ml-3">{value}</p>
    </div>
  else
      return <div className={`mt-4 px-3 py-2 flex items-center ${cn}`} onClick={onClick} style={{transform:`translateY(${posY}px)`, cursor: 'pointer'}}>
        <Image src='/assets/images/icons/x-mark.svg' width={24} height={24} alt='' />
        <p className="font-satoshi font-normal font-[16px] text-[#3a3a3a] ml-3">{value}</p>
    </div>
}

export default CaroItem