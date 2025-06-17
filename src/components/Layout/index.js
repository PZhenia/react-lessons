import { Outlet, NavLink, useLocation } from 'react-router';

import { Layout as AntLayout, Menu, theme, Space, Typography } from 'antd';

import styles from './Layout.module.css';

const { Header, Content, Footer } = AntLayout;

const {Link } = Typography;

export default function Layout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation();

    const menuItems = [
        {
            key: '/',
            label: <NavLink to="/">About</NavLink>,
        },
        {
            key: '/skills',
            label: <NavLink to="/skills">Skills</NavLink>,
        },
        {
            key: '/projects',
            label: <NavLink to="/projects">Projects</NavLink>,
        },
    ];

    return (
        <AntLayout>
            <Header
                className={styles.header}
            >
                <div className={styles.cv}>My CV</div>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    className={styles.menu}
                />
            </Header>

            <Content className={styles.content}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>

            <Footer className={styles.footer}>
                <Space size='large'>
                    <Link href='https://github.com/PZhenia' target='_blank'>
                        github
                    </Link>
                    <Link href='https://www.linkedin.com/in/yevheniia-pravdenko-986b8030b/' target='_blank'>
                        linkedin
                    </Link>
                    <Link href='https://www.instagram.com/pravdenko_zhenia/' target='_blank'>
                        instagram
                    </Link>
                </Space>
            </Footer>
        </AntLayout>
    );
};