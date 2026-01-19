const API_URL = "http://127.0.0.1:8000";

// LOGIN
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.access_token);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login");
    }
}

// LOAD TASKS
async function loadTasks() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/tasks/`, {
        headers: { "Authorization": `Bearer ${token}` }
    });

    const tasks = await res.json();
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task" + (task.completed ? " done" : "");
        div.innerHTML = `
            ${task.title}
            <button onclick="completeTask(${task.id})">✓</button>
            <button onclick="deleteTask(${task.id})">🗑️</button>
        `;
        list.appendChild(div);
    });
}

// ADD TASK
async function addTask() {
    const title = document.getElementById("taskInput").value;
    const token = localStorage.getItem("token");

    await fetch(`${API_URL}/tasks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ title })
    });

    document.getElementById("taskInput").value = "";
    loadTasks();
}

// COMPLETE TASK
async function completeTask(id) {
    const token = localStorage.getItem("token");

    await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: { "Authorization": `Bearer ${token}` }
    });

    loadTasks();
}

// DELETE TASK
async function deleteTask(id) {
    const token = localStorage.getItem("token");

    await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
    });

    loadTasks();
}
