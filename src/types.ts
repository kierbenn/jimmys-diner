

export type AddItem = {
    addItem: (name: string, price: number) => void
}
export type RemoveItem = {
    removeItem: (id: string) => void
}

export type HandleModal = {
    toggleModal: (bool: boolean) => void
}

export type Order = {
    id:string, 
    name:string, 
    price:number
}
  