import { addProduct } from "../../../redux/RootReducer";
import store from "../../../redux/Store";

const Product = () => {
    const addProductToCart = () => {
        const addProductHandler = addProduct(
            { id: 2, name: 'Keyboard', price: 200, amount: 1 }
        );
        store.dispatch(addProductHandler);
    }

    return (
        <div>
            Produkt A
            Klawiatura
            <button onClick={() => addProductToCart()}>Dodaj do koszyka</button>
        </div>
    );
}

export default Product;