console.log("Lets Write JavaScript")

let currSong = new Audio();
let songs, currFolder;
console.log()

async function main(){
    let a = await fetch("http://127.0.0.1:5502/songs/");
    let response = await a.text();
    console.log(response)
}

main()