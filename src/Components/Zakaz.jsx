import React from 'react';
import './Zakaz.css';
const Zakaz = () => {
    return (
        <div className="glv">
            <div className="orders-page">
                <div className="sidebar-lk">
                    <div className="menu-item">Мой профиль</div>
                    <Link to="/contact">
                    <a className="menu-item">Заказы </a>
                    </Link>
                    <div className="menu-item">Настройки</div>
                    <div className="menu-item">Выход</div>
                </div>
                
                <div className="content">
                    <h2>Заказы</h2>
                    <div className="info-block">
                        <p><strong>ФИО:</strong> какая-то инфа еще</p>
                        <p><strong>Номер телефона:</strong> какая-то инфа еще</p>
                    </div>
                    <div className="orders-block">
                        <div className="orders-header">
                            <span>Недавние заказы</span>
                            <span className="view-all">посмотреть все</span>
                        </div>
                        <div className="order-item">
                            <span>76453726</span>
                            <span>Апрель 23, 2024</span>
                            <span className="status">заблокирован</span>
                            <span className="view-more"></span>
                        </div>
                        <div className="order-item">
                            <span>76453726</span>
                            <span>Апрель 23, 2024</span>
                            <span className="status">неоплаченный</span>
                            <span className="view-more"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Zakaz;
