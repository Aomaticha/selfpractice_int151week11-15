//prompt 1 : สร้างหน้าเว็บ Frontend ด้วยภาษา HTML + JavaScript เพื่อเชื่อมต่อ Backend REST API สำหรับจัดการรายการหนังสือ (Book Manager)
//รายละเอียดที่ต้องทำ ระบบต้องสามารถทำงานได้ ครบ 4 ฟังก์ชัน CRUD ได้แก่
//Create: เพิ่มหนังสือ
//Read: โหลดรายการหนังสือทั้งหมด
//Delete: ลบหนังสือตาม ID

const API_URL = "http://localhost:3000/api/books";

const Readbook = document.getElementById("bookList");
const Addbook = document.getElementById("addBtn");
const Bookname = document.getElementById("bookTitle");

async function loadbook() {
    const result = await fetch(API_URL);
    const books = await result.json();

    Readbook.innerHTML = "";

    books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book.title;

        const Delete = document.createElement("button");
        Delete.textContent = "Delete";

        Delete.onclick = async () => {
            await fetch(`${API_URL}/${book.id}`, { method: "DELETE" });
            loadbook();
        };

        li.appendChild(Delete);
        Readbook.appendChild(li);
    });
}

loadbook();

Addbook.addEventListener("click", async () => {
    const name = Bookname.value.trim();
    if (!name) return alert("Enter a book name!");

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: name })   
    });

    Bookname.value = "";
    loadbook();
});


//prompt 2 : Frontend CRUD ระบบ “Movie Manager”(index2.html) เชื่อมต่อ REST API สร้าง หน้าเว็บ Frontend ด้วย HTML + JS (Vanilla) เพื่อจัดการรายการหนัง (Movie Manager)
//ระบบต้องสามารถทำงานได้ ครบ 3 ฟังก์ชัน CRUD ได้แก่
//Create: เพิ่มหนังใหม่
//Read: โหลดรายการหนังทั้งหมด
//Delete: ลบหนังตาม ID

const API_URLL = "http://localhost:3000/api/movies";

const movieList = document.getElementById("movieList");
const movieTitleInput = document.getElementById("movieTitle");
const addBtn = document.getElementById("addBtn");

async function loadmovie() {
    const res = await fetch(API_URLL);
    const movie = await res.json();

    movieList.innerHTML = "";
     movie.forEach(movies => {
        const li =document.createElement("li");
        li.textContent = movies.title;

        const deletee = document.createElement("button");
        deletee.textContent = "Delete";

        deletee.onclick = async () =>
        {
        await fetch(`${API_URLL}/${movies.id}`,{method: "DELETE"});
        loadmovie();
        };
        li.appendChild(deletee);
        movieList.appendChild(li);
     });
}
    loadmovie();
addBtn.addEventListener("click",async () => {
    const n = movieTitleInput.value.trim();
    if(!n) return alert("enter a movie!");

    await fetch(API_URLL,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: n })
    })
    movieTitleInput.value = "";
    loadmovie();
});