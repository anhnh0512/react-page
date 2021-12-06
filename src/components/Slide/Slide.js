import styles from './Slide.module.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import $ from "jquery";
import SlideItem from "./SlideItem"
import LIST_DATA from '../Data/Data'


import React,{ useEffect, useRef, useState,useLayoutEffect } from 'react'
import ChevronLeft from '@mui/icons-material/ChevronLeft';

const Slide = ({items}) => {
    const [data,setData] = useState([])
    const [activeImage,setActiveImage] = useState(3)
    
    const sliderRef = useRef(null)

    //fake call data from API 
    useLayoutEffect(() => {
        setData(LIST_DATA)
    },[]);


    useEffect(()=> {
        // add default class for element 
        if(sliderRef.current.childNodes.length > 4) {
            const activeSlide = $(sliderRef.current.childNodes[activeImage])
            activeSlide.prev().prev().addClass(styles.prev_2)
            activeSlide.prev().addClass(styles.prev_1)
            activeSlide.addClass(styles.active)
            activeSlide.next().addClass(styles.next_1)
            activeSlide.next().next().addClass(styles.next_2)
        }
    },[data])


    useEffect(()=> {
        // excuted when active image changed
        if(sliderRef.current.childNodes.length > 4) {
            let arr = sliderRef.current.childNodes
            for (let i = 0; i < arr.length; i++) {
                arr[i].classList.remove(styles.prev_1,styles.prev_2,styles.active,styles.next_1,styles.next_2)
            }
            const activeSlide = $(sliderRef.current.childNodes[activeImage])
            activeSlide.prev().prev().addClass(styles.prev_2)
            activeSlide.prev().addClass(styles.prev_1)
            activeSlide.addClass(styles.active)
            activeSlide.next().addClass(styles.next_1)
            activeSlide.next().next().addClass(styles.next_2)
        }
    },[activeImage])

    //next activeImage
    const handleNextSlide = () => {
        if(activeImage + 1 < sliderRef.current.childNodes.length)
        setActiveImage(activeImage+1)
    }


    //prev acctiveImage
    const handlePrevSlide = () => {
        if(activeImage > 0)
        setActiveImage(activeImage - 1)
    }

  return (
    <div className = {styles.slide__container}>
             <div  ref= {sliderRef} className = {styles.slider}>
                    {
                        data.map((item,index) => (
                            <SlideItem  title = {item.title} key = {index} image = {item.image} />
                        ))
                    }
            </div>
            <div className = {styles.button__group}>
                <button onClick = {handlePrevSlide}><ChevronLeft style = {{fontSize : 30}}/></button>
                <button onClick = {handleNextSlide}><ChevronRightIcon style = {{fontSize : 30}}/></button>
            </div>
    </div>
  );
}
export default Slide