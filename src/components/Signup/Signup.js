import styles from './Signup.module.scss';
import classNames from 'classnames/bind';

import { SiGmail } from 'react-icons/si';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaSignature } from 'react-icons/fa';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

import Toast from 'react-bootstrap/Toast';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Signup() {
    const [dName, setDName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [showToastSuccess, setShowToastSuccess] = useState(false);

    const toggleShowToast = () => {
        setShowToast(!showToast);
    };

    const toggleShowToastSuccess = () => {
        setShowToastSuccess(!showToastSuccess);
    };

    const handleSignup = () => {
        if (dName !== '' && email !== '' && password !== '' && confirmPassword !== '' && password == confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    const q = query(collection(db, 'users'), where('email', '==', user.email));
                    const querySnapshot = await getDocs(q);
                    // console.log(querySnapshot.empty);
                    if (querySnapshot.empty) {
                        try {
                            const img =
                                'https://firebasestorage.googleapis.com/v0/b/chatapp-android17.appspot.com/o/images%2Favtdefault.jpg?alt=media&token=ecc4383d-ccb5-4091-9942-6f09e0a563e6';
                            const docRef = await addDoc(collection(db, 'users'), {
                                name: dName,
                                email: user.email,
                                uid: user.uid,
                                image: img,
                            });
                            // console.log('Document written with ID: ', docRef.id);
                            localStorage.setItem(
                                'user',
                                JSON.stringify({
                                    ...user,
                                    img: img,
                                }),
                            );
                        } catch (e) {
                            console.error('Error adding document: ', e);
                        }
                    }
                    console.log(user);
                    toggleShowToastSuccess();
                    // ...
                })
                .catch((error) => {
                    toggleShowToast();
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } else {
            toggleShowToast();
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-group')}>
                <div className={cx('form-icon')}>
                    <FaSignature />
                </div>
                <input
                    value={dName}
                    onChange={(e) => setDName(e.target.value)}
                    type="text"
                    className={cx('form-input')}
                    placeholder="Display Name"
                    required
                />
            </div>
            <div className={cx('form-group')}>
                <div className={cx('form-icon')}>
                    <SiGmail />
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
            <div className={cx('form-group')}>
                <div className={cx('form-icon')}>
                    <RiLockPasswordFill />
                </div>
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className={cx('form-input')}
                    placeholder="Confirm Password"
                    required
                />
            </div>
            <button onClick={handleSignup} className={cx('btn-signin')}>
                Đăng ký
            </button>
            <Toast show={showToast} onClose={() => setShowToast(false)} bg="danger" delay={2000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Anime Vietsub</strong>
                </Toast.Header>
                <Toast.Body className="text-white">Woohoo, đã xảy ra lỗi!</Toast.Body>
            </Toast>
            <Toast show={showToastSuccess} onClose={() => setShowToastSuccess(false)} bg="success" delay={2000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Anime Vietsub</strong>
                </Toast.Header>
                <Toast.Body className="text-white">Đăng ký thành công!</Toast.Body>
            </Toast>
        </div>
    );
}

export default Signup;
