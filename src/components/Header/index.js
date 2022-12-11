import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { LinkContainer } from 'react-router-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { IoIosInformationCircle } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { FiSun } from 'react-icons/fi';
import { HiSearch } from 'react-icons/hi';

import Logo from '../../assets/logo_v8.png';

import { useState, useEffect } from 'react';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import { useContext } from 'react';
import { themeContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
    const [showCanvas, setShowCanvas] = useState(false);
    const [signin, setSignin] = useState(true);
    // const [theme, setTheme] = useState(() => JSON.parse(localStorage.getItem('theme')) || 'light');
    const { theme, setTheme } = useContext(themeContext);
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();

    const handleClose = () => {
        setShowCanvas(false);
    };
    const handleToggle = () => {
        setShowCanvas(!showCanvas);
    };
    const handleSignout = () => {
        localStorage.removeItem('user');
        setUser(null);
        window.location.reload();
    };
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', JSON.stringify('dark'));
        } else {
            setTheme('light');
            localStorage.setItem('theme', JSON.stringify('light'));
        }
    };

    const handleSearch = () => {
        if(searchText !== '') {
            console.log(searchText);
            navigate(`/anime/${searchText}`);
        }
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#333';
        } else {
            document.body.style.backgroundColor = 'transparent';
        }
    }, [theme]);
    return (
        <Navbar className={cx('navbar', { 'border-color-dark': theme === 'dark' })}>
            <Container className={cx('container')}>
                <LinkContainer to="/">
                    <img className={cx('logo-img')} src={Logo} alt="brand" />
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto gap-2 align-items-center">
                        <LinkContainer to="/anime">
                            <span className={cx('anime', { 'text-dark': theme === 'dark', 'border-color-dark': theme === 'dark' })}>
                                Anime
                            </span>
                        </LinkContainer>
                        <LinkContainer to="/shop">
                            <span className={cx('anime', { 'text-dark': theme === 'dark', 'border-color-dark': theme === 'dark' })}>
                                Shop
                            </span>
                        </LinkContainer>
                        <LinkContainer to="/manga">
                            <span className={cx('anime', { 'text-dark': theme === 'dark', 'border-color-dark': theme === 'dark' })}>
                                Truyện
                            </span>
                        </LinkContainer>
                        <LinkContainer to="/bxh">
                            <span className={cx('anime', { 'text-dark': theme === 'dark', 'border-color-dark': theme === 'dark' })}>
                                BXH
                            </span>
                        </LinkContainer>
                    </Nav>
                    <Nav className="gap-4">
                        <div className={cx('search')}>
                            <input
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyUp={(e) => {
                                    if (e.keyCode === 13 && searchText !== '') {
                                        handleSearch();
                                    }
                                }}
                                placeholder="Tìm kiếm anime"
                                className={cx('search-input')}
                            />
                            <HiSearch onClick={handleSearch} className={cx('search-icon')} />
                        </div>
                        <LinkContainer to="/information">
                            <span className={cx('infor', { 'bg-dark': theme === 'dark' })}>
                                <IoIosInformationCircle className={cx({ 'text-dark': theme === 'dark' })} />
                            </span>
                        </LinkContainer>
                        <span onClick={toggleTheme} className={cx('theme', { 'bg-dark': theme === 'dark' })}>
                            <FiSun className={cx({ 'text-dark': theme === 'dark' })} />
                        </span>
                        <span onClick={handleToggle} className={cx('user')}>
                            {user ? (
                                <img src={user.photoURL === null ? user.img : user.photoURL} alt="" />
                            ) : (
                                <FaUser className={cx({ 'text-white': theme === 'dark' })} />
                            )}
                        </span>
                        {/* canvas */}
                        <Offcanvas className={cx('offcanvas')} show={showCanvas} placement="end" onHide={handleClose}>
                            <div className={cx('header-canvas')}>
                                <span onClick={handleClose} className={cx('close-canvas')}>
                                    <GrClose />
                                </span>
                                <span className={cx('user-canvas')}>
                                    {user ? <img src={user.photoURL === null ? user.img : user.photoURL} alt="" /> : <FaUser />}
                                </span>
                                {!user ? (
                                    <div className={cx('sign')}>
                                        <div onClick={() => setSignin(true)} className={cx('signin', { 'sign-active': signin })}>
                                            Đăng Nhập
                                        </div>
                                        <div onClick={() => setSignin(false)} className={cx('signup', { 'sign-active': !signin })}>
                                            Đăng Ký
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx('sign')}>
                                        <h6>{user.displayName || user.email}</h6>
                                    </div>
                                )}
                            </div>
                            <div className={cx('body-canvas')}>
                                {user ? (
                                    <button onClick={handleSignout} className={cx('signout')}>
                                        Đăng xuất
                                    </button>
                                ) : signin === true ? (
                                    <Signin setUser={setUser} />
                                ) : (
                                    <Signup />
                                )}
                            </div>
                        </Offcanvas>
                        {/*  */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
