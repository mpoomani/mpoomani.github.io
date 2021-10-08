console.clear()

function Class(name,attend,absent){
    this._name=name;
    this._attend=attend;
    this._absent=absent;
    this.checkAvailability = function(){
      return this._total - this._attend
    }
  }
  
  let a = new Class('Class A',32, 2)
  let b = new Class('Class B',38, 5)
  let c = new Class('Class C',24, 10)
  
  console.log(a._name)
  console.log(a.checkAvailability())
  a._absent = a._absent + 0
  console.log(a.checkAvailability())
  
  console.log(b._name)
  console.log(b.checkAvailability())
  b._attend += 30
  console.log(b.checkAvailability())
  
  let poomani = [new Class('Class C', 45, 20),new Class('Class D', 48, 30)]
  console.log(poomani[0]._name)
  for(let i=0; i<poomani.length;i++){
    console.log(poomani[i]._name)
  }

