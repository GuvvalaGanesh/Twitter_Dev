import { execute } from '../../src/services/dummy-service.js';
import { helper } from '../../src/services/helper-service.js';
jest.mock('../../src/services/helper-service.js');

test('sport', () => {
    // Implementation of test
    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Playing Cricket');
});

test('sport', () => {
    // Implementation of test
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Playing Hockey');
});