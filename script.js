function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");

    // Insert a new row at the beginning of the table (index 0)
    const newRow = table.insertRow(0);

    // Insert cells into the new row
    const cell1 = newRow.insertCell(0); // First cell
    const cell2 = newRow.insertCell(1); // Second cell

    // Set the content for the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
  
}
