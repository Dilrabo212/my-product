import cls from './style.module.scss'
import { PlayIcon } from '../../icons/svj'
const PlayBtn = ({ children }) => {
    return (
        <button className={cls.play}>
            <span className={cls.playText}>
                <span className={cls.playIcon}><PlayIcon /></span>
                <span> {children}</span>
            </span>
        </button>
    )
}

export default PlayBtn
