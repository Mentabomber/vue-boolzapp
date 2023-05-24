// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

const { createApp } = Vue;
var DateTime = luxon.DateTime;
createApp({
    data(){
        return{
            lastMessageSent: "",
            activeUser: 0,
            newMessage: {
                text:"",
                date: "",
                status: "sent",
            },
            users:[
                {   

                    name: "Gianni",
                    avatar: "img/Avatar.svg",
                    visible: true,
                    messages:   [

                        
                        {
                            text:"Ciao",
                            date: '10/01/2020 15:30:55',
                            status: "received",
                        },

                        {
                            text:"come stai?",
                            date: '10/01/2020 15:50:00',
                            status: "received",
                        },
                        {
                            text:"Tutto bene",
                            date: '10/01/2020 15:50:00',
                            status: "sent",
                        },
                                ],
                },
                {   
                    name: "Maria",
                    avatar: "img/Avatar-one.svg",
                    visible: false,
                    messages:   [
 
                        {
                            text:"Ho voglia di andare a vedere un film",
                            date: '10/01/2020 15:30:55',
                            status: "received",
                        },

                        {
                            text:"tu??",
                            date: '10/01/2020 15:50:00',
                            status: "received",
                        },
                        {
                            text:"va bene andiamo",
                            date: '10/01/2020 15:50:00',
                            status: "sent",
                        },
                    ],
                },
                {   
                    name: "Filippo",
                    avatar: "img/Avatar-two.svg",
                    visible: false,
                    messages:   [
 
                        {
                            text:"Andiamo a mangiare un gelato?",
                            date: '10/01/2020 15:30:55',
                            status: "received",
                        },

                        {
                            text:"ok",
                            date: '10/01/2020 15:50:00',
                            status: "sent",
                        },
                    ],
                }
            ]
        }

    },
    methods:{
        selectUsersFriend(array, targetUser, index){
            this.activeUser = index;
            console.log(this.activeUser);
            console.log(array);
            console.log(targetUser);
            if (targetUser.visible === true) {
                return;
            }
            else{
                targetUser.visible = true;
                
                array.forEach(user => {
                    if (user.visible && targetUser !== user){
                        user.visible = false;
                    }
                })
            }

            
            
        },
        insertNewMessage(usersFriendMessageList){
            // console.log((usersFriendMessageList);
            // console.log(this.activeUser);
            if(this.newMessage.text.length !== 0){
                usersFriendMessageList.push({
                            text: this.newMessage.text, 
                            date:  DateTime, 
                            status: "sent"
                        })
            }
            // else{ prova per mettere l'ultimo messaggio scritto da un altro  utente nella tab degli amici corrispondente
            //     this.lastMessageSent = this.newMessage.text;
            //     console.log(this.lastMessageSent);
            // }

            this.newMessage.text = "";
            this.newMessage.date = "";
            this.newMessage.status = "";
        }
    }


}).mount('#app')