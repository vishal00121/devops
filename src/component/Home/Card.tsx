interface CardProps {
    img?: string;
    name : string;
    
    email : string;
    
}

function Card({img,name,email,}:CardProps) {
  return (
   
        
    <div className= " h-fit rounded-xl bg-white border -mt-10 mx-8 px-6 py-14 flex items-center justify-center flex-col space-y-6  shadow-md ">




        <img src={img} alt="" className="relative flex shrink-0 overflow-hidden rounded-lg size-[120px]" />
        <div className="text-center">
          <p className="px-[10px] py-[6px] font-semibold text-xl">{name}</p>
        <p className="text-headerText/60 font-medium text-base">{email}</p>
        </div>
       
    </div>
    
  )
}

export default Card