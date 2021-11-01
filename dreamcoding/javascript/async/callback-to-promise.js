console.log('콜백 지옥 체험!!')
class UserStorage{
    loginUser(id,password){
        //callback 함수를 전달 받지 않고 Promise를 return
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(
                    (id === 'ellie' && password ==='dream') ||
                    (id === 'coder' && password ==='academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not Found'));
                }
            },2000);
        });
       
    }
    //사용자의 역할을 받아오는 함수
    getRoles(user){
        //callback 함수를 전달 받지 않고 Promise를 return
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user==='ellie'){
                    resolve({name:'ellie',role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
}

//로그인 해보기-> 받아온 id를 가지고 ->역할 요청-> 사용자 object 출력
const userStorage=new UserStorage();
const id=prompt('enter your id');
const password=prompt('enter your password');

// userStorage에 loginUser를 호출하여 id,pw 값을 잘 받아와서 Promise api함수를 이용하여 then 이용
// 에러가 발생하는 것은 catch로 잡아주고, resolve함수가 잘 실행되었으면 then으로 계속 실행해준다
userStorage.loginUser(id,password)
    .then(userStorage.getRoles)
    .then(user=>alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);



// userStorage.loginUser(id,password, user=>{
//     userStorage.getRoles(user,(userWithRole)=>{
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//     },
//     error=>{
//         console.log(error);
//     });
// },
// error=>{
//     console.log(error);
// });