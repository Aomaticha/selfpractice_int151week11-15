// prompt 1 : Dialog ทำหน้าที่จัดการกล่องแจ้งเตือนทั้งหมดของหน้าเว็บ ทั้งแบบแจ้งข้อความทั่วไป และแบบยืนยันการยกเลิก (Confirm Dialog)
// code ที่เขียนใน integrated project ของกลุ่มตัวเอง(tt3)
const dialog = document.getElementById("ecors-dialog");
const dialogMessage = document.getElementById("ecors-dialog-message");
const dialogBtn = document.getElementById("ecors-button-dialog");

const confirmDialog = document.getElementById("ecors-confirm-dialog");
const confirmMessage = document.getElementById("ecors-confirm-message");
const confirmCancelBtn = document.getElementById("ecors-button-confirm-cancel");
const confirmKeepBtn = document.getElementById("ecors-button-keep");


function showDialog(message, is403 = false) {
  dialogMessage.textContent = message;
  dialogMessage.dataset.is403 = is403 ? "true" : "false"; 
  dialog.showModal();
}

dialogBtn.addEventListener("click", () => {
  if (dialogMessage.dataset.is403 === "true") {
    window.location.reload();
  } else {
    dialog.close();
  }
});

dialog.addEventListener("cancel", () => {
  if (dialogMessage.dataset.is403 === "true") {
    window.location.reload();
  } else {
    dialog.close();
  }
});

const closeConfirmDialog = () => {
  confirmDialog.close();
  confirmMessage.textContent = ""; 
};


confirmKeepBtn.addEventListener("click", closeConfirmDialog);
confirmDialog.addEventListener("cancel", closeConfirmDialog);


confirmCancelBtn.addEventListener("click", async () => {
  closeConfirmDialog();
  await handleCancel();
});
