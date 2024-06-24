// src/Components/Basket.jsx
import React, { useState } from 'react';
import { useAuth } from '../modal/AuthContext';
import '../Components/Basket.css';
import images from '../assets/images.jpg';

const Basket = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <p className='authp'>Вы должны войти в систему, чтобы получить доступ к корзине.</p>;
    }

    const initialItems = [
        { id: 1, name: 'Двигатель какой-то там', price: 9999, quantity: 1 },
        { id: 2, name: 'Двигатель какой-то там', price: 9999, quantity: 1 },
        { id: 3, name: 'Двигатель какой-то там', price: 9999, quantity: 1 },
    ];

    const [items, setItems] = useState(initialItems);
    const [favorites, setFavorites] = useState([]);

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleQuantityChange = (id, delta) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleAddToFavorites = (id) => {
        const item = items.find(item => item.id === id);
        if (item) {
            setFavorites(prevFavorites => [...prevFavorites, item]);
        }
    };

    return (
        <>
            <div className="cart-container">
                <div className="items">
                    {items.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={images} alt="product" />
                            <div className="dlr">
                                <div className="details">
                                    <p className="name">{item.name}</p>
                                    <p className="brand">фирма</p>
                                    <div className="actions">
                                        <button onClick={() => handleAddToFavorites(item.id)}>В избранное</button>
                                        <button onClick={() => handleRemove(item.id)}>Удалить</button>
                                    </div>
                                </div>
                                <div className="quantity-price">
                                    <div className="quantity">
                                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                    </div>
                                    <div className="price">{item.price} Р</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="summary">
                    <p>Ваш заказ</p>
                    <p>Всего: {items.length} шт</p>
                    <p>Стоимость товаров в заказе: {totalPrice} Р</p>
                    <p>Итого к оплате: {totalPrice + 800} Р</p>
                    <button>Перейти к оформлению</button>
                </div>
            </div>
        </>
    );
};

export default Basket;
