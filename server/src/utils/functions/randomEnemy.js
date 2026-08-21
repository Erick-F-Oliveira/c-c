//Função de aleatoriedade com fisher-yates
function random(array) {
    const arr = [...array]; // cópia do array original
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default random