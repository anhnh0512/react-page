import styles from './Button.module.scss'
import clsx from 'clsx'
const Button = ({children,lightBlue,active,none,type}) => {

    const classes = clsx(styles.button,{
        [styles.lightBlue]:lightBlue,
        [styles.active]: active,
        [styles.none]: none
    })

    return (
        <button className = {classes} type = {type}>{children}</button>
    )
}

export default Button