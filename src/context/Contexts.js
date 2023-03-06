import { createContext, useContext, useReducer } from "react"
import React from 'react'
import { ProductInfo } from "../productApi";
import { reducer } from "./Reducers";

const Cart = createContext();

const initialState = {
    products: ProductInfo,
    cart: [],
}

const Contexts = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_FROM_CART",
            payload: id,
        })
    }


  return (
      <Cart.Provider value={{ state, dispatch, removeItem }}>
          {children}
      </Cart.Provider>
  )
}

export default Contexts;

export const CartState = () => {
    return useContext(Cart)
}