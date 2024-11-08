import qp  from '../../../public/assets/qp.svg'
import vi  from '../../../public/assets/vi.svg'

interface HeaderProps {
    title: string
}

export default function Header({title}: HeaderProps) {
  return (
    <div className='bg-black text-[#EBF649] py-[3px] flex justify-between pr-[11px] pl-[24px]'>
        <div>
            {title}
        </div>
        <div className='flex gap-[8px]'>
        <HeaderChild img={qp} title={'Question Paper'} />
        <HeaderChild img={vi} title={'View Instruction'} />
        </div>
    </div>
  )
}

interface HeaderChildProps {
    img: string
    title: string
}


function HeaderChild({img, title}: HeaderChildProps) {
  return (
    <div className='flex gap-[4px] cursor-pointer'>
                <img src={img} alt='question paper'/>
                <p className='text-white hover:underline'>{title}</p>
    </div>
  )
}
