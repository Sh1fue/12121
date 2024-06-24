import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './ModalAuth.css';

const ModalAuth = ({ activeAuth, setActiveAuth, onLogin }) => { 
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://ba65-94-141-125-64.ngrok-free.app/api/user/login', formData);
            console.log("Response data:", response.data); 
            onLogin(response.data);
            setActiveAuth(false);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Ошибка при отправке запроса:", error.message);
                console.error("Подробности ошибки:", error.response);
                if (error.response) {
                    console.error("Data:", error.response.data);
                    console.error("Status:", error.response.status);
                    console.error("Headers:", error.response.headers);
                    if (error.response.status === 404) {
                        toast.error("Неверный email или пароль.");
                    }
                }
            } else {
                console.error("Unexpected error:", error);
            }
        }
    };

    return (
        <div className={activeAuth ? "ModalAuth activeAuth" : "ModalAuth"} onClick={() => setActiveAuth(false)}>
            <div className="ModalAuth__content" onClick={e => e.stopPropagation()}>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Электронная почта" 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Пароль" 
                />
                <button onClick={handleSubmit}>Войти</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ModalAuth;
