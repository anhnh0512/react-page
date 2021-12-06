import {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Register.module.scss'
const Register = () => {

    const [loginNumber,setLoginNumber] = useState(true)
    const [loginGmail,setLoginGmail] = useState(false)


    const inputGmailRef = useRef(null)

    const inputPasswordRef = useRef(null)


    const handleChangeLogin = () => {
        setLoginNumber(prev => !prev)
        setLoginGmail(prev => !prev)
        !loginGmail ? inputGmailRef.current.placeholder = "Địa chỉ gmail" : inputGmailRef.current.placeholder = "Số điện thoại"
        !loginGmail ? inputPasswordRef.current.type = "gmail" : inputPasswordRef.current.type = "hidden" 
    }

    return (
        <div className = {styles.Register__wrapper}>
            <div className = {styles.Register__container}>
                <div className = {styles.Register__header}>
                    <h1 className = {styles.Register__title}>Đăng ký tài khoản</h1>
                </div>
                <form className = {styles.Register__form}>
                    <div className = {styles.form__control}>
                        <div className = {styles.form__label}>
                            <lable >Tên của bạn?</lable>
                        </div>
                        <div className = {styles.form__input}>
                            <input type = "text" placeholder = "Nhập tên của bạn"/>
                        </div>
                    </div>
                    <div className = {styles.form__control}>
                        <div className = {styles.form__label}>
                            <lable className = {styles.form__inputLabel}>{loginNumber ? 'Số điện thoại' : 'Gmail'}</lable>
                            <lable className = {styles.form__inputLabel,styles.form__labelRight} onClick = {handleChangeLogin} >{loginGmail ?  'Đăng ký với số điện thoại'  : 'Đăng ký với gmail'}</lable>
                        </div>
                        <div className = {styles.form__input}>
                            <input ref = {inputGmailRef} type = "number" maxLength = "11" placeholder = "số điện thoại"/>
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
                <p className = {styles.Register__haveAcc}>Bạn đã có tài khoản? <Link className = {styles.Register__link} to = '/login'>Đăng nhập</Link></p>
            </div>
        </div>
    )
}
export default Register