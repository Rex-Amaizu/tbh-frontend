import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        height: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
      }}
      className="site-drawer-render-in-current-wrapper"
    >
      <div className="drawer__div">
        <MenuOutlined onClick={showDrawer} />
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        keyboard={true}
        onClose={onClose}
        open={open}
        getContainer={false}
        style={{
          position: 'absolute',
          maxHeight: '100vh',
          overflowX: 'hidden',
          overflowY: 'hidden',
        }}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
