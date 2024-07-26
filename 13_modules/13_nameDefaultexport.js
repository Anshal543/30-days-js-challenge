// activity 2 name and default export
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export { add, subtract  };

export default function (a, b) {
    return a * b;
}
