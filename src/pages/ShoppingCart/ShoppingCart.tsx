import React from 'react';
import CommomPageHeader from '../../components/CommomPageHeader/CommomPageHeader';
import { useCart } from '../../services/context/ShoppingCart/CartProvider';
import ShoppingCartCard from '../../components/ShoppingCartCard/ShoppingCartCard';
import Button from '../../components/Button/Button';
import './ShoppingCart.css';

function ShoppingCart() {
    const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();

    const handleRemove = (id: string) => {
        removeFromCart(id); //remove an item from the cart
    };

    const handleQuantityChange = (id: string, type: 'increase' | 'decrease') => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            if (newQuantity > 0) {
                updateQuantity(id, newQuantity); // update de quantity of an item in the cart
            }
        }
    };

    return (
        <>
            <header>
                <CommomPageHeader pageTitle="Shopping Cart" icon="trash-2" onClick={clearCart} />
            </header>
            <main>
                <section className="shoppingCartContainer">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <ShoppingCartCard
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                onRemove={handleRemove}
                                onQuantityChange={handleQuantityChange}
                            />
                        ))
                    )}
                </section>
                <section className="shoppingCartFooter">
                    <div className="shoppingCartTotalContainer">
                        <p>Total {getTotalItems()} Item(s)</p>
                        <p>USD {getTotalPrice()}</p>
                    </div>
                    <Button type="button" btnText="Proceed to Checkout"/>
                </section>
            </main>
        </>
    )
}

export default ShoppingCart;