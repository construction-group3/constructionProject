const fullName = document.getElementById("fullName");
const statusDescription = document.getElementById("statusDescription");
const rooms = document.getElementById("rooms");
const paid = document.getElementById("paid");
const balance = document.getElementById("balance");

const invoiceForm = document.getElementById("invoiceForm");
let clientIDInput = document.getElementById("clientID");
invoiceForm.addEventListener("submit", (e) => {
  e.preventDefault();

  clientID = clientIDInput.value;
  fetch(`http://localhost:3000/view-invoices/${clientID}`)
    .then((res) => res.json())
    .then((data) => {
      fillTable(data[0]);
    });
});


const fillTable = (invoice ) => {
  fullName.innerText = `${invoice.FirstName} ${invoice.LastName}`;
  statusDescription.innerText = invoice.StatusDescr 
  rooms.innerText = invoice.HouseType
  paid.innerText = invoice.AmountPaidInZAR
  balance.innerText = invoice.BalanceInZAR
};
