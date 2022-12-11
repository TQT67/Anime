import styles from './Comment.module.scss';
import classNames from 'classnames/bind';

import { getDatabase, ref, child, get, onValue, push, update, remove } from 'firebase/database';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { themeContext } from '../../App';

const cx = classNames.bind(styles);

function Comment() {
    const {theme, setTheme} = useContext(themeContext);
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
    const [listComments, setListComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getComments = async () => {
            const db = getDatabase();
            const connectedRef = ref(db, 'comments');
            onValue(connectedRef, (snapshot) => {
                if (snapshot.val()) {
                    const data = snapshot.val();
                    let listComments = [];
                    for (let id in data) {
                        listComments.push({
                            id,
                            message: data[id].message,
                            avatar: data[id].avatar,
                            username: data[id].username,
                            createdAt: data[id].createdAt,
                            movieId: data[id].movieId,
                            parentId: data[id].parentId,
                            userId: data[id].userId,
                        });
                    }
                    listComments = listComments.filter((item) => item.movieId === id);
                    console.log('listcomment:', listComments);
                    let listCommentsLocal = listComments.filter((item) => item.parentId === '');
                    listCommentsLocal.forEach((ele) => {
                        ele.listChild = [];
                        const listChild = listComments.filter((comment) => comment.parentId === ele.id);
                        ele.listChild = [...listChild];
                    });
                    setListComments(listCommentsLocal);
                } else {
                    console.log('not connected');
                }
            });
        };
        getComments();
    }, [id]);
    return (
        <>
            {listComments &&
                listComments.map((cmt, index) => {
                    return (
                        <div key={index} className={cx('wrapper')}>
                            <div className={cx('image')}>
                                <img src={cmt.avatar} alt="" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>
                                    <span>{cmt.username}</span>
                                </div>
                                <div className={cx('text', {'text-grey': theme === 'dark'})}>
                                    <span>{cmt.message}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

export default Comment;
