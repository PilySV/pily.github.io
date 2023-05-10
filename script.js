function calcularAhorro() {
    var usdInput = document.getElementById("usdInput");
    var usdValue = parseFloat(usdInput.value);
  
    var ahorro50 = usdValue * 0.5;
    var ahorro30 = usdValue * 0.3;
    var ahorro20 = usdValue * 0.2;
  
    var fechaHora = new Date().toLocaleString();
  
    var savingsTable = document.getElementById("savingsTable");
    var newRow = savingsTable.insertRow(-1);
  
    var dateCell = newRow.insertCell(0);
    var usdCell = newRow.insertCell(1);
    var ahorro50Cell = newRow.insertCell(2);
    var ahorro30Cell = newRow.insertCell(3);
    var ahorro20Cell = newRow.insertCell(4);
    var deleteCell = newRow.insertCell(5);
  
    dateCell.innerHTML = fechaHora;
    usdCell.innerHTML = usdValue.toFixed(2);
    ahorro50Cell.innerHTML = ahorro50.toFixed(2);
    ahorro30Cell.innerHTML = ahorro30.toFixed(2);
    ahorro20Cell.innerHTML = ahorro20.toFixed(2);
    deleteCell.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';
  
    usdInput.value = "";
  }
  
  function eliminarFila(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  