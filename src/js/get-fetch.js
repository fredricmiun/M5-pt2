function displayData(x0) {
  let element = document.getElementById("box-data");
  element.innerHTML = "";
  x0.forEach(function(elem) {
    element.innerHTML +=
      "<form class='form'><div class='content_container'><input type='hidden' name='courseKey' value='" +
      elem.id +
      "'>" +
      "<p class='p1'><input id='i1' type='text' name='courseCode' value='" +
      elem.courseCode +
      "'></p>" +
      "<p class='p1'><input type='text' name='courseProgression' value='" +
      elem.progression +
      "'></p>" +
      "<p class='p2'><input type='text' name='courseName' value='" +
      elem.courseName +
      "'></p>" +
      "<p class='p2'><input type='text' name='courseSyllabus' value='" +
      elem.syllabus +
      "'></p>" +
      "<button onClick='deleteData(" +
      elem.id +
      ")' class='__delete' name='courseId' type='button'>Ta bort</button>" +
      "<button class='__save' type='submit'>Spara</button>" +
      "</div></form>";
  });
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

      const formData = new FormData(this);
      let courseKey = formData.get("courseKey");
      let courseCode = formData.get("courseCode");
      let courseProg = formData.get("courseProgression");
      let courseName = formData.get("courseName");
      let courseSyl = formData.get("courseSyllabus");

      fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          id: courseKey,
          code: courseCode,
          prog: courseProg,
          name: courseName,
          syl: courseSyl
        })
      })
        .then(function(response) {
          if (response.status !== 200) {
            console.log(response.status);
            return;
          }
          response.json().then(function(data) {
            getData();
          });
        })
        .catch(function(err) {
          console.log("Fetch Error:", err);
        });
    });
  }
};

const createData = document.getElementById("create-form");
createData.addEventListener("submit", function(e) {
  e.preventDefault();

  const newFormData = new FormData(this);
  let courseCode = newFormData.get("courseCode");
  let courseProg = newFormData.get("courseProgression");
  let courseName = newFormData.get("courseName");
  let courseSyl = newFormData.get("courseSyllabus");

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      code: courseCode,
      prog: courseProg,
      name: courseName,
      syl: courseSyl
    })
  })
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        location.reload();
        console.log(data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error:", err);
    });
});
