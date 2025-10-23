
import type { MenuItem } from '../data'

export default function MenuItem({name, emoji, ingredients, price, addItem}: MenuItem & {addItem: (name: string, price: number) => void} ) {
    
    //console.log(addItem)
    
    const handleAddItem = () => {
        addItem(name, price)
    }

    return (
        <section className='flex items-center gap-8 border-b border-[#DEDEDE] py-4 sm:py-10'>
          <div className="text-5xl sm:text-7xl">{emoji}</div>
          <div>
            <h3 className="text-2xl sm:text-3xl">{name}</h3>
            <p className='text-gray-400'>{ingredients.join(', ')}</p>
            <p className='text-xl'>${price}</p>
          </div>
          <button 
            className="rounded-full border border-[#DEDEDE] size-[40px] sm:size-[50px] ml-auto text-3xl font-extralight font-[Inter]"
            onClick={handleAddItem}
          >+</button>
        </section>
    )
}