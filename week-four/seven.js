async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function fetchUsers() {
    let users = await fetchData("https://jsonplaceholder.typicode.com/users");
    console.log(users);
}

async function postData(url, payload) {
    let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    let data = await response.json();
    return data;
}

fetchUsers();

postData("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "This is a test post.",
    userId: 1
}).then(data => console.log(data));
