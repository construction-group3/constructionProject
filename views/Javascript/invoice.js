let clientID = 1;

// get invoice by client id
fetch(`http://localhost:3000/view-invoices/${clientID}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("invoice data");
    // console.log(data);
    // fillTable(data);
  });


  