import styles from './Signin.module.scss';
import classNames from 'classnames/bind';

import { FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiLockPasswordFill } from 'react-icons/ri';

import { useEffect, useState } from 'react';

import Toast from 'react-bootstrap/Toast';

import { db, auth } from '../../firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();

const cx = classNames.bind(styles);

function Signin({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                const img = 'https://firebasestorage.googleapis.com/v0/b/chatapp-android17.appspot.com/o/images%2Favtdefault.jpg?alt=media&token=ecc4383d-ccb5-4091-9942-6f09e0a563e6';
                localStorage.setItem('user', JSON.stringify({...user, img: img}));
                setUser(user);
                window.location.reload();
                // ...
            })
            .catch((error) => {
                setShowToast(true);
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const handleLoginGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
                const q = query(collection(db, 'users'), where('email', '==', user.email));
                const querySnapshot = await getDocs(q);
                // console.log(querySnapshot.empty);
                if (querySnapshot.empty) {
                    try {
                        const docRef = await addDoc(collection(db, 'users'), {
                            name: user.displayName,
                            email: user.email,
                            uid: user.uid,
                            image: user.photoURL,
                        });
                        // console.log('Document written with ID: ', docRef.id);
                    } catch (e) {
                        console.error('Error adding document: ', e);
                    }
                }
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-group')}>
                <div className={cx('form-icon')}>
                    <FaUser />
                </div>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className={cx('form-input')}
                    placeholder="Email"
                    required
                />
            </div>
            <div className={cx('form-group')}>
                <div className={cx('form-icon')}>
                    <RiLockPasswordFill />
                </div>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className={cx('form-input')}
                    placeholder="Password"
                    required
                />
            </div>
            <button onClick={handleLogin} className={cx('btn-signin')}>
                Đăng nhập
            </button>
            <div onClick={handleLoginGoogle} className={cx('google')}>
                <FcGoogle className={cx('google-icon')} />
                <button className={cx('btn-google')}>
                    Đăng nhập với Google
                </button>
            </div>
            <Toast show={showToast} onClose={() => setShowToast(false)} bg="danger" delay={2000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Anime Vietsub</strong>
                </Toast.Header>
                <Toast.Body className="text-white">Woohoo, đã xảy ra lỗi!</Toast.Body>
            </Toast>
        </div>
    );
}

export default Signin;
