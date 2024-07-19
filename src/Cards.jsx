// eslint-disable-next-line react/prop-types
function Cards({img, star,title,price,points,person,location, soldOut}){
    return (
        <div className='relative'>
        <img src={img} alt="" />
        <div className='flex'> <img src={star} alt="" /><p> <span className='font-bold'>{points}</span>{location}</p></div> 
        <p className="text-sm">{title}</p>
        <p> <span className='font-bold'>{price}</span> {person}</p>
       <button className='bg-slate-200 w-20 h-6 rounded text-xs absolute top-2 left-2'>{soldOut?"SOLIDOUT":"ONLINE"}</button>
        
    </div>
    )
}
export default Cards
