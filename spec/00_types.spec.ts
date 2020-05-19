describe('types in typescript', () => {
    describe('declaring variables and constants', () => {

        it('implicity any', () => {
            // no typescript in this example
            let x;

            x = 'nachos';
            expect(typeof x).toBe('string');

            x = function () { }

            x = ['dog', 'cat', 93];
        });

        it('implicity typing', () => {
            let x = 'tacos';
            x = x.toUpperCase();
            expect(x).toBe('TACOS');

            const y: number | number[] = 3;



        });

        it('has const', () => {
            // const does not allow for reassginment
            const x = 3.1415;

            const favoriteNumbers = [1, 2, 3];
            let ten;
            favoriteNumbers[0] = ten = 10;

            expect(favoriteNumbers).toEqual([ten, ten - 8, 3]);


        });

        it('has var but it is bad and you are a bad person if you use it', () => {
            const x = 5;
        });

        describe('literals', () => {
            it('has string literals', () => {
                const n1 = 'bob';
                const n2 = 'bob';

                expect(n1).toEqual(n2);

            });

        });

        it('has various ways to express numberic literals', () => {
            let age: number;
            age = 23;

            const n2 = 1.2;
            const n3 = 0xff; // base 16 hexi
            const n4 = 0b010101; // base 2 binary
            const n5 = 0o23; // base 8;
            const reallyBigBoi = 12_345_678;

            expect(reallyBigBoi).toBe(12345678);

        });

        describe('arrays and array literals', () => {
            it('has two ways to declare an array', () => {
                type ThingWithLettersAndStuff = string;

                let stuff: (number | ThingWithLettersAndStuff)[];
                stuff = ['dog', 'cat', 'moose', 99];

                let otherStuff: Array<number | string>;
                otherStuff = [1, 2, 3, 'ox'];
            });

            it('has array destructuring and a rest operator', () => {
                const friends = ['a', 'b', 'c', 'd'];

                const [f1, , f3] = friends;

                expect(f1).toBe('a');
                expect(f3).toBe('c');

                const [, second, ...others] = friends;

                expect(second).toBe('b');

                const newFriends = ['1', ...friends, '3'];
                const thinFriends = [];

                expect(newFriends).toEqual(['1', 'a', 'b', 'c', 'd', '3'])

            });

            it('tuples', () => {
                // typed arrays
                const stuff: [string, number, string] = ['cat', 13, 'dog'];

                const first = stuff[0];
                const sec = stuff[1];

                type QuoteMarkRule = [boolean, 'single' | 'double'];

                const myQuoteRule: QuoteMarkRule = [true, 'double'];

                if (myQuoteRule[0]) {
                    console.log(`You are looking for something but only a ${myQuoteRule[1]} item.`)
                }
            });

            describe('a practical example of what you might use a tuple for (but probably would not)', () => {
                it('an oop approach', () => {
                    // string FormatName(string first, string last)
                    interface FormattedName { formattedName: string; numberOfLettersInName: number; }
                    function formatName(first: string, last: string): FormattedName {
                        const formattedName = `${last}, ${first}`
                        return {
                            formattedName,
                            numberOfLettersInName: formattedName.length
                        }
                    }
                    function formatNameCasually(first: string, last: string): FormattedName {
                        const formattedName = `${first} ${last}`;
                        return {
                            formattedName,
                            numberOfLettersInName: formattedName.length
                        }
                    }
                    const result = formatName('Han', 'Solo');
                    expect(result.formattedName).toBe('Solo, Han');
                    expect(result.numberOfLettersInName).toBe(9);
                    // const result2 = formatNameCasually('Luke', 'Skywalker');
                    // expect(result2.formattedName).toBe('Luke Skywalker');
                    const { formattedName: n } = formatNameCasually('Luke', 'Skywalker');
                    expect(n).toBe('Luke Skywalker');
                });
                it('if that wasn\'t confusing enough, here is tuples', () => {
                    function formatName(first: string, last: string): [string, number] {
                        const formattedName = `${last}, ${first}`;
                        return [formattedName, formattedName.length]
                    }
                    const results = formatName('Han', 'Solo');
                    expect(results[0]).toBe('Solo, Han');
                    expect(results[1]).toBe(9);
                    // but wait! We have destructuring
                    const [fullName] = formatName('Luke', 'Skywalker');
                    expect(fullName).toBe('Skywalker, Luke');
                });
            });
        });

        it('has duck typing (aka structural typing)', () => {
            interface MessageHaver { message: string }
            function logMessage(item: MessageHaver) {
                console.log(`At ${new Date().toLocaleTimeString()} you got the message ${item.message}`);
            }
            logMessage({ message: 'Call your mom' });
            const phoneCall = {
                from: 'Jenny',
                number: '867-5309',
                message: 'For a good time...'
            };
            logMessage(phoneCall);
        });


    });
    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        it('to visit each element of an array', () => {
            numbers.forEach((val, indx, coll) => console.log({ val, indx, coll }));
        });
        describe('array methods that return a new array', () => {
            it('can return only methods that pass a predicate', () => {
                const isEven = (n: number): boolean => n % 2 === 0;
                const evens = numbers.filter(isEven); // Where
                expect(evens).toEqual([2, 4, 6, 8]);
            });
            it('convert each item in the array to something new', () => {
                // expect(doubled).toBe([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            });
        });
    });

});