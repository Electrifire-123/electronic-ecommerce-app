
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (c) => c.productId !== action.payload.productId
        ),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.productId === action.payload.productId
            ? (c.qty = action.payload.qty)
            : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload};
        case "FILTER_BY_LATEST":
            return { ...state, bylatest: !state.bylatest};
        case "FILTER_BY_ASSURANCE":
            return { ...state, byProdAssurance: !state.byProdAssurance};
//brandName, category, productType create filters
        case "FILTER_BY_BRAND":
            return {...state, byBrandName: action.payload};
        case "FILTER_BY_CATEGORY":
            return {...state, byCategory: action.payload};
        case "FILTER_BY_PRODUCTTYPE":
            return {...state, byProductType: action.payload};
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload}
        case "CLEAR_FILTERS":
            return {
                bylatest:false,
                byProdAssurance:false,
                searchQuery:"",
            };
        default:
            return state;

    }
}