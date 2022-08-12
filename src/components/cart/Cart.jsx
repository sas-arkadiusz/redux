import { useSelector } from "react-redux";
import { changeAmount, removeProduct } from "../../redux/RootReducer";
import store from "../../redux/Store";

const Cart = () => {
    // 1. Wyciągamy dane ze Store za pomocą selektora
    const cartSlice = useSelector(state => state.cart);
    const cartContent = cartSlice.cart;

    const changeAmountInCart = (event, id) => {
        const changeAmountHandler = changeAmount(
            { id: id, amount: Number.parseInt(event.target.value)}
        )
        store.dispatch(changeAmountHandler);
    }

    const removeProductInCart = (id) => {
        const removeProductHandler = removeProduct({ id: id});
        store.dispatch(removeProductHandler);
    }

    console.log(cartContent);
    return (
        <div>
            {cartContent.map((product) => {
                return (
                    <div key={product.id}>
                        {product.name} {product.price}
                        <input type="number"
                               defaultValue={product.amount}
                               min={1}
                               onChange={event => changeAmountInCart(event, product.id)} />
                        <button onClick={() => removeProductInCart(product.id)}>Usuń</button>
                    </div>)
            })}
        </div>
    );
}

export default Cart;