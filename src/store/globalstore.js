// import { observable, makeObservable, action, runInAction } from 'mobx';
import { observable, makeObservable, action } from "mobx";
import {
  UserOutlined,
  SettingOutlined,
  GitlabOutlined,
  SkinOutlined,
  ProfileOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

import lang from './lang'

export class GlobalStore {
  // 初始化
  constructor() {
    // mobx6版本以后 必须得在初始化加makeObservable
    makeObservable(this);
  }
  // 界面是否英文
  @observable isEn = true;
  @action changeLang = (bool) => {
    this.isEn = bool;
    if (bool) {
      this.lang = lang.en
    } else {
      this.lang = lang.zhcn
    }
  };
  @observable lang = lang.en;

  living = [
    {
      key: "020101",
      name: "living list",
      cnname: "列表",
      path: "/admin/living/list",
      cmp: "livinglist",
      exact: true,
      icon: <ProfileOutlined />,
    },
    {
      key: "020102",
      name: "living edit",
      cnname: "编辑",
      path: "/admin/living/edit",
      cmp: "livingedit",
      exact: true,
      icon: <AppstoreAddOutlined />,
    },
  ];

  weapons = [
    {
      key: "020201",
      name: "weapons list",
      cnname: "武器列表",
      path: "/admin/weapons/list",
      cmp: "weaponslist",
      exact: true,
      icon: <UserOutlined />,
    },
  ];

  @observable adminList = [
    {
      key: "02",
      name: "admin",
      cnname: "后台管理",
      path: "/admin",
      cmp: "admin",
      exact: true,
      icon: <SettingOutlined />,
    },
    {
      key: "0201",
      name: "living",
      cnname: "生物",
      path: "/admin/living",
      cmp: "living",
      exact: true,
      icon: <GitlabOutlined />,
      children: this.living,
    },
    {
      key: "0202",
      name: "weapons",
      cnname: "武器",
      path: "/admin/weapons",
      cmp: "weapons",
      exact: true,
      icon: <SkinOutlined />,
      children: this.weapons,
    },
  ];

  @observable routerlist = [
    ...this.adminList,
    ...this.living,
    ...this.weapons,
    {
      key: "01",
      name: "home",
      cnname: "首页",
      path: "/",
      cmp: "home",
      exact: true,
      icon: <UserOutlined />,
    },
  ];
}
