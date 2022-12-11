import styles from './ItemShop.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ItemShop(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={props.item.src} alt="" />
            </div>
            <div className={cx('description')}>
                <div className={cx('title')}>{props.item.title}</div>
            </div>
            <span className={cx('price')}>{props.item.price}</span>
        </div>
    );
}

export default ItemShop;
