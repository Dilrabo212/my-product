import cls from './style.module.scss'
import { PlayIcon } from '../../icons/svj'
const PlayBtn = ({ children }) => {
    return (
        <button className={cls.play}>
            <PlayIcon />
            {children}
        </button>
    )
}

export default PlayBtn
