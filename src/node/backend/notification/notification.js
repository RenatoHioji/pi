import Alarme from "./../pais/model/Alarme.js";

class Notification {
    async checkAlarmsAndTriggerNotifications() {
        console.log("STARTING CHECKING - " + new Date())
        const currentTime = new Date()

        const alarmes = await Alarme.find({diaDaSemana: currentTime.getDay()})


        const currentDayOfWeek = currentTime.getDay()

        alarmes.forEach(alarme => {
            console.log("Checking Alarme: ", alarme)
                const [alarmHour, alarmMinute] = alarme.horario.split(':')
                /*console.log(`HORÁRIO:     ${alarmHour}:${alarmMinute}`)
                console.log(currentTime.getHours())
                console.log(currentTime.getMinutes()) */
                if(alarmHour == currentTime.getHours() && alarmMinute == currentTime.getMinutes()){
                    this.triggerNotification(alarme)
                }
            })
    }
    
    triggerNotification(alarme) {
        console.log(`Notification triggered for Alarme: ${alarme._id}`)
    }

    startChecking() {
        setInterval(() => this.checkAlarmsAndTriggerNotifications(), 60000)
    }
}

export default new Notification();
