import { FormatPhone } from './formatPhone';

describe('Test formatPhone()', () => {

    let pipe = new FormatPhone();

    it('expected pipe return unformated phone with phone is minor than 7', () => {
        
        expect(pipe.transform('1234567')).toBe('1234567');

    });

    it('expect pipe return 12345678 with space in 4 position', () => {

        expect(pipe.transform('12345678')).toBe('1234 5678');

    });

    it('expect pipe return 912345678 with space in 5 position', () => {

        expect(pipe.transform('912345678')).toBe('91234 5678');

    });

    it('expect pipe return 1192345678 with space in 4 position and ddd inside parathensis', () => {

        expect(pipe.transform('1192345678')).toBe('(11) 9234 5678');

    });


    it('expect pipe return 11912345678 with space in 5 position and ddd inside parathensis', () => {

        expect(pipe.transform('11912345678')).toBe('(11) 91234 5678');

    });
});
