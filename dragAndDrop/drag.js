const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach((draggable) => {
    //객체 드래그 시작할 때 발생
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    })
    
    //객체 드래그하다 마우스 버튼 놓는 순간 발생
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    })
});

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        //getDragAfterElement함수는 드래그 중인 요소가 놓일 가장 적합한 위치 계산해 반환
        const afterElement = getDragAfterElement(container, e.clientX);
        const draggable = document.querySelector(".dragging");
        if(afterElement === undefined) {
            container.appendChild(draggable);
        }else {
            container.insertBefore(draggable, afterElement);
        }
    })
});

function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")]

    return draggableElements.reduce((closest, child) => {
        //element.getBoundingClientRect() 가 아니라 child.getBoundingClientRect()
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;

        if (offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child};
        } else {
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;

    
    // let closestElement = null;
    // let closestOffset = Number.NEGATIVE_INFINITY;

    // draggableElements.forEach(element => {
    //     const box = element.getBoundingClientRect();
    //     const offset = x - box.left - box.width / 2;

    //     if (offset < 0 && offset > closestOffset) {
    //         closestOffset = offset;
    //         closestElement = element;
    //     }
    // });

    // return closestElement;
}