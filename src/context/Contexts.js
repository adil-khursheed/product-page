import { createContext, useContext, useReducer } from "react"
import React from 'react'
import { ProductInfo } from "../productApi";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Contexts = ({ children }) => {
    
    const products = ProductInfo.map((info) => ({
        id: info.id,
        subtitle: info.subtitle,
        title: info.title,
        description: info.description,
        price: info.price,
        discount: info.discount,
        mrp: info.mrp,
        images: info.images,
    }))


    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    })


  return (
      <Cart.Provider value={{ state, dispatch }}>
          {children}
      </Cart.Provider>
  )
}

export default Contexts;

export const CartState = () => {
    return useContext(Cart)
}