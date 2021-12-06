import styles from './Menu.module.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Menu = () => {
    const listYear = Array.from(
        new Array(20),
       (val, index) => new Date().getFullYear() - index
    )
    for (let i=listYear.length; i--;) {
        listYear[i] = 'năm ' + listYear[i];
    }
     listYear.unshift('toàn bộ tài liệu giới thiệu luật , pháp lệnh')

    return (
        <div styles = {styles.side__bar}>
            <ul className = {styles.side__bar__menu}>
                {listYear.map((year,index)=> (
                    <li key = {index}>
                        <span className = {styles.side__bar__icon}><ArrowRightIcon/></span> 
                        <a href = "#" className = {styles.menu__link}>{year}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu