import * as service from './service'
import {Color, Mark, Status} from './enum'

describe("Mathematical test", () => {
    test("should add 2+2", () => {
        expect(service.sum(2, 2)).toBe(4)
    })
})


describe("mower test", () => {

    beforeEach(() => {

        service.clear();
    });
    test("should create a mower", () => {

        service.createMower(Mark.Octo, Color.Blue, 2012)
        expect(service.listMowers().length).toBe(1)

        expect(service.listMowers()[0].uuid).toBeDefined()
    })


    test("should find a mower Red", () => {

        service.createMower(Mark.Octo, Color.Blue, 2012)
        service.createMower(Mark.Octo, Color.Red, 2012)
        service.createMower(Mark.Octo, Color.Yellow, 2012)
        //When//Then
        expect(service.findMowerWithColor(Color.Red).color).toBe(Color.Red)
    })


    test("should loan a mower Red", () => {

        service.createMower(Mark.Octo, Color.Red, 2012)
        //When
        let mower = service.findMowerWithColor(Color.Red);
        service.loanMower(mower, "hubert");
        // Then
        expect(mower.status).toBe(Status.LOANED)
    })


    test("should return a mower", () => {

        service.createMower(Mark.Octo, Color.Red, 2012)
        //When
        let mower = service.findMowerWithColor(Color.Red);
        service.loanMower(mower, "hubert");
        service.giveBackMower(mower);
        // Then
        expect(mower.status).toBe(Status.AVAILABLE)
    })

    test("should list loaned mowers", () => {

        service.createMower(Mark.Octo, Color.Red, 2012)
        //When
        let mower = service.findMowerWithColor(Color.Red);
        let mower2 = service.findMowerWithColor(Color.Blue);
        service.loanMower(mower, "hubert");
        // Then
        expect(service.findMowersLoaned().length).toBe(1)
    })

})
