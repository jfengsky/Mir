import { useState, useEffect } from 'react'
import { Layout, Row, Col, Switch } from "antd";
import {
    DingtalkOutlined
} from "@ant-design/icons";

import { inject, observer } from "mobx-react";
import MainMenu from './MainMenu'
import Style from "../../assets/css/admin.less"

const { Header, Content } = Layout;
const Head = inject("store")(observer(props => {

    const {
        store: {
            GlobalStore: {
                isEn,
                changeLang
            }
        }
    } = props

    const [isSwitchCheck, setIsSwitchCheck] = useState(isEn)

    useEffect(() => {
        setIsSwitchCheck(isEn)
    }, [isEn])

    const switchChange = isBool => {
        changeLang(isBool)
    }

    return (
        <Header className={Style.header}>
            <Row>
                <Col flex="auto">
                    <div className={Style.headerLogo}><DingtalkOutlined /></div>
                </Col>
                <Col flex="100px">
                    <div style={{ float: 'right' }}>
                        <Switch
                            checkedChildren="english"
                            unCheckedChildren="中文"
                            checked={isSwitchCheck}
                            onClick={switchChange}
                        />
                    </div>
                </Col>
            </Row>
        </Header>
    );
}));

const AdminLayout = (props) => {
    return (
        <Layout className={Style.main}>
            <Head />
            <Layout>
                <MainMenu />
                <Content className={Style.content}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
