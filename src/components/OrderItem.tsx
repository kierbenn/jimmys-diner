
import type { Order, RemoveItem } from "../types"

export default function OrderItem({id, name, price, removeItem}: Order & RemoveItem) {
    
    //console.log(order)

    return (
        <div className='flex items-center gap-2 mt-2' key={id}>
        <h3 className='text-2xl'>{name}</h3>
        <button
            className='text-[12px] text-gray-300 font-sans'
            onClick={() => removeItem(id)}
            >remove</button>
        <p className='ml-auto'>${price}</p>
        </div>
    )
}