import React, { useState, useContext, useReducer} from "react";
import productsApi from "./products"
import { cartReducer, productReducer } from "./reducer";

const ProductContext = React.createContext();

export const ProductContextProvider = ({children}) => {
    const [products] = useState(productsApi);
    
    const [state, dispatch] = useReducer(cartReducer,{
        products : products,
        cart : []
    })

    const [productState, dispatchProduct] = useReducer(productReducer,{
        bylatest: false,
        byProdAssurance:false,
        searchQuery : "",
    })

    return(
        <ProductContext.Provider value={{state, dispatch, productState, dispatchProduct}}>
            {children}
        </ProductContext.Provider>
    )

}

export const useProductsContextConsumer = () => {
    return useContext(ProductContext)
}