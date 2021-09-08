import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { Row, Col, Button, Input, Divider } from "antd";
import AdminLayout from "./AdminLayout";
import Style from "../../assets/css/admin.less";

const { Search } = Input;

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Player {
    level = 0;
    minAt = 0;
    maxAt = 0;
}


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

        useEffect(() => {
            const minAtk = 4;
            const maxAtk = 8;

            const minDef = 2;
            const maxDef = 4;

            let minAttack = minAtk - maxDef;
            let maxAttack = maxAtk - minDef;

            let player = new Player();
            console.log(player)

            setInterval(() => {

                console.log(random(minAttack, maxAttack))
            }, 1000)
        }, [])

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
