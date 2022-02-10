import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

// * STYLES
import { Wrapper, Block, Title, Input, Button, Text, Empty } from './style';

// * CLASSES
import { WishStore } from '../../classes/wishStore';

// * COMPONENTS 
import { WishItem } from '../../components/wishItem';

// * FIREBASE 
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export const WishList = observer(() => {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [value, setValue] = useState(``);

    // * VARIABLES END

    const addWish = () => {
        WishStore.addWish(value);
        setValue(``);
    };

    const toggleWish = (id) => {
        WishStore.toggleWish(id);
    }

    return (
        <Wrapper className="dashboard">
            <Block className="block" column>
                <Title>Wishes</Title>
                <Input 
                    placeholder="Enter your wish" 
                    type="text" 
                    value={value} 
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
                <Button onClick={() => addWish()}>Add wish</Button>
            </Block>
            <Block className="block" column style={{ marginTop: '24px' }}>
                <Title>Wish List</Title>
                {   
                    WishStore.status.remaining > 0 ?
                        WishStore.wishes.map((item, i) =>
                            !item.completed && <WishItem id={item.id} title={item.title} checked={item.completed} toggleWish={toggleWish}/>
                        ).reverse()
                        :
                        <Empty />
                }
            </Block>
            <Block className="block" column style={{ marginTop: '24px' }}>
                <Title>Completed Wishes</Title>
                {   
                    WishStore.status.completed > 0 ?
                        WishStore.wishes.map((item, i) =>
                            item.completed && <WishItem id={item.id} title={item.title} checked={item.completed}/>
                        ).reverse()
                        :
                        <Empty />
                }
            </Block>
        </Wrapper>
    );
});