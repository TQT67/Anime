import styles from './AdsHome.module.scss';
import classNames from 'classnames/bind';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

const items = [
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/9c572479b83b6cad_46f938ef02ce0aab_38221166815353279674.jpg',
        title: 'Mô hình Itachi',
        shop: 'https://tiki.vn/mo-hinh-hitachi-p204039419.html',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/22/baa48f0b0ea3f206_89e3da76047f8c46_41482166643609419674.jpg',
        title: 'Lót chuột anime 20x20',
        shop: 'https://shopee.vn/L%C3%B3t-chu%E1%BB%99t-anime-20x20-v%C3%A0-21x26-full-50-m%E1%BA%ABu-pad-chu%E1%BB%99t-gi%C3%A1-r%E1%BA%BB-si%C3%AAu-d%E1%BB%85-th%C6%B0%C6%A1ng-VN8-i.357915542.7180098707',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/40c517d1d731cb76_accb04b045d2698c_14361166815247649674.jpg',
        title: 'Điện thoại iPhone 14 Pro 128GB',
        shop: 'https://www.thegioididong.com/dtdd/iphone-14-pro',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/d881c8bf83cb5491_002170c0c3ede830_20280166850829889674.jpg',
        title: 'Máy xông tinh dầu Humidifier H2O',
        shop: 'https://shopee.vn/M%C3%A1y-x%C3%B4ng-tinh-d%E1%BA%A7u-Humidifier-H2O-phun-s%C6%B0%C6%A1ng-t%E1%BA%A1o-%C4%91%E1%BB%99-%E1%BA%A9m-trong-nh%C3%A0-ph%C3%B2ng-ng%E1%BB%A7-M%C3%A1y-khu%E1%BA%BFch-t%C3%A1n-tinh-d%E1%BA%A7u-cao-c%E1%BA%A5p-i.233167885.16823966739',
    },
];

function AdsHome() {
    return (
        <Container className={cx('wrapper')}>
            <Row className={cx('row')}>
                {items &&
                    items.map((item, index) => {
                        return (
                            <Col key={index} className={cx('column')} sm={6} lg={3}>
                                <div className={cx('main', `item-${index + 1}`)}>
                                    <a href={item.shop} target='_blank'>
                                        <img src={item.src} alt="" />
                                    </a>
                                    <span className={cx('title')}>{item.title}</span>
                                </div>
                            </Col>
                        );
                    })}
            </Row>
        </Container>
    );
}

export default AdsHome;
