const todoForm=document.querySelector("#todo-form");
const todoInput=todoForm.querySelector("#todo-form input");
const todoList=document.querySelector("#todo-list");
const TODOS_KEY="todos";

//update 하기 위해 let으로
let toDos=[];
function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
//todo list를 input창에 등록하면 todo list로 그려주는 거 처리하는 function
function paintTodo(newTodo){
    
    const li=document.createElement("li");
    //span 태그에 새로운 할 일 만들고 삭제 버튼 만들고 싶어서 li안에 span태그 만들어 줌.
    const span=document.createElement("span");
    span.innerText=newTodo;
    li.appendChild(span);
    todoList.appendChild(li);
    const btn=document.createElement("button");
    btn.innerText="X";
    li.appendChild(btn);
    btn.addEventListener("click",deleteTodo);
}

//todo list 등록하기 
function handleTodoSubmit(event){
    event.preventDefault();
    console.log(todoInput.value);
    const newTodo=todoInput.value;
    //입력한 후에 입력창 비워주기
    todoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodo);
    saveTodo()
}

//삭제 버튼에 이벤트 핸들러 설정해두기
function deleteTodo(event){
    console.log("삭제");
    console.log(event.target.parentElement);
    const li=event.target.parentElement;
    li.remove();
}

//브라우저의 local storage를 이용하여 데이터 저장하고, paint 하여 painttodo에서는 local storage 에 저장되어있는 데이터를 읽어와서 그려준다. 


todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos=localStorage.getItem(TODOS_KEY);
if(savedTodos !==null){
    const parsedToDos=JSON.parse(savedTodos);
    toDos=parsedToDos;
    parsedToDos.forEach(element => {
    
    });
}