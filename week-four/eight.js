function fetchData(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.send();
}

fetchData("https://jsonplaceholder.typicode.com/users", function (users) {
    console.log(users);
});

function postData(url, payload, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.send(JSON.stringify(payload));
}

postData("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "This is a test post.",
    userId: 1
}, function (response) {
    console.log(response);
});
