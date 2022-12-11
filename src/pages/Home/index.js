import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import CarouselHome from '../../components/CarouselHome/CarouselHome';
import AdsHome from '../../components/AdsHome/AdsHome';
import GridItems from '../../components/GridItems/GridItems';

const cx = classNames.bind(styles);

const type = ['anime', 'manga', 'bxh'];

function Home() {
    return (
        <div className={cx('wrapper')}>
            <CarouselHome />
            <AdsHome />
            {type.map((grid, index) => {
                return <GridItems key={index} type={type[index]} />;
            })}
        </div>
    );
}

export default Home;
