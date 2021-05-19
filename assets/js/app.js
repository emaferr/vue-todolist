const app = new Vue ({

    el:'#app',

    data: {

        // La nostra todo list avrá alcune tasks di default predefinite
        nuovaNota:"",
        agenda: [
            'chiamare il dentista per fissare appuntamento!',
            'aggiungere una prenotazione al corso di yoga ',
            'completare esercizio Boolean'
        ],

        agendaCompletate: [],
    },


    methods: {

        // L'utente puó inserire nuove tasks
        addNota(){
            if(this.nuovaNota === ""){
                alert("Il campo non può essere vuoto")
            }else{
                this.agenda.push(this.nuovaNota);
                this.nuovaNota='';
            }
        },

        // Cliccando sull'icona "cestino" l'utente puó cancellare una task
        removeNota(index){
            this.agenda.splice(index,1)
        },


        addCompletata(){
          console.log(this.agenda);
            
        },
    },
})


