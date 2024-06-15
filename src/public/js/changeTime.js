let btnAumentarHoras = document.querySelector('#btn-aumentar-horas')
let btnAumentarMinutos = document.querySelector('#btn-aumentar-minutos')
const input = document.getElementById("tempo")

btnAumentarHoras.addEventListener('click', () => {
    changeTime(60)
})

btnAumentarMinutos.addEventListener('click', () => {
    changeTime(1)
})

function changeTime(minutesToAdd) {
    let [hourStr, minutesStr] = input.value.split(":")
    hourStr = hourStr? hourStr : "00";
    minutesStr = minutesStr? minutesStr : "00";

    let hour = parseInt(hourStr)
    let minutes = parseInt(minutesStr)

    minutes += minutesToAdd

    hour += Math.floor(minutes/60)
    minutes %= 60

    const formattedTime = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    input.value = formattedTime
}   