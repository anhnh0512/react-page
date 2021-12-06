import styles from './Content.module.scss'
const Content = ({content}) => {
    return (
        <div className = {styles.content}>
            <p>{content}</p>
        </div>
    )
}
export default Content