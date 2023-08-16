const userList = document.querySelector('#user-list');

function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);

    const users = xhr.response;
    users.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.append(li);
    });
  });
  xhr.send();
}

getUsers();
