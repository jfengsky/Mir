// import { observable, makeObservable, action, runInAction } from 'mobx';
import { observable } from 'mobx';
import { UserOutlined,  SettingOutlined, GitlabOutlined, SkinOutlined} from "@ant-design/icons";
export class GlobalStore {

    living = [{
        key: '020101',
        name: 'living list',
        cnname: '列表',
        path: '/admin/living/list',
        cmp: 'livinglist',
        exact: true,
        icon: <UserOutlined />
    }]

    weapons = [{
        key: '020201',
        name: 'weapons list',
        cnname: '武器列表',
        path: '/admin/weapons/list',
        cmp: 'weaponslist',
        exact: true,
        icon: <UserOutlined />
    }]

    @observable adminList = [{
        key: '02',
        name: 'admin',
        cnname: '后台管理',
        path: '/admin',
        cmp: 'admin',
        exact: true,
        icon: <SettingOutlined />
    },{
        key: '0201',
        name: 'living',
        cnname: '生物',
        path: '/admin/living',
        cmp: 'living',
        exact: true,
        icon: <GitlabOutlined />,
        children: this.living
    }, {
        key: '0202',
        name: 'weapons',
        cnname: '武器',
        path: '/admin/weapons',
        cmp: 'weapons',
        exact: true,
        icon: <SkinOutlined />,
        children: this.weapons
    }]

    @observable routerlist = [...this.adminList, ...this.living, ...this.weapons , {
        key: '01',
        name: 'home',
        cnname: '首页',
        path: '/',
        cmp: 'home',
        exact: true,
        icon: <UserOutlined />
    }];
}