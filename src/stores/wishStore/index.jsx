
// * MOBX
import { makeAutoObservable } from "mobx";

// * FIREBASE 
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from "firebase/firestore"; 

class WishStoreImpl {
    wishes = [];
    db = getFirestore();

    constructor() {
        makeAutoObservable(this);
    }

    async addWish(title) {
        const item = {
            title: title,
            completed: false
        };

        const docRef = await addDoc(collection(this.db, "wishes"), item);
        this.wishes.push({ ...item, id: docRef.id });
    }

    async toggleWish(id) {
        const index = this.wishes.findIndex(item => item.id === id);
        if (index > -1) {
            const urlRef = doc(this.db, "wishes", this.wishes[index].id);
            await updateDoc(urlRef, { completed: !this.wishes[index].completed });
            this.wishes[index].completed = !this.wishes[index].completed;
        }
    }

    async deleteWish(id) {
        const index = this.wishes.findIndex(item => item.id === id);
        if (index > -1) {
            await deleteDoc(doc(this.db, "wishes", this.wishes[index].id));
            this.wishes.splice(index, 1);
        }
    }

    get status() {
        let completed = 0, remaining = 0;
        this.wishes.forEach(wish => {
            if (wish.completed) {
                completed++;
            }
            else {
                remaining++;
            }
        });
        return { completed, remaining };
    }

    async fetch() {
        this.wishes = [];
        let querySnapshot = await getDocs(collection(this.db, "wishes"));
        querySnapshot.forEach((doc) => {
            this.wishes.push({ ...doc.data(), id: doc.id })
        });
    }
}

export const WishStore = new WishStoreImpl();