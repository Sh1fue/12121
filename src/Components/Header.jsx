import React, { useState, useEffect } from 'react';
import '../Components/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from '../modal/ModalRegistration';
import ModalAuth from "../modal/ModalAuth";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../modal/AuthContext';

function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveAuth, setModalActiveAuth] = useState(false);
    const {isAuthenticated, login, logout, user } = useAuth();
    const [showCatalog, setShowCatalog] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('User object:', user);
    }, [user]);

    const handleLogin = (userData) => {
        login(userData);
        setModalActiveAuth(false);
    };

    const handleLogout = () => {
        logout();
        setShowProfileMenu(false);
    };

    const handleSearch = () => {
        navigate(`/catalog?search=${searchQuery}`);
    };

    return (
        <div>
            <header className="header">
                <Link to="/" className="item-link">
                    <div className="logo">
                        <span className="logo-text">РекАвто</span>
                        <span className="logo-text-small">Автозапчасти</span>
                    </div>
                </Link>
                <button className="catalog-button" onClick={() => setShowCatalog(!showCatalog)}>Каталог</button>
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Артикул или номер детали" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearch}>Найти</button>
                </div>
                <div className="icon-links">
                    <Link to="/contact" className="item-link">
                        <i className="fas fa-address-book"></i>
                        <span>Контакты</span>
                    </Link>
                    <Link to="/onas" className="item-link">
                        <i className="fas fa-info-circle"></i>
                        <span>О нас</span>
                    </Link>
                    <Link to="/basket" className="item-link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Корзина</span>
                    </Link>
                    {isAuthenticated ? (
                        <div className="profile-menu">
                            <div className="profile-icon" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                                <i className="fas fa-user-circle"></i>
                                <span>Профиль</span>
                            </div>
                            {showProfileMenu && (
                                <div className="profile-dropdown">
                                    <Link to="/profile" onClick={() => setShowProfileMenu(false)}>Мой профиль</Link>
                                    {user && user.role === 'ADMIN' && (
                                        <Link to="/admin" onClick={() => setShowProfileMenu(false)}>Админ панель</Link>
                                    )}
                                    <button onClick={handleLogout}>Выход</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="auth-links">
                            <div className="auth-icons">
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="auth-buttons">
                                <button className='open-btn auth-btn smaller-btn' onClick={() => setModalActive(true)}>Регистрация</button>
                                <Modal active={modalActive} setActive={setModalActive} />
                                <span>/</span>
                                <button className='open-btn auth-btn smaller-btn' onClick={() => setModalActiveAuth(true)}>Вход</button>
                                <ModalAuth activeAuth={modalActiveAuth} setActiveAuth={setModalActiveAuth} onLogin={handleLogin} />
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {showCatalog && (
                <div className="catalog-list">
                    <ul>
                        <li><a href='/catalog?info_id=1'>Шины</a></li>
                        <li><a href='/catalog?info_id=2'>Тех запчасти</a></li>
                        <li><a href='/catalog?info_id=3'>Масла</a></li>
                        <li><a href='/catalog?info_id=4'>Инструменты</a></li>
                        <li><a href='/catalog?info_id=5'>АвтоХимия</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
