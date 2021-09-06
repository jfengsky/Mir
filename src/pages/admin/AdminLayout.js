import { Layout } from "antd";
import MainMenu from './MainMenu'
import Style from "../../assets/css/admin.less"

const { Header, Content } = Layout;

const Head = () => {
    return (
        <Header className={Style.header}>
            <div>logo</div>
        </Header>
    );
};

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
