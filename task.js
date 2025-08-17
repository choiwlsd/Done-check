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

    // Enter를 입력하기 전까지는 입력중
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            const span = document.createElement('span');
            span.textContent = input.value;
            label.replaceChild(span, input);
            createTask();
        }
    });

    // 입력 중일 때는 체크박스를 체크할 수 없게
    checkbox.addEventListener("change", (e) => {
        if (input.value.trim() === "") {
            e.preventDefault() // 체크 자체가 불가능
            checkbox.checked = false;
        }
    })
}

createTask();