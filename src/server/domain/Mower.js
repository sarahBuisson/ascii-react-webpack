class Mower {
    constructor(uuid, mark, color, year, status = 'AVAILABLE', history = []) {
        this.uuid = uuid;
        this.mark = mark;
        this.color = color;
        this.year = year;
        this.status = status;
        this.history = history;

    }

};

export default Mower;
