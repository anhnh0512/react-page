import React,{useEffect,useState} from 'react'
import styles from './Navigation.module.scss';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SideBarContent from '../Data/SideBarContent';
const Navigation = () => {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        setPosts(SideBarContent)
    },[])

    return (
        <div className = {styles.side__bar}>
            <div className = {styles.side__bar__title}>
                <h1><AccountBalanceIcon style = {{fontSize : 40}}/><span>được quan tâm</span></h1>
            </div>
            <div className = {styles.side__bar__content}>
                <ul>
                    {posts.map((post,index)=> (
                        <li className = {styles.side__bar__item} key = {index}>
                            <img src = {post.image}/>
                            <a className = {styles.side__bar__link}>
                                <span>{post.content}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Navigation