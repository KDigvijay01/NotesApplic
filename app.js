console.log("starting app.js")
const fs= require('fs');

const exp=require('./exp.js')

const yargs=require('yargs')

const title = yargs.argv.title

const body =yargs.argv.body

const command=yargs.argv._[0]

//console.log(title,body,command);

if (command==="add"){
    
    console.log("adding notes")
    exp.addingNotes(title,body)

}else if(command==="remove"){

    console.log("removing notes")
    exp.removeNotes(title)

}else if (command==="list"){

    console.log("listing notes")
    exp.getAll()

}else if (command==="read"){

    console.log("reading notes")
    exp.readNotes(title)
}else{
    console.log("Unknown command used!")

}
