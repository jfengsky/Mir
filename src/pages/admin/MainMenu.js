import { useEffect, useState } from 'react'
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
// import Style from "../../assets/css/admin.less";

const { SubMenu } = Menu;
const { Sider } = Layout;
const MainMenu = (props) => {
    const {
        store: {
            GlobalStore: { adminList },
        },
    } = props;

    const { pathname } = window.location;

    const [selectedKeys, setSelectedKeys] = useState([])

    const [openKeys, setOpenKeys] = useState([])

    useEffect(() => {
        let tempSelectedKeys = []
        adminList.some(item => {
            const {path, key, children} = item
            if(path === pathname){
                tempSelectedKeys.push(key)
                return true
            } else if(children && children.length) {
                return children.some(item => {
                    const {path, key} = item
                    if(path === pathname){
                        tempSelectedKeys.push(key)
                        return true
                    }
                    return false
                })
            }
            return false
        })
        setSelectedKeys(tempSelectedKeys)
        // console.log(adminList)
        // console.log(pathname)
    }, [])

    console.log(selectedKeys)

    const subMenuClick = item => {

    }

    return (
        <Sider width={200}>
            <Menu
                mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                style={{ height: "100%", borderRight: 0 }}
            >
                {adminList.map((item) => {
                    const { key, name, children, path, icon } = item;
                    if (children && children.length) {
                        return (
                            <SubMenu key={key} icon={icon} title={name} onClick={()=>{
                                subMenuClick(item)
                            }}>
                                {!!children &&
                                    !!children.length &&
                                    children.map((secItem) => {
                                        const { key, name, path, icon } = secItem;
                                        return (
                                            <Menu.Item key={key} icon={icon}>
                                                <Link to={path}>{name}</Link>
                                            </Menu.Item>
                                        );
                                    })}
                            </SubMenu>
                        );
                    }
                    return <Menu.Item key={key} icon={icon}>
                        <Link to={path}>{name}</Link>
                    </Menu.Item>

                })}
            </Menu>
        </Sider>
    );
};

export default inject("store")(observer(MainMenu));
