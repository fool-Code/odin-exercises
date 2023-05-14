const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('p');
paragraph.style.color = 'red';
paragraph.textContent = "Hey I'm red!";

container.appendChild(paragraph);

const heading3 = document.createElement('h3');
heading3.classList.add('h3');
heading3.style.color = 'blue';
heading3.textContent = "I'm a blue h3";

container.appendChild(heading3);

const newContent = document.createElement('div');

const heading1 = document.createElement('h1');

const paragraph2 = document.createElement('p');

newContent.setAttribute('style', 'border: solid black; background: pink;');
heading1.textContent = "I'm in a div";

paragraph2.textContent = 'ME TOO!'

container.appendChild(heading1);
container.appendChild(paragraph2);

newContent.append(heading1);
newContent.append(paragraph2);
container.appendChild(newContent);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('dblclick', () => {
    alert(button.id);
  });
});
