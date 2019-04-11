const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

//returns 201
//inserts the hobbit
describe('hobbits model', () => {
    //note that beforeEach and afterEach run in the context of a describe
    //this will clean the database before each test is run
    //this works with sqlite but for postgres or mysql knex cleaner is needed
    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    describe('insert()', () => {

        test('should insert the provided hobbit', async () => {
            await Hobbits.insert({ name: 'gaffer' });

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1);
        });

        test('should insert the provided hobbit', async () => {
            let hobbit = await Hobbits.insert({ name: 'gaffer' });
            expect(hobbit.name).toBe('gaffer');

            hobbit = await Hobbits.insert({ name: 'sam' });
            expect(hobbit.name).toBe('sam');
        });
    });
});