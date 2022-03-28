// * MOBX
import { makeAutoObservable } from "mobx";

// * MOMENT
import moment from 'moment';

// * FIREBASE 
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from "firebase/firestore";
import { query, where, limit, orderBy } from "firebase/firestore";

class HabitStoreImpl {
    db = getFirestore();
    habits;

    constructor() {
        this.habits = [];
        makeAutoObservable(this);
    }

    // * FUNCTIONS

    async addValue({id, index, value}) {
        const habit = this.habits.filter(habit => habit.id === id)[0];
        this.habits[this.habits.indexOf(habit)].data[index].current += value;
        await updateDoc(doc(this.db, "habits", id), { data: this.habits[this.habits.indexOf(habit)].data });
    }

    // * FUNCTIONS

    // * FETCH

    async fetchHabit() {
        this.habits = [];
        let querySnapshot = await getDocs(query(collection(this.db, "habits"), orderBy("id")));
        querySnapshot.forEach((doc) => {
            this.habits.push({ ...doc.data(), id: doc.id });
        });
    }

    // * FETCH
}

export const HabitStore = new HabitStoreImpl();