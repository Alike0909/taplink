import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { observer } from 'mobx-react';
import moment from 'moment';

// * STORES
import { TodoStore } from '../../stores/todoStore';
import { HabitStore } from '../../stores/habitStore';

// * COMPONENTS 
import { TodoItem } from '../../components/todoItem';
import { HabitItem } from '../../components/habitItem';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Swiper, SwiperSlide } from 'swiper/react';

// * STYLES
import { Wrapper, Block, Title, Input, SmallInput, Button, SmallButton, Text, Empty, TextArea, SmallText } from './style';
import { DatePicker, Modal, Collapse } from 'antd';
import 'swiper/css';
import './style.css';

export const TodoList = observer(() => {

    const { Panel } = Collapse;

    // * VARIABLES START

    const history = useHistory();
    const [isEditable, setIsEditable] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [modalData, setModalDData] = useState({
        isVisible: false,
        value: {
            data: []
        }
    });
    const [postData, setPostData] = useState({
        current: ``
    });
    const [postValue, setPostValue] = useState(``);
    const [data, setData] = useState({
        value: ``,
        date: moment()
    });
    const {
        completed,
        remaining,
        total
    } = TodoStore.status;

    // * VARIABLES END

    const addTodo = () => {
        TodoStore.addTodo(data);
        setData(prev => ({
            ...prev,
            value: ``
        }));
    };

    const toggleTodo = (id) => {
        TodoStore.toggleTodo(id);
    };

    const deleteTodo = (id) => {
        TodoStore.deleteTodo(id);
    };

    const changeDay = (value, operation) => {
        TodoStore.currentDate[operation](value, 'days');
        setIsFetching(!isFetching);
    };

    const reschedule = (id) => {
        TodoStore.reschedule(id);
    };

    const editNote = (value) => {
        TodoStore.editNote(value);
    };

    const handleEdit = (state) => {
        if (state) {
            TodoStore.createNote().then((result) => 
                result && setIsEditable(state)
            );
            return;
        }
        setIsEditable(state);
    };

    // * MODAL FUNCTIONS

    const showModal = (value) => {
        setModalDData({
            value: value,
            isVisible: true
        });
    };

    const handleOk = () => {
        setModalDData({
            isVisible: false
        });
    };

    const handleCancel = () => {
        setModalDData({
            isVisible: false
        });
    };

    const addValue = ({ id, index }) => {
        HabitStore.addValue({ id, index, value: Number(postValue) });
        setPostValue(``);
    };

    useEffect(() => Promise.all([
        TodoStore.fetch(),
        TodoStore.fetchDeleted(),
        TodoStore.fetchRescheduled(),
        TodoStore.fetchNote(),
        TodoStore.fetchAsana(),
    ]), [isFetching]);
    
    useEffect(() =>  HabitStore.fetchHabit(), []);

    return (
        <Wrapper className="dashboard">
            <Block className="block" column>
                <Block className="block" spaceBetween center>
                    <Title>Todos</Title>
                    <Button transparent width="20" height="20" onClick={() => history.push('/todo/report')} style={{ margin: '0'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                    </Button>
                </Block>
                <Input
                    placeholder="Enter your todo"
                    type="text"
                    value={data.value}
                    onChange={(event) => 
                        setData(prev => ({
                            ...prev,
                            value: event.target.value 
                        }))
                    }
                />
                <DatePicker 
                    value={data.date} 
                    inputReadOnly 
                    onChange={(value) => 
                        setData(prev => ({
                            ...prev,
                            date: value
                        }))
                    } 
                    style={{ border: 'none' }}/>
                <Button onClick={() => addTodo()}>Add todo</Button>
            </Block>
            <Block className="block" spaceBetween center fixed style={{ marginTop: '24px' }}>
                <Button transparent round width="42" height="24" onClick={() => changeDay(1, 'subtract')} style={{ margin: '0' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Button>
                <Text>{TodoStore.currentDate.format('D MMMM YYYY')}</Text>
                <Button transparent round width="42" height="24" onClick={() => changeDay(1, 'add')} style={{ margin: '0' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Button>
            </Block>
            <Block className="block" column style={{ marginTop: '24px', position: 'relative' }}>
                <Title>Habits</Title>
                <Swiper
                    slidesPerView={2.25}
                    slideToClickedSlide={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >   
                    {
                        HabitStore.habits?.map((item, i) => 
                            <SwiperSlide key={i}>
                                <Block className="block" column>
                                    <HabitItem id={item?.id} title={item?.title} data={item?.data} icon={item?.icon} color={item?.color} valueType={item?.valueType} showModal={() => showModal(item)}/>
                                </Block>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <Modal visible={modalData.isVisible} onOk={handleOk} onCancel={handleCancel} footer={false}>
                    <Title>{modalData.value?.title}</Title>
                    <Collapse accordion ghost>
                        {
                            modalData.value?.data.map((item, i) =>
                                <Panel header={`${i+1}. ${item?.name}`} key={i} showArrow={false} extra={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                }>
                                    <SmallText>Source: {item?.source}</SmallText> <br/>
                                    <SmallText>Progress: {item?.current} / {item?.target} {modalData.value?.valueType}</SmallText>
                                    <Block>
                                        <SmallInput pattern="[0-9]*" inputmode="numeric" value={postValue} onChange={(event) => setPostValue(event.target.value)}/>
                                        <SmallButton 
                                            onClick={() => addValue({
                                                id: modalData.value?.id,
                                                index: i,
                                            })}
                                        >
                                            Add
                                        </SmallButton>
                                    </Block>
                                </Panel>
                            )
                        }
                    </Collapse>
                </Modal>
            </Block>
            <Block className="block" column style={{ marginTop: '24px' }}>
                <Title>Todo List</Title>
                {
                    remaining > 0 ?
                        TodoStore.todos.map((item) =>
                            !item.completed && <TodoItem id={item.id} date={item.date} title={item.title} checked={item.completed} toggleTodo={toggleTodo} deleteTodo={deleteTodo} reschedule={reschedule} />
                        ).reverse()
                        :
                        <Empty />
                }
            </Block>
            <Block className="block" column style={{ marginTop: '24px' }}>
                <Title>Asana</Title>
                {
                    TodoStore.todos_asana.length > 0 ?
                        TodoStore.todos_asana.map((item) =>
                            <TodoItem id={item.gid} title={item.name} checked={item.completed}/>
                        )
                        :
                        <Empty />
                }
            </Block>
            <Block className="block" column style={{ marginTop: '24px' }}>
                <Title>Completed Todos</Title>
                {
                    completed > 0 ?
                        TodoStore.todos.map((item) =>
                            item.completed && <TodoItem id={item.id} title={item.title} checked={item.completed} />
                        ).reverse()
                        :
                        <Empty />
                }
            </Block>
            <Block className="block" column style={{ margin: '48px auto 0', width: '300px', height: '300px', position: 'relative' }}>
                <CircularProgressbar
                    value={completed / total * 100}
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(102, 103, 171, ${completed / total || 0})`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                            // Customize transition animation
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            // Rotate the path
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        trail: {
                            stroke: '#d6d6d6',
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                            // Rotate the trail
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        background: {
                            fill: 'rgb(102, 103, 171)',
                        },
                    }}
                />
                <Text className="progressbar-title">{(completed / total * 100).toFixed(2) || 0}% <br/> completed</Text>
            </Block>
            <Block className="block" column style={{ marginTop: '24px' }}>
                <Block className="block" spaceBetween center>
                    <Title>Note</Title>
                    <Button transparent width="20" height="20" onClick={() => handleEdit(!isEditable)} style={{ margin: '0' }}>
                        {
                            isEditable ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
                                    <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                </svg>
                        }
                    </Button>
                </Block>
                <TextArea disabled={!isEditable} value={TodoStore.todos_note.length > 0 ? TodoStore.todos_note[0].text : ''} onChange={(e) => editNote(e.target.value)}></TextArea>
            </Block>
        </Wrapper>
    );
});