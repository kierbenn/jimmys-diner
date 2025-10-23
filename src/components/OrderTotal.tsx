
import type { Order, HandleModal } from "../types"

export default function OrderTotal({orderItems, toggleModal}: { orderItems: Order[] } & HandleModal ) {
    
    return (
        <>
            <div className='flex border-t border-black mt-2 pt-2'>
                <h3 className='text-2xl'>Total price:</h3> 
                <p className='ml-auto'>${orderItems.reduce((acc, curr) => acc + curr.price,0)}</p>
            </div>
            <button 
                className='bg-[#16DB99] text-white font-sans w-full rounded-[3px] py-3 my-6'
                onClick={() => toggleModal(true)}
            >Complete order</button>
        </>
    )
}