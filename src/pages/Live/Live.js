import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import ListQuestion from './ListQuestion';
const cx = classNames.bind(styles);


function Live() {
    return <div className={cx('wrapper')}>
    <div className={cx('inner')}>
        <div className={cx('container')}>
            <h2 className={cx('page-title')}>List question</h2>
            <ListQuestion/>
        </div>
    </div>
</div>
}

export default Live;
