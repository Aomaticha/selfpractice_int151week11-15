//prompt 1 : set date/time
// Help to format reservation period dates (DD/MM/YYYY HH:MM) 
// code ที่เขียนจาก integrated project เพื่อ set วันเวลาให้กับเว็บ
function formatLocalReservationDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString); 
  const datePart = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
  const timePart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return `${datePart}, ${timePart} (${timeZone})`;
}

function formatLocalDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  const datePart = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
  const timePart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(d);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return `${datePart}, ${timePart} (${timeZone})`;
}