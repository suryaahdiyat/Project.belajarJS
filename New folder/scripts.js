const data = ".data.json";
const listMhs = document.querySelector('#root');

console.log(data);
console.log(listMhs);

const getMhs = () => {
    fetch(data)
        .then(response => {
            return response.json;
        }).then(responseJson => {
            listMhs.innerHTML = " ";
            console.log(responseJson);
        })
}

document.addEventListener('DOMContentLoaded', getMhs)