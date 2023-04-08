import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    TestIcon,
    TestActiveIcon,
} from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Collaboration"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="TEST" to={config.routes.live} icon={<TestIcon />} activeIcon={<TestActiveIcon />} />
            </Menu>
{/* 
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
