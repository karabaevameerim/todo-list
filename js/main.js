// !------LocalStorage------
// console.log(localStorage);
// ? setItem 
// localStorage.setItem("name", "Meerim");
// let obj = {
//     city: "Washington",
//     country: "Usa",
// }
// localStorage.setItem("country", JSON.stringify(obj));
// Для отправки данных в localStorage, используется метод setItem, который  принимает два аргумента: 1)название ключа; 2) данные в формате JSON.stringify;

// ? getItem
//  let data1 = localStorage.getItem("name");
//  console.log(data1);

//  let data2 = JSON.parse(localStorage.getItem("country"));
//  console.log(data2);
//  let data3 =JSON.parse(localStorage.getItem("obj"));
//  console.log(data3);

// ? Метод getItem используется для получения данных из localStorage. Принимает один аргумент - ключ.
// ? Данные приходят в формате  JSON.stringify(), поэтому при получении, нужно превести в формат JSON.parse();


// localStorage.removeItem("country");
//  ? removeItem - метод, который удаляет по названию ключа.

// localStorage.clear();
// ? clear - очишает весь localStirage.

// ! ------------------SessitionStorage-------
// localStorage.setItem("example" , "Будет хранится даже если закроем броаузер и закоментируем данный код")

// sessionStorage.setItem("example", "очищает при закрытии вкладки или браузера")









// ?--------------TODO list-----------------
//  let form = document.querySelector("form");
//  let btn = document.querySelector('button')
// let inpTask = document.querySelector("form input");
// let list = document.querySelector("ul");
// //  ? create 
// function createTask(e){
    
//     console.log('fdsa');
//     if(localStorage.getItem("tasks-data") === null){
//         console.log('fdsa');
//         localStorage.setItem("tasks-data", "[]")
//     }
//     // localStorage.setItem('tasks-data' , '[]');
// }
// btn.addEventListener("click", (e)=>{
//     createTask();
// })
// localStorage.clear()
let form = document.querySelector("form");
let inpTask = document.querySelector("form input");
let list = document.querySelector("ul");

// ? create
function createTask() {
  if (localStorage.getItem("tasks-data") === null) {
    localStorage.setItem("tasks-data", "[]");
  }
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  console.log(data);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

let obj = {
    task: inpTask.value
}
let data = JSON.parse(localStorage.getItem("tasks-data"));
    data.push(obj);
    localStorage.setItem("tasks-data", JSON.stringify(data));

  createTask();
});

//  Функция для добавления новых элементов в главный массив.
// function setItemObjTask(task){
//     let data = JSON.parse(localStorage.getItem("tasks-data"));
//     data.push(task);
//     localStorage.setItem(JSON.stringify(data));
// }