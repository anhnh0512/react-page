import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import styles from './Login.module.scss'
const Login = () => {
    const [loginNumber,setLoginNumber] = useState(true)
    const [loginGmail,setLoginGmail] = useState(false)
    const [loginForm,setLoginForm] = useState(false)

    const inputGmailRef = useRef(null)

    const loginBodyRef = useRef(null)

    const inputPasswordRef = useRef(null)

    const handleLogin = () => {
        setLoginForm(prev => !prev)
    }


    const handleChangeLogin = () => {
        setLoginNumber(prev => !prev)
        setLoginGmail(prev => !prev)
        !loginGmail ? inputGmailRef.current.placeholder = "Địa chỉ gmail" : inputGmailRef.current.placeholder = "Số điện thoại"
        !loginGmail ? inputGmailRef.current.type = "gmail" : inputGmailRef.current.type = "tel"
        !loginGmail ? inputPasswordRef.current.type = "gmail" : inputPasswordRef.current.type = "hidden" 
    }

    return (
        <div className = {styles.Login__wrapper}>
            <div className = {styles.Login__container}>
                <div className = {styles.Login__header}>
                    <h1 className = {styles.Login__title}>Đăng nhập</h1>
                </div>
                <div className = {styles.Login__body} ref = {loginBodyRef}>
                    {loginForm ?     <form className = {styles.loginForm}>
                                        <div className = {styles.loginBack__btn} onClick = {handleLogin}>
                                            <ChevronLeftIcon/>
                                        </div>
                                        <div className = {styles.form__control}>
                                            <div className = {styles.form__label}>
                                                    <lable className = {styles.form__inputLabel}>{loginNumber ? 'Số điện thoại' : 'Gmail'}</lable>
                                                    <lable className = {styles.form__inputLabel,styles.form__labelRight} onClick = {handleChangeLogin} >{loginGmail ?  'Đăng ký với số điện thoại'  : 'Đăng ký với gmail'}</lable>
                                            </div>
                                            <div className = {styles.form__input}>
                                                    <input ref = {inputGmailRef} type = "tel" maxLength = "11" placeholder = "số điện thoại"/>
                                                    <input className = "input__password" ref = {inputPasswordRef} type = "hidden" placeholder = "Nhập mật khẩu" />
                                                    <span className = "form__message"></span>
                                                </div>
                                            </div>
                                            <div className = {styles.form__control}>
                                                <div className = {styles.form__input}>
                                                    <input type = "text" placeholder = "Nhập mã"/>
                                                    <span className = {styles.form__btnRight}>Gửi mã</span>
                                                </div>
                                            </div>
                                            <div className = {styles.form__control}>
                                                <div className = {styles.form__button}>
                                                    <Button type = "submit" lightBlue none><span>Đăng ký</span></Button>
                                                </div>
                                            </div>
                                    </form>
                    : 
                    <div>
                        <button onClick = {handleLogin} className = {styles.signIn__button}>Sử dụng email / số điện thoại</button>
                        <button className = {styles.signIn__button}>Tiếp tục với Google</button>
                        <button className = {styles.signIn__button}>Tiếp tục với Facebook</button>
                        <button className = {styles.signIn__button}>Tiếp tục với Github</button>
                    </div>
                    }
                </div>
                <p className = {styles.Login__haveAcc}>Bạn chưa có tài khoản? <Link className = {styles.Login__link} to = '/register'>Đăng ký</Link></p>
            </div>
        </div>
    )
}
export default Login