
 test('route should be changed', ()=>{
     window.history.pushState({}, 'Test page', '/123')
     expect(window.location.href).toEqual('http://localhost/123')
 })
