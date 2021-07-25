 console.log("starting exp.js");
 const fs=require('fs');


 var fetchNotes=()=>{
     try{
         return JSON.parse(fs.readFileSync("notes.txt"))
     }catch(err){
         return []
     }
 }

 var addingNotes=(title,body)=>{
     var notes=fetchNotes()

     var note={
         title,
         body
     }

     var duplicate=notes.filter((note)=>note.title===title);

     if (duplicate.length===0){
        notes.push(note)

       
        logNotes(note)
       fs.writeFileSync("notes.txt",JSON.stringify(notes))

     }else{
         console.log("STOP : Title already exist .")
     }
     

 }

 var removeNotes = (title)=>{
     var notes=fetchNotes()

     var filteredNotes=notes.filter((note)=>note.title!==title);

     fs.writeFileSync("notes.txt",JSON.stringify(filteredNotes))
 }



 var readNotes=(title)=>{
     var notes=fetchNotes();

     var filteredNotes=notes.filter((note)=>note.title===title);
    //  console.log(filteredNotes)
    //  console.log(filteredNotes[0])
     logNotes(filteredNotes[0])  
 }

 var getAll=()=>{
     var notes=fetchNotes();
     
     notes.forEach((note)=>{logNotes(note)})
 }
 
var logNotes=(note)=>{
    console.log("************************************");
    console.log(`Title : ${note.title} .`)
    console.log(`Body : ${note.body} .`)
 }


 module.exports={
     addingNotes,
     removeNotes,
     readNotes,
     getAll
 }
