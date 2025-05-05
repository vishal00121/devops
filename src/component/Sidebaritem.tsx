import { ReactElement } from 'react'

interface Sidebaritemprop{
    title : string;
    icon : ReactElement;
}
function Sidebaritem({title,icon}:Sidebaritemprop) {
  return (
    <div className='flex justify-between  w-56 h-14 hover:bg-[#e5e9ee] rounded-sm'>
        
        <div className='text-xl text-gray- pt-4 pl-2'>
            {title}
             </div>
             <div className='pt-4 pr-3'>

             {icon}
             </div>
    </div>
  )
}

export default Sidebaritem