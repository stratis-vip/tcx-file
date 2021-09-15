const path = require('path')
const TcxFile = require('../classes/tcx-file')

describe('tcx file throw an error', ()=>{
   test('file is null', ()=>{
       expect(()=>new TcxFile()).toThrow()
   })

    test('file is not exists',  () => {
        expect(() =>  new TcxFile('file')).toThrow()
    })

    test('file is not correct',  () => {
        expect(() =>  new TcxFile(path.join(__dirname, '/testError.tcx'))).toThrow()
    })
})

describe('file is correct', ()=>{
    test('file is correct',  () => {
        const local = new TcxFile(path.join(__dirname, '/testData.tcx'))
        expect(local).not.toBeNull()
        expect(local.activities).not.toBeNull()
        expect(local.count).toBe(1)
    })
})
