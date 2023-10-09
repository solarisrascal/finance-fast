import Image from "next/image";

type ItemProps = {
  value: string;
}

const CaroItem:React.FC<ItemProps> = ({value}) => {
  return <div className="bg-[#F9F9F9] border-1 border-[rgba(148, 148, 148, 0.50)] rounded-[24px] mt-4 px-3 py-2 flex items-center">
    <Image src='/assets/images/x-mark.png' width={24} height={24} alt='' />
    <p className="text-[#000] ml-3">{value}</p>
  </div>
}

export default CaroItem