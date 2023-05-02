//Jquery
$(document).ready(function () {
  let matrixRow = "";

  let matrix = [
    [1, 2, 3, 60],
    [4, 5, 6, 6],
    [7, 8, 9, 6],
  ];

  // Function to Rotate Left 90deg
  const left = function (matrix, callback) {
    // result will stores the rotated matrix
    const result = matrix[0]
      .map((_, i) => matrix.map((_, j) => matrix[j][i])) // Transpose
      .reverse(); //Reverse

    // callback for rebuild matrix
    callback(result);

    return result;
  };

  // Function to Rotate Right 90deg
  const right = function (matrix, callback) {
    // result will stores the roatted matrix
    const result = matrix[0].map((_, i) =>
      matrix.map((_, j) => matrix[j][i]).reverse()
    ); // Transpose -> Reverse
    callback(result);
    return result;
  };

  // function that regenerate inner html for matrix div
  function buildMatrix(matrix) {
    // Clear the old content if any
    matrixRow = "";

    // Creating html for matrix
    matrix.map((row) => {
      let matrixUnit = "";
      row.map((cell) => {
        matrixUnit += `
        <div class="cell">
            ${cell}
        </div> 
        `;
      });

      matrixRow += `
        <div class="row">
            ${matrixUnit}    
        </div>
        `;
    });

    // Changing the old html with new one if old exists
    $("#matrix").html(matrixRow);
  }

  // Building matrix for the first time
  buildMatrix(matrix);

  // Event Listener on left button click
  $("#leftBtn").click(function (e) {
    e.preventDefault();
    $("#matrix").fadeOut();
    setTimeout(() => {
      matrix = left(matrix, buildMatrix);
    }, 400);
    $("#matrix").fadeIn();
  });

  //Event Listener on right button click
  $("#rightBtn").click(function (e) {
    e.preventDefault();
    $("#matrix").fadeOut();
    setTimeout(() => {
      matrix = right(matrix, buildMatrix);
      $("#matrix").fadeIn();
    }, 400);
  });
});
