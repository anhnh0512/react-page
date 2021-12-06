import styles from './Section.module.scss';
import Navigation from '../../Navigation/Navigation';
import Pagination from '../../Pagination/Pagination';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slide from '../../Slide/Slide';
import Menu from '../../Menu/Menu';

const years = [
    {
        year : '1992'
    },
    {
        year : '1993'
    },
    {
        year : '1994'
    },
    {
        year : '1995'
    },
    {
        year : '1992'
    },
]

const Section = () => {
    return (
        <section className = {styles.section}>
            <div className = {styles.main__section}>
                <div className = {styles.menu}>
                    <div className = {styles.menu__title}>
                        <h4>tài liệu giới thiệu luật pháp lệnh
                            <span className = {styles.menu__title__icon}>
                                <ChevronRightIcon style = {{fontSize : 16}}/>
                            </span>
                        </h4>
                    </div>
                    <Menu/>
                </div>
                <div className = {styles.content}>
                    <div  className = {styles.content__title}>
                    <h3>tài liệu giới thiệu luật, pháp lệnh</h3>
                    </div>   
                    <hr/>
                    <Slide/>
                    <Pagination/>
                </div>
                <div className = {styles.side__bar}>
                    <div className = {styles.side__bar__block}></div>
                    <Navigation/>
                </div>
            </div>
            <div className = {styles.end__section}></div>
        </section>
    )
}
export default Section