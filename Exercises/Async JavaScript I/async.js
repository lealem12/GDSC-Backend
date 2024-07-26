
const fetchTodo = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json()
        console.log("Data: ", data)
    } catch (err) {
        console.error("ohhhps an error has occured: \n", err)   
    }

}
fetchTodo();



function callbackHell () {
    function callback4 () {
        console.log("This is callback 4")
    }
    function callback3 (callback4) {
        callback4();
    }
    function callback2 (callback3) {
        callback3(callback4);
    }
    function callback1 (callback2) {
        callback2(callback3);
    }
    function callback (callback1) {
        callback1(callback2);
    }
    callback(callback1);
}

callbackHell();



// Q #1 using promises
const fetchData = new Promise((resolve, reject) => {
    resolve(fetch("https://jsonplaceholder.typicode.com/todos/1"));  
});
const processData = (data) => {
    return new Promise((resolve, reject) => {
        resolve(data.json())
    });
};
fetchData
    .then(data => processData(data))
    .then(jsonData => console.log(jsonData))
    .catch(err => console.log(err))






