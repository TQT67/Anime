import styles from './Watch.module.scss';
import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import GridItems from './../../components/GridItems/GridItems';

import { getDatabase, ref, child, push, update } from 'firebase/database';

import { AiOutlineHeart, AiOutlineBell } from 'react-icons/ai';

import axios from 'axios';
import EpisodeItem from '../../components/EpisodeItem/EpisodeItem';
import Comment from '../../components/Comment/Comment';
import { themeContext } from '../../App';

const cx = classNames.bind(styles);

function Watch() {
    const params = useParams();
    const {theme, setTheme} = useContext(themeContext);
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
    const [anime, setAnime] = useState();
    const [tabEpisodes, setTabEpisodes] = useState(true);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        const getFullAnime = async (id) => {
            const rs = await axios(`https://api.jikan.moe/v4/anime/${id}/full`);
            const data = rs.data.data;
            setAnime(data);
        };
        if (params.id) {
            getFullAnime(params.id);
        }
    }, [params.id]);

    const handleSubmit = (event) => {
        const db = getDatabase();
        event.preventDefault();
        let comment = {
            avatar: '',
            createdAt: '',
            message: '',
            movieId: '',
            parentId: '',
            username: '',
            userId: null,
        };
        console.log(user);
        comment.avatar = user?.photoURL === null ? user?.img : user?.photoURL;
        comment.username = user?.displayName || user?.email;
        const d = new Date().toLocaleString();
        comment.createdAt = d;
        comment.message = commentText;
        comment.movieId = params.id;
        comment.userId = user?.uid;
        let newPostKey = null;
        newPostKey = push(child(ref(db), 'comments')).key;
        const updates = {};
        updates["/comments/" + newPostKey] = comment;
        update(ref(db), updates);
        setCommentText('');
    };

    return (
        <>
            <Container className={cx('container')}>
                <Row className={cx('row')}>
                    <Col className={cx('column')} lg={9} sm={12}>
                        <iframe title="frame-anime" className={cx('iframe-ytb')} src={anime?.trailer?.embed_url} allowFullScreen></iframe>
                        <div className={cx('description')}>
                            <div className={cx('heading')}>
                                <h1 className={cx('title', {'text-grey': theme==='dark'})}>{anime?.title}</h1>
                                <span className={cx('view', {'text-grey': theme==='dark'})}>{anime?.members} lượt xem</span>
                                <div className={cx('btn-action')}>
                                    <div className={cx('like')}>
                                        <span className={cx('like-icon')}>
                                            <AiOutlineHeart />
                                        </span>
                                        <span className={cx('like-title')}>Thích</span>
                                    </div>
                                    <div className={cx('follow')}>
                                        <span className={cx('follow-icon')}>
                                            <AiOutlineBell />
                                        </span>
                                        <span className={cx('follow-title')}>Theo dõi</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('detail')}>
                                <div className={cx('genres', {'text-grey': theme==='dark'})}>Thể loại: {anime?.genres.map((genre) => genre.name).join(', ')}</div>
                                <div className={cx('japan-name', {'text-grey': theme==='dark'})}>Tên khác: {anime?.title_japanese}</div>
                                <div className={cx('detail-episodes', {'text-grey': theme==='dark'})}>Tổng số tập: {anime?.episodes} tập</div>
                            </div>
                            <div className={cx('synopsis')}>
                                <p className={cx('content-synopsis', {'text-grey': theme==='dark'})}>{anime?.synopsis}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className={cx('column')} lg={3} sm={12}>
                        <div className={cx('sidebar', {'border-dark': theme==='dark'})}>
                            <div className={cx('sidebar-header', {'border-dark': theme==='dark'})}>
                                <span onClick={() => setTabEpisodes(true)} className={cx('tab-episodes', { 'header-active': tabEpisodes, 'text-grey': theme === 'dark' })}>
                                    Danh sách tập
                                </span>
                                <span
                                    onClick={() => setTabEpisodes(false)}
                                    className={cx('tab-comments', { 'header-active': !tabEpisodes, 'text-grey': theme==='dark' })}
                                >
                                    Bình luận
                                </span>
                            </div>
                            <div className={cx('sidebar-controls', {'border-dark': theme === 'dark'})}>
                                {tabEpisodes ? (
                                    <span className={cx('num-episodes', {'text-grey': theme === 'dark'})}>Tổng số: {anime?.episodes} video</span>
                                ) : (
                                    <input
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        onFocus={(e) => {
                                            if(!user) {
                                                setCommentText('');
                                            }
                                        }}
                                        onKeyUp={(e) => {
                                            if(e.keyCode === 13 && commentText !== '') {
                                                handleSubmit(e);
                                            }
                                        }}
                                        className={cx('input-comment', {'input-dark': theme==='dark'})}
                                        placeholder="Bình luận của bạn"
                                    />
                                )}
                            </div>
                            <div className={cx('sidebar-content')}>
                                {anime && tabEpisodes
                                    ? [...Array(anime?.episodes)].map((item, index) => {
                                          return (
                                              <EpisodeItem
                                                  key={index}
                                                  episode={index + 1}
                                                  title={anime.title}
                                                  image={anime.images.jpg.large_image_url}
                                              />
                                          );
                                      })
                                    : <Comment/>}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <GridItems type="anime" className={cx('grid-items')} />
            <GridItems type="manga" className={cx('grid-items')} />
        </>
    );
}

export default Watch;
