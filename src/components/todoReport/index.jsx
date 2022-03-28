import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { observer } from 'mobx-react';
import moment from 'moment';

// * STYLES
import { Wrapper, Block, Title, Input, Button, Text, Empty, Divider } from './style';

// * STORES
import { TodoStore } from '../../stores/todoStore';

export const TodoReport = observer(() => {

    // * VARIABLES START

    const history = useHistory();
    const {
        completed,
        remaining,
        deleted,
        rescheduled,
        total 
    } = TodoStore.status;

    // * VARIABLES END

    useEffect(() => {
        Promise.all([
            TodoStore.fetchAll(),
            TodoStore.fetchAllDeleted(),
            TodoStore.fetchAllRescheduled()
        ]);
    }, []);
    console.log(deleted, rescheduled, total);

    return (
        <Wrapper className="dashboard">
            <Block className="block" spaceBetween center>
                <Title>Todos Report</Title>
                <Button transparent width="20" height="20" onClick={() => history.goBack()} style={{ margin: '0' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                    </svg>
                </Button>
            </Block>
            <Block className="block" column container style={{ marginTop: '12px' }}>
                <Block className="block" spaceBetween center>
                    <Text>Completed</Text>
                    <Text>{completed}</Text>
                </Block>
                <Block className="block" spaceBetween center>
                    <Text>Remaining</Text>
                    <Text>{remaining}</Text>
                </Block>
                <Block className="block" spaceBetween center>
                    <Text>Rescheduled</Text>
                    <Text>{rescheduled}</Text>
                </Block>
                <Block className="block" spaceBetween center>
                    <Text>Deleted</Text>
                    <Text>{deleted}</Text>
                </Block>
                <Divider />
                <Block className="block" spaceBetween center>
                    <Text>Total</Text>
                    <Text>{total}</Text>
                </Block>
            </Block>
        </Wrapper>
    );
});