import styles from './Infor.module.scss';
import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Infor() {
    return (
        <div className={cx('wrapper')}>
            <Container className={'container'}>
                <Row>
                    <Col lg={9}>
                        <div className={'main'}>
                            <h1>CHÍNH SÁCH RIÊNG TƯ</h1>
                            <p>
                                VuiGhe tôn trọng và tận tâm bảo vệ sự riêng tư của người dùng. Chính sách Bảo vệ riêng tư này nhằm giải
                                quyết những thông tin nhận biết cá nhân (sau đây gọi là "Dữ liệu") có thể được chúng tôi thu thập. Chính
                                sách Bảo vệ riêng tư này không áp dụng đối với những bên tham gia mà chúng tôi không kiểm soát hoặc những
                                người không phải nhân viên, đại lý của chúng tôi hoặc nằm trong quyền kiểm soát của chúng tôi. Xin vui lòng
                                dành chút thời gian đọc kỹ Điều khoản sử dụng VuiGhe để hiểu rõ hơn về các hành vi được phép và không được
                                phép thực hiện tại hệ thống VuiGhe.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <ul>
                            <li>Download App</li>
                            <li>Chính Sách Riêng Tư</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Infor;
