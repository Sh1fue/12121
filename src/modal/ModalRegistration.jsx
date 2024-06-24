import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Registration.css';

const Modal = ({ active, setActive }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = () => {
        setAgreeTerms(!agreeTerms);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async () => {
        if (!agreeTerms) {
            toast.error("Пожалуйста, согласитесь с условиями и политикой конфиденциальности");
            return;
        }

        if (!validateEmail(formData.email)) {
            toast.error("Введите корректный email");
            return;
        }
    
        try {
            const response = await axios.post('https://ba65-94-141-125-64.ngrok-free.app/api/user/registration', formData);
            console.log(response.data);
            toast.success("Регистрация прошла успешно!");
            setActive(false);
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error:", error.response.status, error.response.data);
                toast.error("Некорректный email или пароль");
            } else if (error.request) {
                console.error("Request error:", error.request);
                toast.error("Не удалось подключиться к серверу. Пожалуйста, попробуйте позже.");
            } else {
                console.error("Request setup error:", error.message);
                toast.error("Произошла непредвиденная ошибка. Пожалуйста, попробуйте позже.");
            }
        }
    };
    
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите имя"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Пароль"
                />
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="termsCheckbox"
                        checked={agreeTerms}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="termsCheckbox">
                        <span>Я соглашаюсь с <a href="/privacy" target="_blank">политикой конфиденциальности</a></span>
                    </label>
                </div>
                <button onClick={handleSubmit}>Регистрация</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Modal;
