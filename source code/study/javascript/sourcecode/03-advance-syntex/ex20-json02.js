const jsonData = {
  "username": "홍길동",
  "email": "hong-gd@naver.com",
  "gender": "man",
  "intro": "저는 홍길동 입니당.",
  "favo": [
    "Python",
    "Javascript"
  ]
};

function populateForm() {
    document.getElementById('username').value = jsonData.username;
    document.getElementById('email').value = jsonData.email;
    document.getElementById('intro').value = jsonData.intro;

    if (jsonData.gender === 'man') {
        document.getElementById('gender_male').checked = true;
    } else if (jsonData.gender === 'woman') {
        document.getElementById('gender_female').checked = true;
    }

    const favoCheckboxes = document.querySelectorAll('input[name="favo"]');
    favoCheckboxes.forEach(checkbox => {
        if (jsonData.favo.includes(checkbox.value)) {
            checkbox.checked = true;
        }
    });
}

function submitForm() {
    // submitForm function to handle form submission
    alert('서버로 제출');
}

function populateList() {
  const userList = document.getElementById('userList');
  userList.innerHTML = userList.innerHTML + `
      <li>이름: ${jsonData.username}</li>
      <li>이메일: ${jsonData.email}</li>
      <li>성별: ${jsonData.gender === 'man' ? '남' : '여'}</li>
      <li>소개: ${jsonData.intro}</li>
      <li>관심사: ${jsonData.favo.join(', ')}</li>
  `;
}

function populateTable() {
  const userTable = document.getElementById('userTable');
  const newRow = userTable.insertRow();

  newRow.insertCell(0).textContent = jsonData.username;
  newRow.insertCell(1).textContent = jsonData.email;
  newRow.insertCell(2).textContent = jsonData.gender === 'man' ? '남' : '여';
  newRow.insertCell(3).textContent = jsonData.intro;
  newRow.insertCell(4).textContent = jsonData.favo.join(', ');
}

