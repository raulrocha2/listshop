import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    productListReducers, 
    productDetailsReducers, 
    productCreateReducers, 
    productUpdateReducer, 
    productDeleteReducer,
    productTopReducer,
    productReviewCreateReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
    userLoginReducer, userRegisterReducer, 
    userDetailReducer, userUpdateProfileReducer,
    userListReducer, userUpdateAdminReducer,
    userDeleteReducer, userPhoneSalesReducer,
} from './reducers/userReducers'
import { 
    orderCreateReducer, 
    orderDetailsReducer, 
    orderPayReducer, 
    orderListReducer, 
    orderListMyReducer, 
    orderDeliverReducer,
} from './reducers/OrderReducers'



const reducer = combineReducers({
    productList        : productListReducers,
    productDetails     : productDetailsReducers,
    productCreate      : productCreateReducers,
    produtcUpdate      : productUpdateReducer,
    productDelete      : productDeleteReducer,
    productTop         : productTopReducer,
    productReviewCreate: productReviewCreateReducer,

    cart               : cartReducer,

    orderCreate        : orderCreateReducer,
    orderDetails       : orderDetailsReducer,
    orderPay           : orderPayReducer,
    orderListMy        : orderListMyReducer,
    orderList          : orderListReducer,
    orderDeliver       : orderDeliverReducer,

    userLogin          : userLoginReducer,
    userRegister       : userRegisterReducer,
    userDetails        : userDetailReducer,
    userUpdateProfile  : userUpdateProfileReducer,
    userAdminList      : userListReducer,
    userEditbyAdmin    : userUpdateAdminReducer,
    userDelete         : userDeleteReducer,
    userPhoneSales     : userPhoneSalesReducer,
    
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}   
    
const userWppFromStorage = localStorage.getItem('salesPhone') ?
    JSON.parse(localStorage.getItem('salesPhone')) : null

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },

    userLogin: { userInfo : userInfoFromStorage},
    userPhoneSales: { salesPhone: userWppFromStorage},
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store