//modal notificação
let modal = document.querySelector('#modal-notificacao')
let btnModal = document.querySelector('#done')
let som = document.querySelector('#audio-alarme')
div_submit = document.querySelector('.pronto')
submit = document.querySelector('#pronto-input')
tarefa_modal = document.querySelector('#tarefa-modal')
horario_modal = document.querySelector('#horario-modal')
input_tarefa = document.querySelector('#tarefa')
input_horario = document.querySelector('#tempo')

div_submit.addEventListener('click', () => {
    input_tarefa.value = input_tarefa.value.toUpperCase()
    tarefa_modal.textContent = input_tarefa.value
    horario_modal.textContent = input_horario.value
    modal.showModal()
    modal.classList.add('translate')
    som.play()
    
    setTimeout(() => {
        modal.classList.remove('translate')
    }, 4000)
    setTimeout(() => {
        modal.close()
    }, 4500)

    setTimeout(() => {
        submit.click()
    }, 4600)

})


