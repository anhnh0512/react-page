import React, { useRef } from 'react'
import styles from './SlideItem.module.scss';
const SlideItem = ({title,image,ref}) => {
    return (
            <div className = {styles.slide__item}>
                <div>
                    <img className = {styles.slide__item__img} src = {image} alt = ""/>
                </div>
                <div>
                    <p className = {styles.SlideItem__content}>{title}</p>
                </div>
            </div>
    )
}
export default SlideItem