describe('functions', () => {
    describe('How to declare them', () => {
        it('type Types', () => {
            // anon function

            // named Funcitons

            function subtract(a: number, b: number): number {
                return a - b;
            }
        });

        it('type types', () => {
            expect(subtract(2, 2)).toBe(0);
            // Anonymous Functions
            const add = (a: number, b: number) => a + b; // C# Lambda, in JS/TS "Arrow Functions"
            const multiply = function (a: number, b: number): number { // old skool anonymous function
                return a * b;
            }
            // Named Functions
            function subtract(a: number, b: number): number {
                return a - b;
            }
            expect(add(2, 2)).toBe(4);
            expect(multiply(2, 3)).toBe(6);
        });

        it('a bit more about arrow functions', () => {
            // an arrow function that takes no arguments:
            const doIt = () => console.log('Doing it.');
            doIt();
            // an arrow function that has to do more than one thing.
            const logIt = (thing: { message: string }) => {
                console.log('Fixing to run yer function');
                console.log(`Here's the message ${thing.message}`);
                return true; // when you have a block, you have to use the 'return' keyword to return something.
            }
            // an arrow function that just returns the result of an expression
            const changeIt = (what: string) => what.toUpperCase().trim();
            expect(changeIt(' hello    ')).toBe('HELLO');
        });

        describe('higher-order functions (HOF)', () => {
        });

        describe('array methods', () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            it('to visit each element of an array', () => {
                numbers.forEach((val, indx, coll) => console.log({ val, indx, coll }));

            });
        });


    });

});

