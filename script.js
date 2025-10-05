document.getElementById('gradeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const grade = parseInt(document.getElementById('grade').value);

  if (name === "" || subject === "" || isNaN(grade)) {
    alert("Please enter valid inputs.");
    return;
  }

  const tableBody = document.querySelector('#gradeTable tbody');

  const newRow = document.createElement('tr');

  // Student name
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  newRow.appendChild(nameCell);

  // Subject
  const subjectCell = document.createElement('td');
  subjectCell.textContent = subject;
  newRow.appendChild(subjectCell);

  // Grade
  const gradeCell = document.createElement('td');
  gradeCell.textContent = grade;
  gradeCell.classList.add('grade');

  if (grade >= 60) {
    gradeCell.classList.add('pass');
  } else {
    gradeCell.classList.add('fail');
  }

  newRow.appendChild(gradeCell);

  tableBody.appendChild(newRow);

  // Reset form
  document.getElementById('gradeForm').reset();
});
