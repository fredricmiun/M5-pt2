function displayData(x0) {
  let element = document.getElementById("box-data");
  element.innerHTML = "";
  for (let i = 0; i < x0.length; i++) {
    element.innerHTML +=
      "<form class='form'><div class='content_container'>" +
      "<p class='p1'><input id='i1' type='text' name='courseCode' value='" +
      x0[i].courseCode +
      "'></p>" +
      "<p class='p1'><input type='text' name='courseProgression' value='" +
      x0[i].progression +
      "'></p>" +
      "<p class='p2'><input type='text' name='courseName' value='" +
      x0[i].courseName +
      "'></p>" +
      "<p class='p2'><input type='text' name='courseName' value='" +
      x0[i].syllabus +
      "'></p>" +
      "<button onClick='deleteData(" +
      x0[i].id +
      ")' class='__delete' name='courseId' type='button'>Ta bort</button>" +
      "<button class='__save' type='submit'>Spara</button>" +
      "</div></form>";
  }

  loadForm();
}

const url =
  "http://localhost/DT173G%20-%20Moment%205/api/app/ControllerView/CourseView.php";

let getData = () => {
  fetch(url, {
    method: "GET"
  })
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        displayData(data);
        console.log(data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error:", err);
    });
};

getData();

let deleteData = id => {
  fetch(url, {
    method: "DELETE",
    body: JSON.stringify({ id: id })
  })
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        getData();
        console.log(data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error:", err);
    });
};

let loadForm = () => {
  let form = document.getElementsByClassName("form");

  for (let i = 0; i < form.length; i++) {
    // console.log(form[i]);
    form[i].addEventListener("submit", function(e) {
      e.preventDefault();

      let a = $(this)
        .find("input[name='courseName']")
        .val();
      console.log(a);

      fetch(url, {
        method: "PUT"
      })
        .then(function(response) {
          if (response.status !== 200) {
            console.log(response.status);
            return;
          }
          response.json().then(function(data) {
            getData();
            console.log(data);
          });
        })
        .catch(function(err) {
          console.log("Fetch Error:", err);
        });
    });
  }
};
