import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button';
import Image from '~/assets/images/3969830.jpg';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <h2 className={cx('page-title')}>Optimizing the learning path suitable for first-year students of the Faculty of Information Technology</h2>
                    <h4 className={cx('tilte1')}>Use data gathered from entrance and exit tests, questions about learners' interests and goals, to identify what skills and knowledge students have and need to improve.</h4>

                    <Button className={cx('button_test')} to="/live">Take the test!</Button>

                    <img className={cx('image_main')} src={Image} alt='Anh'/>
                </div>
            </div>
        </div>
    );
}

export default Home;
