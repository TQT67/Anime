import styles from './ItemAnime.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemAnime(props) {
    return (
        <Link to={`/watch/${props.anime.mal_id}/`}>
            <div className={cx('wrapper', {'border-manga': props.type==='manga'})}>
                <img className={cx('image', {'manga': props.type==='manga'})} src={props.anime.images.jpg.large_image_url} alt="" />
                <div className={cx('description')}>
                    <div className={cx('title')}>{props.anime.title}</div>
                    <div className={cx('info')}>
                        <div className={cx('name')}>{props.anime.synopsis}</div>
                        <div className={cx('view')}>{props.anime.members} lượt xem</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ItemAnime;
