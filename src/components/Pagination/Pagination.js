// import LIST_POST from '../Data/Data';
import POSTS from '../Data/POSTS';
import styles from './Pagination.module.scss';
import React,{useEffect,useState} from 'react';
import Content from '../Content/Content';

const Pagination = () => {

    const [posts,setPosts] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage,setPostsPerPage] = useState(3)
    const [pageNumberLimit,setPageNumberLimit]  = useState(10)
    const [maxPageNumberLimit,setMaxPageNumberLimit]  = useState(10)
    const [minPageNumberLimit,setMinPageNumberLimit]  = useState(0)
    
    useEffect(()=> {
        setPosts(POSTS)
    },[])
    
    const pages = []

    //caculate page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)


    //handle next page
    const handleNextBtn = () => {
        if(currentPage !== pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    // get more page
    const handleGetMoreBtn = () => {
        if(currentPage + 5 < pages.length) {
            setMaxPageNumberLimit(maxPageNumberLimit + 5)
        }
        else {
            let getPage = pages.length - currentPage;
            setMaxPageNumberLimit(currentPage + getPage)
            setCurrentPage(currentPage)
        }
    }

    //total page
    for (let i = 1; i <= Math.ceil(posts.length/postsPerPage); i++) {
      pages.push(i)
    }

    // handle click pagination
    const handleClick = number => setCurrentPage(number)

    // render page
    const renderPageNumbers = pages.map(number => {
        if(number <= maxPageNumberLimit && number > minPageNumberLimit) {
            return (
                        <li 
                            key = {number} 
                            onClick = {() => handleClick(number)}
                            className = {currentPage == number ? styles.active : ''}
                        > 
                            {number} 
                        </li>
                    )
        }else {
            return null;
        }
    })
    
    return (
        <>
            <div className = {styles.content}>
                {
                    currentPosts.map((item,index) => (
                        
                        <Content content = {item.post} key = {index}/> 
                    )
                    )
                }
            </div>
            <ul className = {styles.page__number}>
                {renderPageNumbers}
                <div className = {styles.button__group}>
                    <button onClick = {handleGetMoreBtn} type = "button">...</button>
                    <button onClick = {handleNextBtn} type = "button">Trang sau</button>
                </div>
            </ul>
        </>
    )
}
export default Pagination