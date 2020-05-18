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
                let n1 = 'bob';
                let n2 = "bob";

                expect(n1).toEqual(n2);

            });

        });

    });

});