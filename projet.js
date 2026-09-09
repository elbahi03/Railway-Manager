// RAILWAY MANAGER :

// prompt-sync :
var prompt = require('prompt-sync')();

// data trip :
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
// data tichet :
const tickets = [];
// creer un array of price of trajet :
function Tri_croissant() {
    const tri_trips = trips;
    for (let i = 0; i < tri_trips.length -1 ; i++) {
        for (let j = 0; j < tri_trips.length - 1 -i; j++) {
            if (tri_trips[j].price > tri_trips[j+1].price) {
                let a = tri_trips[j];
                tri_trips[j] = tri_trips[j + 1];
                tri_trips[j + 1] = a
            }
        }
    }
    for (let i = 0; i < tri_trips.length; i++) {
        console.log(`
            #${tri_trips[i].id} :
            ${tri_trips[i].departure} -> ${tri_trips[i].destination} : ${tri_trips[i].price}
            `)
    }
}
// * Functions :

// function of menu :
function choisir() {
    console.log(`
     Menu de RAILWAY MANAGER :
     1. Afficher les trajets .
     2. Acheter un ticket .
     3. Afficher les tickets .
     4. Annuler un ticket .
     5. Rechercher un ticket .
     6. Filtrer les trajets .
     7. Trier les trajets .
     0. Quitter .
    `);
    choix = Number(prompt("votre choix : "));
}
// function of Affichage :
function Afficher() {
    for (let i = 0; i < trips.length; i++) {
        console.log(`
                    # ${trips[i].id} ${trips[i].departure} -> ${trips[i].destination}
                    Départ : ${trips[i].departureTime}
                    Arrivée : ${trips[i].arrivalTime}
                    Prix : ${trips[i].price}
                    Places disponibles ${trips[i].availableSeats}
                    `)
    }
}
// function of find trajet :
function FindTrajet(id) {
    let index
    for (i = 0; i < trips.length; i++) {
        if (trips[i].id === id) {
            if (trips[i].availableSeats > 0) {
                index = i;
                break;
            } else {
                index = -1
            }
        }
    }
    return index;
}
// function of find ticket :
function Findticket(id) {
    let index
    for (i = 0; i < tickets.length; i++) {
        if (tickets[i].id === id) {
            index = i;
            return index;
        }
    }
    return index;
}

let Quitter = false;

// code start :
while (Quitter === false) {
    choisir()
    switch (choix) {
        case 1:
            console.log("=== TRAJETS DISPONIBLES ===")
            Afficher();
            break;
        case 2:
            console.log("=== Acheter un ticket ===")
            console.log("remplir les information :");
            let ticket = {
                passengerName: prompt("Nom du passager : "),
                tripId: Number(prompt("Identifiant du trajet : "))
            };
            let index = FindTrajet(ticket.tripId)
            if (index === undefined) {
                console.log("Trajet introuvable.")
            } else if (index === -1) {
                console.log("Train complet.")
            } else {
                if (tickets.length === 0) {
                    ticket.id = 1;
                } else {
                    let index = tickets.length
                    ticket.id = tickets[index - 1] + 1;
                }
                trips[index].availableSeats -= 1;
                ticket.seatNumber = 50 - trips[index].availableSeats;
                ticket.price = trips[index].price;
                tickets.push(ticket);
                console.log(`Ticket acheté avec succès.`);
                let length = tickets.length
                console.log(`
                    Ticket# ${tickets[length - 1].id}
                    Passager : ${tickets[length - 1].passengerName}
                    Trajet : ${trips[tickets[length - 1].tripId - 1].departure} -> ${trips[tickets[length - 1].tripId - 1].destination}
                    Place : ${tickets[length - 1].seatNumber}
                    Prix : ${tickets[length - 1].price}
                    `)

            }
            break;
        case 3:
            console.log("=== TICKETS DISPONIBLES ===")
            for (let i = 0; i < tickets.length; i++) {
                console.log(`
                    Ticket# ${tickets[i].id}
                    Passager : ${tickets[i].passengerName}
                    Trajet : ${trips[tickets[i].tripId - 1].departure} -> ${trips[tickets[i].tripId - 1].destination}
                    Place : ${tickets[i].seatNumber}
                    Prix : ${tickets[i].price}
                    `)
            }
            break;
        case 4:
            console.log("=== Identifiant du ticket ===")
            let id = Number(prompt("Identifiant du ticket :"))
            let trouve = Findticket(id);
            if (trouve === undefined) {
                console.log("Ticket introuvable.")
            } else {
                trips[tickets[trouve].tripId - 1].availableSeats += 1
                tickets.splice(trouve, 1)
                console.log("Ticket annulé avec succès.")
            }
            break;
        case 5:
            console.log("=== Recherche par nom du passager ===")
            let nom = prompt("Nom du passager :");
            for (i = 0; i < tickets.length; i++) {
                if (tickets[i].passengerName === nom) {
                    console.log(`
                    Ticket# ${tickets[i].id}
                    Passager : ${tickets[i].passengerName}
                    Trajet : ${trips[tickets[i].tripId].departure} -> ${trips[tickets[i].tripId].destination}
                    Place : ${tickets[i].seatNumber}
                    Prix : ${tickets[i].price}
                    `)
                }
            }
            break;
        case 6:
            console.log("=== Filtrer les trajets par ville ===")
            let ville = prompt("Ville de départ : ")
            console.log("=== RESULTAT ===")
            for (i = 0; i < trips.length; i++) {
                if (trips[i].departure === ville) {
                    console.log(`
                    # ${trips[i].id} ${trips[i].departure} -> ${trips[i].destination}
                    Départ : ${trips[i].departureTime}
                    Arrivée : ${trips[i].arrivalTime}
                    Prix : ${trips[i].price}
                    Places disponibles ${trips[i].availableSeats}
                    `)
                }
            }
            break;
        case 7:
            console.log("=== Trier les trajets : Prix croissant ===")
            Tri_croissant()
            break;
        case 0:
            console.log("by by")
            Quitter = true
            break;
    }
}
