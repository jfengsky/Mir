import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { Row, Col, Button, Input, Divider } from "antd";
import AdminLayout from "./AdminLayout";
import Style from "../../assets/css/admin.less";

const { Search } = Input;

const LivingeditContent = inject("store")(
  observer((props) => {
    const {
      store: {
        GlobalStore: { lang },
      },
    } = props;

    const changeSearch = (e) => {
      console.log(e.target.value);
    };

    return (
      <>
        <Row>
          <Col flex="200px">
            <Search
              placeholder={lang.searchText}
              onChange={changeSearch}
              allowClear
            />
          </Col>
          <Col flex="auto"></Col>
          <Col flex="100px" className={Style.alignright}>
            <Button type="primary">{lang.addMenu}</Button>
          </Col>
        </Row>
        <Divider />
      </>
    );
  })
);

const Livingedit = () => {
  return (
    <AdminLayout>
      <LivingeditContent />
    </AdminLayout>
  );
};

export default Livingedit;
