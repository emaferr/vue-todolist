const app = new Vue ({

    el:'#app',

    data: {

        agendaCompletate: [],
        cestino:[],

        nuovaNota:"",

        // La nostra todo list avrá alcune tasks di default predefinite
        agenda: [
            'chiamare il dentista per fissare appuntamento!',
            'aggiungere una prenotazione al corso di yoga ',
            'completare esercizio Boolean'
        ],

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

        // Cliccando sull'icona "cestino" l'utente sposta nel cestino una task
        removeNota(index){
            this.cestino.unshift(this.agenda[index]);
            this.agenda.splice(index,1)
        },

        // Cliccando sull'icona "check" l'utente sposta nella sezione completate una task
        addCompletata(index){
          // Resa modificabile nota
          index = document.getElementById("editabile").innerText;
        
          this.agendaCompletate.unshift(index);
          this.agenda.splice(index,1)

        },

        // Cliccando sull'icona "undo" l'utente riporta nella sezione originale una task
        undoNota(index){
            this.agenda.unshift(this.agendaCompletate[index]);
            this.agendaCompletate.splice(index,1)
        },

        undoDelete(index){
            this.agenda.push(this.cestino[index])
            this.cestino.splice(index,1)
        },

        // Cliccando sull'icona "X" l'utente elimina definitivamente una task
        deleteNota(index){
            let eliminazione = confirm('Se sei sicuro di voler eliminare il promemoria?');
            if (eliminazione === true){
                this.cestino.splice(index,1)
            }
        },

    },

    // collegato il tasto 'enter' alla funzione addNote
    mounted() {
        document.getElementById("nuova_nota").addEventListener("keyup", (e) => {
            let tasto = e.key;
            if (tasto === "Enter") {
                this.addNota();
            }
        });

        // document.getElementById('editabile').addEventListener("keyup", (e) => {
        //     let tasto = e.key;
        //     let notaModificata = document.getElementById("editabile").innerText;
        
        //     if (tasto === "Enter"){
        //         alert('La tua nota è stata modificata! Nuova nota: ' + notaModificata);
                
        //     }
        // })
        // Non funziona correttamente !!!

    },
})





