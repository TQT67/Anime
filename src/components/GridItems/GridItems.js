import styles from './GridItems.module.scss';
import classNames from 'classnames/bind';

import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { AiOutlineRight } from 'react-icons/ai';
import ItemAnime from '../ItemAnime/ItemAnime';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { themeContext } from '../../App';
import scrollToTop from '../../Util/Scroll';

const cx = classNames.bind(styles);

function GridItems(props) {
    const [listAnime, setListAnime] = useState([]);
    // const [theme, setTheme] = useState(() => JSON.parse(localStorage.getItem('theme')) || 'light');
    const { theme, setTheme } = useContext(themeContext);
    const params = useParams();
    scrollToTop();
    useEffect(() => {
        const getAnime = async () => {
            if (params.letter) {
                console.log(params.letter);
                const list = await axios.get(`https://api.jikan.moe/v4/anime?letter=${params.letter}`);
                setListAnime(list.data.data);
            } else {
                if (params.type) {
                    if (params.type === 'anime') {
                        const list = await axios.get(`https://api.jikan.moe/v4/seasons/now?limit=24`);
                        setListAnime(list.data.data);
                    } else if (params.type === 'manga') {
                        const list = await axios.get(`https://api.jikan.moe/v4/manga?limit=24`);
                        setListAnime(list.data.data);
                    } else if (params.type === 'bxh') {
                        const list = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=24`);
                        setListAnime(list.data.data);
                    }
                } else {
                    if (props.type === 'anime') {
                        const list = await axios.get(`https://api.jikan.moe/v4/seasons/now?limit=12`);
                        setListAnime(list.data.data);
                    } else if (props.type === 'manga') {
                        const list = await axios.get(`https://api.jikan.moe/v4/manga?limit=12`);
                        setListAnime(list.data.data);
                    } else if (props.type === 'bxh') {
                        const list = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=12`);
                        setListAnime(list.data.data);
                    }
                }
            }
        };
        getAnime();
    }, [props.type, params.type, params.letter]);

    const handleChangePage = async (page) => {
        if (params.type) {
            if (params.type === 'anime') {
                const list = await axios.get(`https://api.jikan.moe/v4/seasons/now?limit=24&page=${page}`);
                setListAnime(list.data.data);
            } else if (params.type === 'manga') {
                const list = await axios.get(`https://api.jikan.moe/v4/manga?limit=24&page=${page}`);
                setListAnime(list.data.data);
            } else if (params.type === 'bxh') {
                const list = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=24&page=${page}`);
                setListAnime(list.data.data);
            }
        }
    };
    return (
        <Container className={cx('containner')}>
            <Row className={cx('row')}>
                <Col className={cx('column')} lg={12}>
                    <div className={cx('wrapper')}>
                        <LinkContainer to="/anime">
                            <div className={cx('header')}>
                                <span className={cx('title', { 'text-dark': theme === 'dark' })}>
                                    {params.letter ? (
                                        <span className={cx('result-search')}>Kết quả tìm kiếm: {params.letter}</span>
                                    ) : props.type === 'anime' || params?.type === 'anime' ? (
                                        'Tập mới nhất'
                                    ) : props.type === 'manga' || params?.type === 'manga' ? (
                                        'Truyện tranh'
                                    ) : props.type === 'bxh' || params?.type === 'bxh' ? (
                                        'Bảng xếp hạng'
                                    ) : (
                                        ''
                                    )}
                                </span>
                                <span className={cx('btn', { 'text-dark': theme === 'dark' })}>
                                    {' '}
                                    {props.type ? <AiOutlineRight /> : ''}
                                </span>
                            </div>
                        </LinkContainer>
                    </div>
                </Col>
            </Row>
            <Row className={cx('row')}>
                {params.letter && listAnime.length === 0
                    ? 'Không tìm thấy kết quả nào phù hợp'
                    : listAnime.map((anime, index) => {
                          return (
                              <Col key={index} className={cx('column')} lg={props.type === 'manga' ? 2 : 3} sm={4}>
                                  <ItemAnime anime={anime} type={props.type} />
                              </Col>
                          );
                      })}
            </Row>
            {params.type ? (
                <Row className={cx('row')}>
                    <Col className="d-flex justify-content-center" xs={12}>
                        <Pagination className={cx('pagination')}>
                            <Pagination.Item onClick={() => handleChangePage(1)} className={cx('pagination-item')}>
                                {1}
                            </Pagination.Item>
                            <Pagination.Item onClick={() => handleChangePage(2)} className={cx('pagination-item')}>
                                {2}
                            </Pagination.Item>
                            <Pagination.Item onClick={() => handleChangePage(3)} className={cx('pagination-item')}>
                                {3}
                            </Pagination.Item>
                            <Pagination.Item onClick={() => handleChangePage(4)} className={cx('pagination-item')}>
                                {4}
                            </Pagination.Item>
                            <Pagination.Item onClick={() => handleChangePage(5)} className={cx('pagination-item')}>
                                {5}
                            </Pagination.Item>
                        </Pagination>
                    </Col>
                </Row>
            ) : (
                ''
            )}
        </Container>
    );
}

export default GridItems;
