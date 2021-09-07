import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
// import Style from "../../assets/css/admin.less";

const { SubMenu } = Menu;
const { Sider } = Layout;
const MainMenu = (props) => {
  const {
    store: {
      GlobalStore: { adminList, isEn },
    },
  } = props;

  const { pathname } = window.location;

  const [selectedKeys, setSelectedKeys] = useState([]);

  const [openKeys, setOpenKeys] = useState([]);

  useEffect(() => {
    let tempSelectedKeys = [];
    adminList.some((item) => {
      const { path, key, children } = item;
      if (path === pathname) {
        tempSelectedKeys.push(key);
        return true;
      } else if (children && children.length) {
        return children.some((item) => {
          const { path, key } = item;
          if (path === pathname) {
            tempSelectedKeys.push(key);
            return true;
          }
          return false;
        });
      }
      return false;
    });
    setSelectedKeys(tempSelectedKeys);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedKeys && selectedKeys.length) {
      adminList.some(({ key, children }) => {
        if (children && children.length) {
          return children.some((item) => {
            if (item.key === selectedKeys[0]) {
              setOpenKeys([key]);
              return true;
            }
            return false;
          });
        }
        return false;
      });
    }
  }, [adminList, selectedKeys]);

  const menuClick = (item) => {
    // console.log(item)
  };

  const ticketClick = (data) => {
    const { key } = data;
    setOpenKeys([key]);
  };

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        style={{ height: "100%", borderRight: 0 }}
        onClick={menuClick}
      >
        {adminList.map((item) => {
          const { key, name, children, path, icon, cnname } = item;
          if (children && children.length) {
            return (
              <SubMenu
                key={key}
                icon={icon}
                title={isEn ? name : cnname}
                onTitleClick={ticketClick}
              >
                {!!children &&
                  !!children.length &&
                  children.map((secItem) => {
                    const { key, name, path, icon, cnname } = secItem;
                    return (
                      <Menu.Item key={key} icon={icon}>
                        <Link to={path}>{isEn ? name : cnname}</Link>
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={key} icon={icon}>
              <Link to={path}>{isEn ? name : cnname}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default inject("store")(observer(MainMenu));
