import { capitalizeFirstCharacter } from './capitalizeFirstCharacter';

it('should capitalize first character', () => {
    expect(capitalizeFirstCharacter('test')).toEqual('Test');
});

it('should handle empty input', () => {
    expect(capitalizeFirstCharacter('')).toEqual('');
});

it('should handle all CAPITALIZED input', () => {
    expect(capitalizeFirstCharacter('ALL CAPITALIZED')).toEqual('ALL CAPITALIZED');
});
