console.log("hello world")
let world="-1";
console.log(`hello ${world}`)
console.log(typeof(world));
var a;
var i=1;
var s="";
 for(i=0;i<=5;i++)
 {
     s+=i+" ";
 }
 console.log(s);
 var a;
 console.log(typeof(a));
    //hoisting
    function hoistDemo()
    {
        console.log(i);
        var i=10;
    }
    function print(element)
    {
        console.log(element);
    }
    arr=new Array(1,2,3,4,5,6,9,6,7);
    console.log(arr)
    student={};
    console.log(typeof(student));
    let user = {
        name: "John",
        age: 30,
        sex: "male",
        "2":"two"
      };
     // console.log(user["2"]);
     /* for(var prop in user){
          console.log(user[prop]);
      }*/
      var keys=Object.getOwnPropertyNames(user);
      console.log(keys);
      a=[1,2,3,4,5];
      console.log(a);
      for(var i in a)
      {
          console.log(a[i])
      }
      obj={};
      obj.key1 = "value1";
      console.log(obj.key1);
      function abc(arr) {
        var arr2;
        for(i in arr) {
            arr2[i] = i;
        }
        return arr2;
    }
    
    var arr = [12, 56, 48, "hello"];
    console.log(abc(arr)[1]);
    