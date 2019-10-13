function displayData(x0) {
  console.log(x0);
}

const url =
  "http://localhost/DT173G%20-%20Moment%205/api/app/ControllerView/CourseView.php";
fetch(url)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data) {
      displayData(displayData);
    });
  })
  .catch(function(err) {
    console.log("Fetch Error:", err);
  });
