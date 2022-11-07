const {
    twoSum,
    fetchProfile,
    removeNumberFromArray,
    addNewProperty,
    sortArray,
    upperCaseWords,
} = require('./sandbox2')

describe('tests twoSum function', () => {
    test('should result aarray of the index positions of the  two numbers that equal to the target', () => {
        expect(twoSum([1, 2, 3], 5)).toEqual([1, 2])
    })

    test('should result a undefined value if there is no pairs of numbers that sum up the target', () => {
        expect(twoSum([1, 2, 3], 9)).toBeUndefined()
        expect(twoSum([1, 2, 3], 9)).toBeFalsy()
    })
})

describe('tests fetchProfile function', () => {
    test('should result eamil value of Shanna@melissa.tv', async () => {
        const data = await fetchProfile()
        expect(data.email).toEqual('Shanna@melissa.tv')
    })

    test('should return city value of Wisokyburgh', async () => {
        const data = await fetchProfile()
        expect(data.address.city).toEqual('Wisokyburgh')
    })

    test('should return company name Deckow-Crist', async () => {
        const data = await fetchProfile()
        expect(data.company.name).toEqual('Deckow-Crist')
    })

    test('should return DOES NOT have a zipcode if zipcode does not exist', async () => {
        const data = await fetchProfile()
        expect(data.address.zipcode).not.toContain('90388-2220')    
    })
})

describe('tests removeNumberFromArray function', () => {
    const arr = [1, 2, 4]

    test('should throw an error if no array was passed', () => {
        expect(() => removeNumberFromArray([],0)).toThrow(Error)
    })

    test('should return new array without the number that was removed', () => {
        expect(removeNumberFromArray(arr, 2)).toEqual([1, 4])
    })

    test('should throw an error if array does not include number to be reomve', () => {
        expect(() => removeNumberFromArray(arr, 5)).toThrow(Error)
    })
})

describe('tests addNewProperty function', () => {
    const obj = {
        firstName: 'kara'
    }
 
    test('should throw an error if missing both property and value', () => {
        expect(() => addNewProperty({})).toThrow(Error)
    })

    test('should return object that includes new key value pair', () => {
        expect(addNewProperty(obj,'lastName', 'ladera')).toEqual({firstName: 'kara', lastName: 'ladera'})
    })
})

describe('tests sortArray function', () => {
    const arr = [2, 3, 1, 4]
    test('should return error message if no array was passed in', () => {
        expect(() => sortArray([]).toThrow(Error))
    })

    test('should return the sorted array', () => {
        expect(sortArray(arr)).toEqual([1, 2, 3, 4])
    })
})

describe('tests upperCaseWords function', () => {
    const arr = ['cat', 'dog']

    test('should throw error if no array was passed', () => {
        expect(() => upperCaseWords([]).toThrow(Error))
    })

    test('should return array with capitalized words', () => {
        expect(upperCaseWords(arr)).toEqual(['CAT', 'DOG'])
    })
})


