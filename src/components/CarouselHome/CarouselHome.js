import styles from './CarouselHome.module.scss';
import classNames from 'classnames/bind';
import './CarouselHome.css';

import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

const cx = classNames.bind(styles);

const slide = [
    {
        src: 'https://s199.imacdn.com/vg/2022/09/30/a7e9aa3df86f5d2f_5070b7ae07f0ee08_5197291664512590361628.jpg',
        title: 'Chainsaw Man',
        view: '4,492,378 lượt xem',
        id: '44511',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/16/5687ac1535aa75f3_3cf7b4134929515a_17397416659043816118684.jpg',
        title: 'Boku no Hero Academia',
        view: '10,612,710 lượt xem',
        id: '49918',
    },
    {
        src: 'https://s199.imacdn.com/vg/2021/06/07/dc699e07c7b0c300_ad1f1107033e9a79_49785216230505676118684.jpg',
        title: 'Mairimashita! Iruma-kun',
        view: '2,386,909 lượt xem',
        id: '49784',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/09/29/aa417ef789a9f13d_b20d51a063a0c24f_9643416644298769118684.jpg',
        title: 'Mob Psycho 100',
        view: '2,170,429 lượt xem',
        id: '50172',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/09/29/b56fce5cacb03fb6_134319ec837d9e2f_13034116644384378118684.jpg',
        title: 'Spy x Family',
        view: '2,329,172 lượt xem',
        id: '50602',
    },
];

const items = [
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/9c572479b83b6cad_46f938ef02ce0aab_38221166815353279674.jpg',
        title: 'Mô hình Itachi',
        shop: 'https://tiki.vn/mo-hinh-hitachi-p204039419.html?itm_medium=CPC&itm_source=tiki-ads&itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.197047_Y.1779374_Z.3510351_CN.Product-Ads-10%2F11%2F2022&spid=204039420&utm_source=accesstrade&utm_medium=tiki-aff&utm_campaign=AFF_NBR_ACT_UNK_TIKIVN-TNWGVSKG_ALL_VN_ALL_UNK_UNK_TAPX.b9c70e87-a6cf-4614-8d2f-52ad0f233df4_TAPU.7e816ab8-b482-4a28-bd38-1b2a6d1159b8&utm_term=TAPM.6NuXUfHluti4jrOotuWONZ9d6N1ennm18imlrfYmGLkU2NPm_TAPP.1209_TAPT.TI3&atnct1=44f683a84163b3523afe57c2e008bc8c&atnct2=6NuXUfHluti4jrOotuWONZ9d6N1ennm18imlrfYmGLkU2NPm&atnct3=29cTm0000nw0000xl&tclid=e0ac1713-2765-4d69-ac4a-d2de6065b64b&fsl=true&isOpenStore=false&trackId=63930c0d5db5a3eb17203ea5&osName=Windows&deepLink=tikivn%3A%2F%2Fproducts%2F204039419%3Fitm_medium%3DCPC%26itm_source%3Dtiki-ads%26itm_campaign%3DSRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.197047_Y.1779374_Z.3510351_CN.Product-Ads-10%252F11%252F2022%26spid%3D204039420%26utm_source%3Daccesstrade%26utm_medium%3Dtiki-aff%26utm_campaign%3DAFF_NBR_ACT_UNK_TIKIVN-TNWGVSKG_ALL_VN_ALL_UNK_UNK_TAPX.b9c70e87-a6cf-4614-8d2f-52ad0f233df4_TAPU.7e816ab8-b482-4a28-bd38-1b2a6d1159b8%26utm_term%3DTAPM.6NuXUfHluti4jrOotuWONZ9d6N1ennm18imlrfYmGLkU2NPm_TAPP.1209_TAPT.TI3%26atnct1%3D44f683a84163b3523afe57c2e008bc8c%26atnct2%3D6NuXUfHluti4jrOotuWONZ9d6N1ennm18imlrfYmGLkU2NPm%26atnct3%3D29cTm0000nw0000xl%26tclid%3De0ac1713-2765-4d69-ac4a-d2de6065b64b&clickId=a5d853a8-82ca-46af-9328-c0f84f8e84eb&fullUrl=https%3A%2F%2Fti.ki%2Fadd%2FTNWGVSKG%3Futm_term%3DTAPM.6NuXUfHluti4jrOotuWONZ9d6N1ennm18imlrfYmGLkU2NPm_TAPP.1209_TAPT.TI3%26TIKI_URI%3Dhttps%253A%252F%252Ftiki.vn%252Fmo-hinh-hitachi-p204039419.html%253Fitm_medium%253DCPC%2526itm_source%253Dtiki-ads%2526itm_campaign%253DSRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.197047_Y.1779374_Z.3510351_CN.Product-Ads-10%25252F11%25252F2022%2526spid%253D204039420%26atnct1%3D44f683a84163b3523afe57c2e008bc8c%26atnct2%3D6NuXUfHluti4jrOotuWONZ9d6N1ennm18imlrfYmGLkU2NPm%26atnct3%3D29cTm0000nw0000xl&isFBApp=false&deepLinkData=&hash=TNWGVSKG',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/22/baa48f0b0ea3f206_89e3da76047f8c46_41482166643609419674.jpg',
        title: 'Lót chuột anime 20x20',
        shop: 'https://shopee.vn/L%C3%B3t-chu%E1%BB%99t-anime-20x20-v%C3%A0-21x26-full-50-m%E1%BA%ABu-pad-chu%E1%BB%99t-gi%C3%A1-r%E1%BA%BB-si%C3%AAu-d%E1%BB%85-th%C6%B0%C6%A1ng-VN8-i.357915542.7180098707?af_click_lookback=7d&af_reengagement_window=7d&af_siteid=an_17156540000&af_sub_siteid=1209&af_viewthrough_lookback=1d&atnct1=ca9c267dad0305d1a6308d2a0cf1c39c&atnct2=JYpdADPL2DD0nOw1eAooNgw9tFYFHBqDFczyiXHF76FoiEpx&atnct3=7s5sp00079r0000xl&c=679&is_retargeting=true&pid=affiliates&sp_atk=59911fda-9594-40d4-8fdd-5a2a46691874&utm_campaign=&utm_content=1209-JYpdADPL2DD0nOw1eAooNgw9tFYFHBqDFczyiXHF76FoiEpx-vuighe.net--&utm_medium=affiliates&utm_source=an_17156540000&xptdk=59911fda-9594-40d4-8fdd-5a2a46691874',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/40c517d1d731cb76_accb04b045d2698c_14361166815247649674.jpg',
        title: 'Điện thoại iPhone 14 Pro 128GB',
        shop: 'https://www.thegioididong.com/dtdd/iphone-14-pro',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/d881c8bf83cb5491_002170c0c3ede830_20280166850829889674.jpg',
        title: 'Máy xông tinh dầu Humidifier H2O',
        shop: 'https://shopee.vn/M%C3%A1y-x%C3%B4ng-tinh-d%E1%BA%A7u-Humidifier-H2O-phun-s%C6%B0%C6%A1ng-t%E1%BA%A1o-%C4%91%E1%BB%99-%E1%BA%A9m-trong-nh%C3%A0-ph%C3%B2ng-ng%E1%BB%A7-M%C3%A1y-khu%E1%BA%BFch-t%C3%A1n-tinh-d%E1%BA%A7u-cao-c%E1%BA%A5p-i.233167885.16823966739?af_click_lookback=7d&af_reengagement_window=7d&af_siteid=an_17156540000&af_sub_siteid=1209&af_viewthrough_lookback=1d&atnct1=ca9c267dad0305d1a6308d2a0cf1c39c&atnct2=gGNtxFdhAHRxEuiQiT0ofEVqVhleliQ7eOxcsA9UGaCBzFcU&atnct3=IjoXx00079r0000xl&c=679&is_retargeting=true&pid=affiliates&utm_campaign=&utm_content=1209-gGNtxFdhAHRxEuiQiT0ofEVqVhleliQ7eOxcsA9UGaCBzFcU-vuighe.net--&utm_medium=affiliates&utm_source=an_17156540000',
    },
];

function CarouselHome() {
    return (
        <Container className={cx('container-carousel')}>
            <Row className={cx('row')}>
                <Col className={cx('column')} lg={9} sm={12}>
                    <Carousel className={cx('carousel-home')}>
                        {slide.map((item, index) => {
                            return (
                                <Carousel.Item key={index} interval={3000}>
                                    <LinkContainer to={`/watch/${item.id}`}><img className="d-block w-100" src={item.src} alt="First slide" /></LinkContainer>
                                    <Carousel.Caption className={cx('caption')}>
                                        <span className={cx('view')}>{item.view}</span>
                                        <span className={cx('title')}>{item.title}</span>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </Col>
                <Col className={cx('ads-home', 'column') + ' ads-home d-sm-none d-lg-block'} lg={3}>
                    <Carousel className={cx('carousel-home')}>
                        {items.map((item, index) => {
                            return (
                                <Carousel.Item key={index} interval={3000}>
                                    <a href={item.shop} target="_blank">
                                        <img className="d-block w-100" src={item.src} alt="First slide" />
                                    </a>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default CarouselHome;
