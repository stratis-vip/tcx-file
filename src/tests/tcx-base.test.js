const TcxBase = require('../classes/tcx-base')

const obj = {a:1}

test('TcxBase with empty obj throw error', ()=>{
    expect(()=>new TcxBase()).toThrow()
    expect(()=>new TcxBase(obj)).not.toThrow()
})

test('ValueOf return the obj', ()=>{
    const local = new TcxBase(obj)
    expect(local.valueOf()).toStrictEqual(obj)
})
