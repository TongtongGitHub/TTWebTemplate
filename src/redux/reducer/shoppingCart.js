    
import * as types from '../actionType'

export const shoppingCart = (state = {
    cartList: [],
    totalNumber: 0,
    totalPrice: 0,
    isLoading: true
}, action) => {
    switch (action.type) {
        case types.SHOPPING_CART_UPDATEDATA:
            return {...state,cartList:[
                ...state.cartList,
                {
                    id: 0,
                    name: 'item1',
                    price: '100',
                    number: '10'
                }
            ],
            totalPrice: 100,
            isLoading: false
        }
        case types.SHOPPING_CART_DELETEDATA:
            let newCartList = state.cartList.filter(item=>{
                return item.id !== action.data.id;
            })
            return {...state,cartList:newCartList,isLoading: false}
        case types.SHOPPING_CART_LOADDATA:
            return {...state,...action.data}
        default:
            return state;
    }
}