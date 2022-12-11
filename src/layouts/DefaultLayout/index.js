import Header from '../../components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Container from 'react-bootstrap/Container';
import { Children } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <Container className={cx('container')}>
            <Header />
            {children}
        </Container>
    );
}

export default DefaultLayout;
