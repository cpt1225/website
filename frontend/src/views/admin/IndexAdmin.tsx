import { MenuProps } from 'antd';
import { Menu } from 'antd';
import { UserOutlined, HomeOutlined, ReadOutlined, MessageOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import cookie from "react-cookies";

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
  {
    label: '主页', key: '/admin', icon: <HomeOutlined />,
  },
  {
    label: '用户管理', key: '/admin/user', icon: <UserOutlined />,
  },
  {
    label: '文章管理', key: '/admin/article', icon: <ReadOutlined />,
  },
  {
    label: '留言管理', key: '/admin/message', icon: <MessageOutlined />,
  }
];



const IndexAdmin = () => {
  const navigate = useNavigate()
  const [inlineCollapsed, setInlineCollapsed] = useState(false);
  const user = useSelector((state: any) => state.user)

  const screenWidthThreshold = 768;

  useEffect(() => {
    const handleResize = () => {
      setInlineCollapsed(window.innerWidth <= screenWidthThreshold);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  useEffect(() => {
    if (cookie.load('token') === undefined || (user.id !== 0 && user.power === 0)) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw'}}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/admin']}
        onClick={onClick}
        style={{ width: '20vw' }}
        items={items}
        inlineCollapsed={inlineCollapsed}
      />
      <Outlet />
    </div>
  );
}

export default IndexAdmin;