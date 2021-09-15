const Activity = require('../classes/activity')

const obj = {a:1}

test('Activity with empty obj throw error', ()=>{
    expect(()=>new Activity()).toThrow()
    expect(()=>new Activity(obj)).not.toThrow()
})

test('ValueOf return the obj', ()=>{
    const local = new Activity(obj)
    expect(local.valueOf()).toStrictEqual(obj)
})
