import axios from 'axios';
import React, { useEffect, useReducer, useState} from 'react';
import { calcSubPrise, calcTotalPrice } from '../helpers/calc';
import { API } from '../helpers/const';


export const clientContext = React.createContext()

const INIT_STATE = {
    products: null,
    productsCountInCard: JSON.parse(localStorage.getItem("card")) ? JSON.parse(localStorage.getItem('card')).products.length : 0,
    card: null,
    modals: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { ...state, products: action.payload }
        case "ADD_AND_DELETE_PRODUCT_IN_CARD":
            return { ...state, productsCountInCard: action.payload }
        case "GET_CARD":
            return { ...state, card: action.payload }
        case "GET_MODALS":
            return { ...state, modals: action.payload }

        default:
            return { ...state }
    }
}

const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async () => {
        console.log(window.location);
        const { data } = await axios(`${API}${window.location.search}`)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: data,
        })
    }

    const addAndDeleteProductInCart = (product) => {
        let card = JSON.parse(localStorage.getItem("card"))
        if (!card) {
            card = {
                products: [],
                totalPrice: 0,

            }
        }
        let newProduct = {
            product: product,
            count: 1,
            subPrice: 0
        }
        newProduct.subPrice = calcSubPrise(newProduct)
        let newCard = card.products.filter(item => item.product.id === product.id)
        if (newCard.length) {
            card.products = card.products.filter(item => item.product.id !== product.id)
        }
        else {
            card.products.push(newProduct)
        }
        card.totalPrice = calcTotalPrice(card.products)
        localStorage.setItem("card", JSON.stringify(card))
        dispatch({
            type: "ADD_AND_DELETE_PRODUCT_IN_CARD",
            payload: card.products.length
        })
        console.log(card);

       

    }
    const checkProductInCard = (id) => {
        let card = JSON.parse(localStorage.getItem("card"))
        if (!card) {
            return false
        }
        let newCard = card.products.filter(item => item.product.id === id)
        return !newCard.length ? true : false

    }
    const getCard = () => {

        let card = JSON.parse(localStorage.getItem("card"))
        dispatch({
            type: "GET_CARD",
            payload: card
        })
    }

    const changeCountProduct = (count, id) => {
        let card = JSON.parse(localStorage.getItem("card"))
        if (!card) {
            return
        }
        card.products = card.products.map(item => {
            if (item.product.id === id) {
                item.count = count
                item.subPrice = calcSubPrise(item)
            }
            return item

        })
        card.totalPrice = calcTotalPrice(card.products)
        localStorage.setItem("card", JSON.stringify(card))
        getCard()
    }
    const getModals = async () => {
        const { data } = await axios(API)
        const arr = []
        data.forEach(item => {
            arr.push(item.modal)
        })
        let newArr = []
        arr.forEach(elem => {
            let check = newArr.filter(item => item.toString().trim() === elem.toString().trim())
            if (check.length === 0) {
                newArr.push(elem)
            }
        })
        dispatch({
            type: "GET_MODALS",
            payload: newArr
        })
    }
    
    const [posts,setPosts]=useState([])
    const [currentPage,setCurrentPage]=React.useState(1)
    const [postsPerPage]= React.useState(6)

    React.useEffect(()=>{
        const fetchProduct = async()=>{
         const data = state.products || []
         setPosts(data)
        }
        fetchProduct()
    },[state.products])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPosts = posts.length
    

    const changePage = (newPage) =>{
        setCurrentPage(newPage)
    }
    
    const createNewUser = async (newUser,history)=>{
        try{
           
            const data = await axios.post("https://intense-retreat-64750.herokuapp.com/auth/registration", newUser)
            history.push('/')
        }
        catch(e){
            console.log(e.response);
            alert(e.respons.data.message)

        }
        
    }
    const lodin = async (user,history) =>{
        try{
            const {data} = await axios.post("https://intense-retreat-64750.herokuapp.com/auth/login",user)
            history.push("/")

        }
        catch(e){
            alert(e.response.data.message)
        }

    }
    
    

    return (
     
        <clientContext.Provider value={{
            products: state.products,
            productsCountInCard: state.productsCountInCard,
            card: state.card,
            modals: state.modals,
            currentPosts,
            postsPerPage,
            totalPosts,
            getProducts,
            addAndDeleteProductInCart,
            checkProductInCard,
            getCard,
            changeCountProduct,
            getModals,
            changePage,
            createNewUser,
            lodin,
          
        }}>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;