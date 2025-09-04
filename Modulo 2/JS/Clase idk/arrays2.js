var biblioteca = [
    {
        autor: "Bill Gates",
        titulo: "The Road Ahead",
        estadoLectura: true
    },
    {
        autor: "Steve Jobs",
        titulo: "Walter Isaacson",
        estadoLectura: true
    },
    {
        autor: "Suzanne Collins",
        titulo: "Mockingjay: The Final Book of The Hunger Games",
        estadoLectura: false
    }
];

for (i=0; i<biblioteca.length; i++){
    console.log(`Autor: ${biblioteca[i].autor}
Título: ${biblioteca[i].titulo}
estadoLectura: ${biblioteca[i].estadoLectura}`)
}