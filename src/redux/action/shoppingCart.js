
import * as types from "../actionType";

export default{
    shoppingCartUpdateData(data) {
        return {
            type: types.SHOPPING_CART_UPDATEDATA,
            data
        }
    },
    shoppingCartDeleteData(data){
        return {
            type: types.SHOPPING_CART_DELETEDATA,
            data
        }
    },
    shoppingCartLoadData() {
        return (dispatch) => {
            setTimeout(()=>{
                let data = {
                    cartList:[
                        {
                            id: '0',
                            name: 'item1',
                            price: '100',
                            number: '10'
                        }
                    ],
                    totalNumber: 10,
                    totalPrice: 100,
                    isLoading: false
                };
                let action = {
                    type: types.SHOPPING_CART_LOADDATA,
                    data
                }
                dispatch(action);
            },1000);
        }
    }
}