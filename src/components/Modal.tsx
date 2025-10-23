
import type { HandleModal } from "../types"

export default function Modal({toggleModal}: HandleModal) {
    
    return (
        <div 
        onClick={() => toggleModal(false)}
        className='h-screen w-screen fixed top-0'>  
        <div 
          onClick={e => e.stopPropagation()}
          className='flex flex-col fixed m-auto bg-white justify-center w-11/12 shadow-2xl inset-0 p-4 py-6 self-center max-w-lg max-h-[380px]'
        >
          <h3 className='text-3xl font-sans text-center mb-6'>Enter card details</h3>
          <form className='flex flex-col gap-3 font-sans'>
            <input className='border border-gray-300 p-2 rounded-[3px]' type="text" name="name" id="name" placeholder='Enter your name' />
            <input className='border border-gray-300 p-2 rounded-[3px]' type="number" name="cardNumber" id="cardNumber" placeholder='Enter card number' />
            <input className='border border-gray-300 p-2 rounded-[3px]' type="number" name="ccv" id="ccv" placeholder='Enter your CCV' />
            <button
              className='bg-[#16DB99] text-white font-sans w-full rounded-[3px] py-3 mt-6'
            >Pay</button>
          </form>
        </div>
      </div>
    )
}