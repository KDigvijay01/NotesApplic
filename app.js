console.log("starting nt.js")
const fs= require('fs');

//const {add,mul,sub}=require('./exp.js')
const exp=require('./exp.js')

const yargs=require('yargs')



// fs.writeFile("./exp.js"," ",()=>{
//     console.log("file added");
// })
// console.log(exp.add(3,4))

// console.log(exp.sub(10,7))

// console.log(exp.mul(5,2))

// console.log(process.argv)

// console.log(yargs.argv)

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


// const arr=[{name:"digvijay",class:"btech",place:"patna",age:22}]


// console.log(arr);


// var jsonarr=JSON.stringify(arr)

// console.log(jsonarr);

// var original=JSON.parse(jsonarr)

// console.log(original)

// console.log(original[0].name)




