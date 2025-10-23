import { useState } from 'react'
import { menuArray } from './data'
import MenuItem from './components/MenuItem'
import OrderItem from './components/OrderItem'
import OrderTotal from './components/OrderTotal'
import Modal from './components/Modal'
import Header from './components/Header'
import type { Order } from './types'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [menuItems] = useState(menuArray)
  const [orderItems, setOrderItems] = useState<Order[]>([])
  const [isModal, setIsModal] = useState(false)

  const handleAddItem = (name: string, price: number) => {
    // create a new order, unique ID and add into orderItems
    const order = {
      name,
      price,
      id: uuidv4() // unique id for multi of the same item
    }
    setOrderItems(prev => [...prev, order])
  }

  const handleRemoveItem = (orderID: string) => {
    // search orderItems and only return what != to removed item
    setOrderItems(prev => 
      prev.filter(item => item.id != orderID)
    )
  }

  const handleModal = (bool:boolean) => {
    setIsModal(bool)
  }

  return (
    <>
      <Header />
      <main className='m-auto sm:w-[600px] sm:px-12 px-6'>
        {menuItems && menuItems.map(item => 
          <MenuItem key={item.id} {...item} addItem={handleAddItem} />
        )}
        {orderItems.length > 0 && (
          <section className='pt-4 sm:pt-8'>
            <h2 className='text-2xl text-center mb-4 sm:mb-6'>Your order</h2>
            {orderItems.map((order) =>
              <OrderItem key={order.id} {...order} removeItem={handleRemoveItem} />
            )}
            <OrderTotal orderItems={orderItems} toggleModal={handleModal} />
          </section>
        )}
      </main>
      {isModal &&
        <Modal toggleModal={handleModal} />
      }
    </>
  )
}

export default App
