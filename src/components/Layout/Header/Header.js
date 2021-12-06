import styles from './Header.module.scss';
import HeaderLogo from '../../../img/logo.png';

import { useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
const Header = () => {
    const [info,setInfo] = useState('');
    const [active,setActive] = useState(false)

    const closeRef = useRef(null)
    const inputRef = useRef(null)

    const handleSearch = (e) => {
        setInfo(e.target.value)
        e.target.value.length > 0 ? setActive(true) : setActive(false)
    }

    const handleRemoveValue = () => {
        setInfo('')
        setActive(false)
        inputRef.current.focus()
    }

    return <header className = {styles.header}>
       <div className = {styles.header__logo}>
            <img src = {HeaderLogo} alt = "logo cảnh sát biển việt nam"/>
        </div>
        <nav className = {styles.header__nav}>
            <ul>
                <li className = {styles.header__nav__item}>
                    <Link to = '/' className = {styles.header__nav__link}>trang chủ</Link>
                </li>
                <li className = {styles.header__nav__item}>
                    <Link to ='/login' className = {styles.header__nav__link}>đăng ký / đăng nhập</Link>
                </li>
                <li className = {styles.header__nav__item}>
                    <a className = {styles.header__nav__link}>hướng dẫn sử dụng</a>
                </li>
            </ul>
        </nav>  
        <form className = {styles.header__form}>
            <input ref = {inputRef} value = {info} onChange = {e => handleSearch(e)} className = {styles.input} placeholder = "Tìm Kiếm " type = "text"/>
            <span className = {`${styles.search__icon} ${active ? '' : styles.active} `}><SearchIcon style = {{fontSize : 20}}/></span>
            <span onClick = {handleRemoveValue} ref = {closeRef} className = {`${styles.close__icon} ${active ? styles.active : ''}`}><CloseIcon/></span>
        </form>
    </header>
}

export default Header;