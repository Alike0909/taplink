import React from 'react'
import SVG from 'react-inlinesvg';

// * STYLES
import { Block, Checkbox, Title, Text, Button, Icon, Progress, Bar } from './style';
import './style.css';

export const HabitItem = (props) => {

    // * PROPS START

    const {
        title,
        data,
        icon,
        color,
        valueType,
        showModal
    } = props;
    
    const total = data.reduce((a, b) => ({ target: a.target + b.target, current: a.current + b.current }));

    // * PROPS END

    return (
        <Block color={color} onClick={() => showModal()}>
            <Icon>
                <SVG src={icon} />
            </Icon>
            <Title>{title}</Title>
            <Progress>
                <Bar width={total.current / total.target * 100}/>
            </Progress>
            <Text>{total.current} {valueType}</Text>
        </Block>
    );
};