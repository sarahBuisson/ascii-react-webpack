import Mower from './Mower';
import Event from './Event';
import uuid from 'uuid';
import {Color, Mark, Status} from './enum'

let mowers = [];

createMower(Mark.Xebia, Color.Purple, 2019);
export function createMower(mark, color, year, status, history) {


    let mower = new Mower(uuid(), mark, color, year, status, history);
    mowers.push(mower);
    return mower
}


export function listMowers() {
    return mowers;
}

export function clear() {
    mowers = [];
    return mowers;
}

function addEventMover(mower, event) {
    mower.history.push(event)

}

function createEvent(status, userName, date = new Date()) {
    return new Event(date, status, userName)
}


export function loanMower(mower, userName) {
    mower.status = Status.LOANED;
    addEventMover(mower, createEvent(Status.LOANED, userName, new Date()));
}


export function giveBackMower(mower) {
    mower.status = Status.AVAILABLE;

    addEventMover(mower, createEvent(Status.AVAILABLE, null, new Date()));
}


export function findMowerWithColor(color) {
    return mowers.find((a) => {
        return a.color == color;
    })

}

export function findMowersLoaned(start = null, end = null) {
    return mowers.filter((a) => {
        return a.status == Status.LOANED;
    })

}

function init(fileName) {


}

export function sum(a, b) {
    return a + b;
}
