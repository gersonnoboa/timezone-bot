const { TestScheduler } = require("jest");
const TimeMatcher = require("../../src/classes/time-matcher");
const timeMatcher = new TimeMatcher();

describe('hour matching', () => {
    describe('given full hour without minutes', () => {
        test('matches with AM meridiem', () => {
            expect(timeMatcher.hasTime("4AM")).toBe(true);
        });

        test('matches with PM meridiem', () => {
            expect(timeMatcher.hasTime("4PM")).toBe(true);
        });

        test('matches full hour in the middle of the conversation', () => {
            expect(timeMatcher.hasTime("Pilas hoy a las 4PM")).toBe(true);
        });

        test('matches full hour with space in the middle of the conversation', () => {
            expect(timeMatcher.hasTime("Pilas hoy a las 4 PM")).toBe(true);
        });
    });

    describe('given full hour with minutes', () => {
        test('matches with AM meridiem', () => {
            expect(timeMatcher.hasTime("4:00AM")).toBe(true);
        });

        test('matches with PM meridiem', () => {
            expect(timeMatcher.hasTime("4:00PM")).toBe(true);
        });

        test('matches full hour in the middle of the conversation', () => {
            expect(timeMatcher.hasTime("Pilas hoy a las 4:00PM")).toBe(true);
        });

        test('matches full hour with space in the middle of the conversation', () => {
            expect(timeMatcher.hasTime("Pilas hoy a las 4:00 PM")).toBe(true);
        });
    });
    
    
    describe('given half hour', () => {
        test('matches with AM meridiem', () => {
            expect(timeMatcher.hasTime("4:30AM")).toBe(true);
        });

        test('matches with PM meridiem', () => {
            expect(timeMatcher.hasTime("4:30PM")).toBe(true);
        });

        test('matches full hour in the middle of the conversation', () => {
            expect(timeMatcher.hasTime("Pilas hoy a las 4:30PM")).toBe(true);
        });

        test('matches full hour with space in the middle of the conversation', () => {
            expect(timeMatcher.hasTime("Pilas hoy a las 4:30 PM")).toBe(true);
        });
    });
});

describe('getting the hour', () => {
    describe('given hour with meridiem', () => {
        let timeArray = timeMatcher.getTime("Pilas hoy a las 4:30 PM o 5 PM");

        test('gets the time with meridiem', () => {
            expect(timeArray).toEqual("4:30 PM");
        });

        test('does not get 5PM', () => {
            expect(timeArray).not.toEqual("5 PM");
        });
    });
});
