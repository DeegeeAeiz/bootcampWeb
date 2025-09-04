const ParticipantScan = () => {
    console.log(" ")
    for (var i=0; i<participantes.length; i++){
    console.log(`En la posición ${i+1} tenemos a: ${participantes[i]}`)
}
}

// Empieza el concurso
let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"]

// Vemos las clasificaciones al principio
ParticipantScan()

// El Concurso avanza y Laura supera a Javier

participantes.splice(2, 2, "Laura", "Javier")

// Checo las clasificaciones otra vez por si acaso xd

ParticipantScan()

// Pierde laura

participantes.pop();

// Checamos clasificaciones de nuevo

ParticipantScan()

// Entran Raul y Sofia

participantes.splice(2, 0, "Raul", "Sofia")

// Escaneo

ParticipantScan()

// Entra Carmen

participantes.unshift("Carmen")

// Escaneo

ParticipantScan()