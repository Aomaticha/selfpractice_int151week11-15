//15.11.2025 
//prompt 1 : ทำตัว Frontend ของระบบ Fruit Manager ให้เชื่อมต่อกับ Backend REST API

const API_URL = "http://localhost:3000/api/fruits";

const fruitList = document.getElementById("fruitList");
const fruitNameInput = document.getElementById("fruitName");
const addBtn = document.getElementById("addBtn");

//prompt 2 : โหลดรายการผลไม้จาก server  แสดงใน <ul> (Read)
async function loadFruits() {
  const res = await fetch(API_URL);
  const fruits = await res.json();

  fruitList.innerHTML = "";

//prompt 3 : ลบผลไม้ ให้ ส่ง DELETE ไป server แล้วโหลด list ใหม่ (Delete)
  fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit.name;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = async () => {
      await fetch(`${API_URL}/${fruit.id}`, { method: "DELETE" });
      loadFruits();
    };

    li.appendChild(delBtn);
    fruitList.appendChild(li);
  });
}

loadFruits();

//prompt 4 : เพิ่มผลไม้ใหม่ ให้ ส่ง POST ไป server แล้วโหลด list ใหม่ (Create)
addBtn.addEventListener("click", async () => {
  const name = fruitNameInput.value.trim();
  if (!name) return alert("Enter a fruit name!");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  fruitNameInput.value = "";
  loadFruits();
});
