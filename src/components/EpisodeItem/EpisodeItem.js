import styles from './EpisodeItem.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { themeContext } from '../../App';

const cx = classNames.bind(styles);

function EpisodeItem({episode, title, image}) {
    const {theme, setTheme} = useContext(themeContext);

    return (<div className={cx('wrapper')}>
        <div className={cx('image')}>
            <img src={image} alt=''/>
        </div>
        <div className={cx('content')}>
            <div className={cx('title', {'text-dark': theme==='dark'})}>
                <span>
                    Tập {episode} - {title}
                </span>
            </div>
        </div>
    </div>  );
}

export default EpisodeItem;