import React, { Fragment } from 'react';
import { Menu, Dropdown, Button, Row, Col } from 'antd';

const Layout = ({ children }) => {
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const menu = (
    <Menu>
      <Menu.Item>
        <a href='https://www.antgroup.com'>Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href='https://www.antgroup.com'>Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href='https://www.aliyun.com'>Profile</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/login';
        }}
      >
        <li>Logout</li>
      </Menu.Item>
    </Menu>
  );

  return (
    <Fragment>
      {/* header */}
      <div className='header box-shadow1'>
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className='d-flex justify-content-between align-items-center'>
              <h1>CarRentalApp</h1>

              <Dropdown overlay={menu} placement='bottomCenter'>
                <Button>{loggedUser && loggedUser.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>

      {/* main content */}
      <div className='content'>{children}</div>
    </Fragment>
  );
};

export default Layout;
