//6.10.2025
//prompt 1 : Synchronous & Asynchronous
//sync
console.log('Hello')
console.log('Aticha')
//async
console.log('Hello')
setTimeout(() => console.log('Aticha..., '), 5000)
console.log('Bye Bye')

console.log("Start race.");
setTimeout(() => {
    console.log("Finish Line!"); 
}, 100); 
console.log("Runner 1 is past.");
console.log("Runner 2 is past.");
console.log("End race.");


//prompt 2 : async & await
function waitOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(); 
    }, 1000); 
  });
}
async function showSteps() {
  console.log("Step 1: Start.");
  console.log("...Waiting 1 second...");
  await waitOneSecond(); 
  console.log("Step 2: After waiting 1 second.");
  console.log("Step 3: Finish.");
}



//8.10.2025
//prompt 1 : เขียนโค้ด 2 ฟังก์ชัน ที่ทำงานร่วมกันเพื่อจำลองการนับเวลาแบบมีลำดับขั้นตอน: 
//ฟังก์ชัน delay(ms) (สร้าง Promise): สร้าง Promise ขึ้นมา ใช้ setTimeout เพื่อหน่วงเวลาตามที่กำหนด (ms) เมื่อถึงเวลาแล้ว ให้เรียก resolve() เพื่อบอกว่าการหน่วงเวลาเสร็จสิ้น
//ฟังก์ชัน runSequence() (ใช้ async/await): ประกาศเป็นฟังก์ชัน async ใช้คีย์เวิร์ด await เพื่อเรียกใช้ delay() สองครั้งติดกัน: รอ 1000 มิลลิวินาที (1 วินาที) และ รอ 500 มิลลิวินาที (0.5 วินาที)
//ใช้ console.log() เพื่อแสดงผลว่าโค้ดกำลังหยุดรอ และเมื่อโค้ดทำงานต่อแล้ว เพื่อพิสูจน์ว่าลำดับการทำงานเป็นไปตามที่เขียนไว้
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(); 
    }, ms);
  });
}
async function runSequence() {
  console.log("Start Sequence.");
  console.log("Step 1: Waiting for 1000ms...");
  await delay(1000); 
  console.log("Step 1: Done.");
  console.log("Step 2: Waiting for 500ms...");
  await delay(500); 
  console.log("Step 2: Done.");
  console.log("End Sequence.");
}


//prompt 2 เขียน async/await และ Promise ใน JavaScript เพื่อจำลองสถานการณ์การตรวจสอบสินค้าคงคลัง (Inventory) ของร้านค้าออนไลน์
// โดยมีฟังก์ชัน checkInventory(productName) (ผู้ผลิต Promise)
// และฟังก์ชัน  orderProduct(productName) (ผู้ใช้ async/await)
function checkInventory(productName) {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
        if(productName === "Laptop"){
            resolve("Laptop is IN STOCK")
        }else{
            reject(`Product is OUT OF STOCK: ${productName}`)
        }
    },500);
  })
}
async function orderProduct(productName) {
  console.log(`Checking status for ${productName}...`);
  try{
    const result = await checkInventory(productName);
    console.log("Status:",result);
  } catch (error) {
    console.error("Error found:", error);
  }
  console.log("Finished.");
}


//10.10.2025
//prompt 1 (โจทย์ในห้อง)
document.addEventListener('DOMContentLoaded', () => {
  const quoteList = document.querySelector('#quoteList');
  if (!quoteList) return;

  quote.loadQuotes()
    .then(quotes => {
      let html = '';
      for (const q of quotes) {
        html += `
<div class="quote-card" data-id="${q.id}">
  <p>${q.content}</p>
  <p class="author">${q.author}</p>
  <div class="actions">
    <button class="edit" data-id="${q.id}">Edit</button>
    <button class="delete" data-id="${q.id}">Delete</button>
  </div>
</div>
        `;
      }
      quoteList.innerHTML = html;
    })
    .catch(() => {
      quoteList.innerHTML = '<p class="error">can not get quote</p>';
    });
});
