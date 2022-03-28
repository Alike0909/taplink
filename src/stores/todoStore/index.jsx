// * MOBX
import { makeAutoObservable } from "mobx";

// * MOMENT
import moment from 'moment';

// * FIREBASE 
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from "firebase/firestore";
import { query, where, limit, orderBy } from "firebase/firestore";  
import axios from 'axios';

class TodoStoreImpl {
    db = getFirestore();
    todos;
    todos_note;
    todos_deleted;
    todos_rescheduled;
    todos_asana;
    currentDate;

    constructor() {
        this.todos = [];
        this.todos_note = [];
        this.todos_deleted = [];
        this.todos_rescheduled = [];
        this.todos_asana = [];
        this.currentDate = moment();
        makeAutoObservable(this);
    }

    // * FUNCTIONS

    async addTodo({ value, date }) {
        const item = {
            title: value,
            date: date.format('YYYY-MM-DD') || moment().format('YYYY-MM-DD'),
            completed: false
        };

        const docRef = await addDoc(collection(this.db, "todos"), item);
        date.format('YYYY-MM-DD') === this.currentDate.format('YYYY-MM-DD') && this.todos.push({ ...item, id: docRef.id });
    }

    async toggleTodo(id) {
        const index = this.todos.findIndex(item => item.id === id);
        if (index > -1) {
            const urlRef = doc(this.db, "todos", this.todos[index].id);
            await updateDoc(urlRef, { completed: !this.todos[index].completed });
            this.todos[index].completed = !this.todos[index].completed;
        }
    }

    async deleteTodo(id) {
        const index = this.todos.findIndex(item => item.id === id);
        if (index > -1) {
            Promise.all([
                addDoc(collection(this.db, "todos_deleted"), this.todos[index]),
                deleteDoc(doc(this.db, "todos", this.todos[index].id))
            ]);
            this.todos.splice(index, 1);
        }
    }

    async reschedule(id) {
        const index = this.todos.findIndex(item => item.id === id);
        if (index > -1) {
            Promise.all([
                addDoc(collection(this.db, "todos_rescheduled"), this.todos[index]),
                updateDoc(doc(this.db, "todos", this.todos[index].id), { date: this.currentDate.clone().add(1, 'days').format('YYYY-MM-DD'), origin_date: this.currentDate.format('YYYY-MM-DD') })
            ]);
            this.todos.splice(index, 1);
        }
    }

    async createNote() {
        if (this.todos_note.length === 0) {
            const docRef = await addDoc(collection(this.db, "todos_note"), { date: this.currentDate.format('YYYY-MM-DD'), text: "" });
            this.todos_note.push({ date: this.currentDate.format('YYYY-MM-DD'), text: "", id: docRef.id });
            return true;
        }
        return true;
    }

    async editNote(value) {
        this.todos_note[0].text = value;
        const urlRef = doc(this.db, "todos_note", this.todos_note[0].id);
        await updateDoc(urlRef, { text: value });
    }

    // * FUNCTIONS

    // * FETCH

    async fetch() {
        this.todos = [];
        const q = query(collection(this.db, "todos"), where("date", "==", this.currentDate.format("YYYY-MM-DD")));
        let querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            this.todos.push({ ...doc.data(), id: doc.id });
        });
    }

    async fetchAsana() {
        const response = await axios.get(`https://app.asana.com/api/1.0/tasks?assignee=me&opt_fields=due_on,name,completed,assignee_status&due_on=${this.currentDate.format('YYYY-MM-DD')}&limit=100&workspace=${process.env.REACT_APP_ASANA_WORKSPACE}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_ASANA_TOKEN}`
            }
        });
        const { data } = response.data;
        this.todos_asana = [];
        data.forEach((item) => moment(item.due_on).format('YYYY-MM-DD') === this.currentDate.format('YYYY-MM-DD') && this.todos_asana.push(item));
    }

    async fetchNote() {
        this.todos_note = [];
        const q = query(collection(this.db, "todos_note"), where("date", "==", this.currentDate.format("YYYY-MM-DD")), limit(1));
        let querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            this.todos_note.push({ ...doc.data(), id: doc.id });
        });
    }

    async fetchDeleted() {
        this.todos_deleted = [];
        const q = query(collection(this.db, "todos_deleted"), where("date", "==", this.currentDate.format("YYYY-MM-DD")));
        let querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            this.todos_deleted.push({ ...doc.data(), id: doc.id });
        });
    }

    async fetchRescheduled() {
        this.todos_rescheduled = [];
        const q = query(collection(this.db, "todos_rescheduled"), where("date", "==", this.currentDate.format("YYYY-MM-DD")));
        let querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            this.todos_rescheduled.push({ ...doc.data(), id: doc.id });
        });
    }

    async fetchAll() {
        this.todos = [];
        let querySnapshot = await getDocs(collection(this.db, "todos"));
        querySnapshot.forEach((doc) => {
            this.todos.push({ ...doc.data(), id: doc.id });
        });
    }

    async fetchAllDeleted() {
        this.todos_deleted = [];
        let querySnapshot = await getDocs(collection(this.db, "todos_deleted"));
        querySnapshot.forEach((doc) => {
            this.todos_deleted.push({ ...doc.data(), id: doc.id });
        });
    }

    async fetchAllRescheduled() {
        this.todos_rescheduled = [];
        let querySnapshot = await getDocs(collection(this.db, "todos_rescheduled"));
        querySnapshot.forEach((doc) => {
            this.todos_rescheduled.push({ ...doc.data(), id: doc.id });
        });
    }

    // * FETCH
    
    get status() {
        let total = 0, completed = 0, remaining = 0;
        this.todos.forEach(todo => {
            if (todo.completed) {
                completed++;
            }
            else {
                remaining++;
            }
            total++;
        });

        let deleted = this.todos_deleted.length;
        let rescheduled = this.todos_rescheduled.length;
        total = total + rescheduled;

        return { 
            completed, 
            remaining, 
            deleted, 
            rescheduled,
            total 
        };
    }

    get date() {
        return this.currentDate.format("YYYY-MM-DD");
    }
}

export const TodoStore = new TodoStoreImpl();