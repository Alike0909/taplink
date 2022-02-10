import { makeAutoObservable } from "mobx";

class WishStoreImpl {
    wishes = [];

    constructor() {
        makeAutoObservable(this);
    }

    addWish(title) {
        const item = {
            id: +Math.random().toFixed(4),
            title: title,
            completed: false
        };
        this.wishes.push(item);
    }

    toggleWish(id) {
        const index = this.wishes.findIndex(item => item.id === id);
        if (index > -1) {
            this.wishes[index].completed = !this.wishes[index].completed;
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
        return { completed, remaining }
    }
}

export const WishStore = new WishStoreImpl();