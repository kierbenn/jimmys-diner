import { useState } from 'react'
import { menuArray } from './data'
import MenuItem from './components/MenuItem'
import { v4 as uuidv4 } from 'uuid';

type Order = {
      name: string,
      price: number,
      id: string
    }

function App() {

  const [menuItems] = useState(menuArray)
  const [orderItems, setOrderItems] = useState<Order[]>([])
  const [isModal, setIsModal] = useState(false)

  const handleAddItem = (name: string, price: number) => {
    const order = {
      name,
      price,
      id: uuidv4() // unique id for multi of the same item
    }

    setOrderItems(prev => [...prev, order])

    //console.log(order)
  }

  const handleRemoveItem = (orderID: string) => {

    setOrderItems(prev => 
      prev.filter(item => item.id != orderID)
    )

  }

  const handleShowModal = () => {
    setIsModal(true)
  }

  const handleCloseModal = () => {
    setIsModal(false)
  }

  return (
    <>
      <header className='bg-[url(header-img.jpg)] bg-cover text-white sm:w-[600px] mx-auto p-12'>
        <h1 className='text-5xl'>Jimmy's Diner</h1>
        <h2>The best burgers and pizzas in town.</h2>
      </header>

      <main className='m-auto sm:w-[600px] sm:px-12 px-6'>
        {menuItems && menuItems.map(item => 
          <MenuItem key={item.id} {...item} addItem={handleAddItem} />
        )}
        {orderItems.length > 0 && (
          <section className='pt-8'>
            <h2 className='text-2xl text-center mb-6'>Your order</h2>
            {orderItems.map((order, idx) =>
              <div className='flex items-center gap-2 mt-2' key={idx}>
                <h3 className='text-2xl'>{order.name}</h3>
                <button
                  className='text-[12px] text-gray-300 font-sans'
                  onClick={() => handleRemoveItem(order.id)}
                  >remove</button>
                <p className='ml-auto'>${order.price}</p>
              </div>
            )}
            <div className='flex border-t border-black mt-2 pt-2'>
              <h3 className='text-2xl'>Total price:</h3> 
              <p className='ml-auto'>${orderItems.reduce((acc, curr) => acc + curr.price,0)}</p>
            </div>
            <button 
              className='bg-[#16DB99] text-white font-sans w-full rounded-[3px] py-3 my-6'
              onClick={handleShowModal}
            >Complete order</button>
          </section>
        )}
      </main>
      {isModal &&
      <div 
        onClick={handleCloseModal}
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
              className='bg-[#16DB99] text-white font-sans w-full rounded-[3px] py-3 my-6'
            >Pay</button>
          </form>
        </div>
      </div>
      }
    </>
  )
}

export default App
