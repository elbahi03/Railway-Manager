// RAILWAY MANAGER :

// prompt-sync :
var prompt = require('prompt-sync')();

//// * DATA GROBAL
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
// ticket grobal :
let id_grobal = 0;
// data tichet :
const tickets = [];
// data ticket annule :
const annule = [];


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
        8. Statistiques .
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
// function of find id ticket annule :
function Findticket_annule(id) {
    let index;
    for (i = 0; i < annule.length; i++) {
        if (annule[i].tripId === id) {
            index = i;
            return index;
        }
    }
    return index;
}
// function of price of trajet :
function Tri_croissant() {
    const tri_trips = trips;
    for (let i = 0; i < tri_trips.length - 1; i++) {
        for (let j = 0; j < tri_trips.length - 1 - i; j++) {
            if (tri_trips[j].price > tri_trips[j + 1].price) {
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
// function of Nombre total de tickets vendus :
function nbr_ticket() {
    return tickets.length;
}
// function of la somme des prix des tickets : 
function Somme() {
    let somme = 0;
    for (i = 0; i < tickets.length; i++) {
        somme += tickets[i].price;
    }
    return somme;
}
// function of Trajet le plus vendu : 
function trajet_min() {
    let min = trips[0].availableSeats;
    let index = 0;
    for (i = 0; i < tickets.length; i++) {
        if (min > trips[0].availableSeats) {
            index = i
        }
    }
    console.log(`
        #${trips[index].id} :
            ${trips[index].departure} -> ${trips[index].destination}
            ${50 - trips[index].availableSeats} tickets vendus .      
        `)
}
let Quitter = false;

// code start :
while (Quitter === false) {
    choisir()
    switch (choix) {
        case 1: // Afficher les trajets
            console.log("=== TRAJETS DISPONIBLES ===")
            Afficher();
            break;
        case 2: // Acheter un ticket .
            console.log("=== Acheter un ticket ===")
            console.log("remplir les information :");
            let ticket = {
                passengerName: prompt("Nom du passager : "),
                tripId: Number(prompt("Identifiant du trajet : "))
            };
            let NAME = ticket.passengerName
            console.log(Findticket_annule(ticket.tripId) != undefined)
            if (Findticket_annule(ticket.tripId) != undefined) {
                let index = Findticket_annule(ticket.tripId);
                let Annuler = annule[index]
                id_grobal++
                Annuler.id = id_grobal++;
                Annuler.passengerName = NAME ;
                let nbrr = ticket.tripId - 1 ;
                trips[nbrr].availableSeats -= 1;
                tickets.push(Annuler);
                annule.splice(index, 1);
                let length = tickets.length
                    console.log(`
                    Ticket# ${tickets[length - 1].id}
                    Passager : ${tickets[length - 1].passengerName}
                    Trajet : ${trips[tickets[length - 1].tripId - 1].departure} -> ${trips[tickets[length - 1].tripId - 1].destination}
                    Place : ${tickets[length - 1].seatNumber}
                    Prix : ${tickets[length - 1].price}
                    `)
            } else {
                let index = FindTrajet(ticket.tripId)
                if (index === undefined) {
                    console.log("Trajet introuvable.")
                } else if (index === -1) {
                    console.log("Train complet.")
                } else {
                    id_grobal++;
                    ticket.id = id_grobal;
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
            }
            break;
        case 3: // Afficher les tickets .
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
        case 4: // Annuler un ticket .
            console.log("=== Identifiant du ticket ===")
            let id = Number(prompt("Identifiant du ticket :"))
            let trouve = Findticket(id);
            if (trouve === undefined) {
                console.log("Ticket introuvable.")
            } else {
                trips[tickets[trouve].tripId - 1].availableSeats += 1
                annule.push(tickets[trouve])
                tickets.splice(trouve, 1)
                console.log("Ticket annulé avec succès.")
            }
            break;
        case 5: // Rechercher un ticket .
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
        case 6: // 6. Filtrer les trajets .
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
        case 7: // 7. Trier les trajets .
            console.log("=== Trier les trajets : Prix croissant ===")
            Tri_croissant()
            break;
        case 8: // 8. Statistiques .
            console.log("=== Statistiques ===")
            console.log("--- Nombre total de tickets vendus  ---")
            console.log("Nombre total de tickets : " + nbr_ticket())
            console.log("--- Chiffre d'affaires total  ---")
            console.log("Chiffre d'affaires total : " + Somme())
            console.log("--- Trajet le plus vendu  ---")
            console.log("Trajet le plus vendu : ")
            trajet_min()
            break;
        case 9: // 9. ticket annulle 
         console.log("=== TICKETS DISPONIBLES ===")
            for (let i = 0; i < annule.length; i++) {
                console.log(`
                    Ticket# ${annule[i].id}
                    Passager : ${annule[i].passengerName}
                    Trajet : ${trips[annule[i].tripId - 1].departure} -> ${trips[annule[i].tripId - 1].destination}
                    Place : ${annule[i].seatNumber}
                    Prix : ${annule[i].price}
                    `)
            }
        break
        case 0: // 0. Quitter .
            console.log("by by")
            Quitter = true
            break;
    }
}
