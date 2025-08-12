const taskContainer = document.getElementById("task-container");

// task.js에서 반환해야 하는 형태
// <div id="task-container">
//     <label id="task">
//         <input type="checkbox">
//         <span>what you have to do</span>
//     </label>
// </div>

function createTask() {
    const label = document.createElement('label');
    label.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = '오늘 해야할 일은?'

    label.appendChild(checkbox);
    label.appendChild(input);
    taskContainer.appendChild(label);

    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            const span = document.createElement('span');
            span.textContent = input.value;
            label.replaceChild(span, input);
            createTask();
        }
    });
}

createTask();