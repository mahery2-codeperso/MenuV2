// bouton
const boutonMenu = document.querySelector(".menu");
const boutonPrincipal = document.querySelectorAll(".btn-p");
const boutonParametre = document.querySelectorAll(".btn-prm");
const boutonLangue = document.querySelectorAll(".btn-langue");
const btnr = document.querySelectorAll(".btn-return"); // à l'avenir à mieux configurer ce bouton

// interface
const AffbtnMenu = document.querySelector(".menu-menu");
const MenuPrincipal = document.querySelector(".menu-principal");
const MenuParametre = document.querySelector(".menu-parametre");
const credit = document.querySelector(".credit");
const MenuLangue = document.querySelector(".menu-langue");

const masque = document.querySelector(".masque");
const label = document.querySelector(".label");
const chargement = document.querySelector(".loading");
const chargementTermine = document.querySelector(".loading-end");




/// ----- Configuration des boutons ------------------------------------------------------------------------ Configuration des boutons -----

let historique = [AffbtnMenu]; 

// bouton retour ou quitter
btnr.forEach(b => {
    b.addEventListener("pointerdown", () => {
        if (historique.length > 1) {
            historique.pop().classList.add("masque"); // on retire le menu actuel et on le masque
            historique[historique.length-1].classList.remove("masque");
        }
    })
})

// Ici c'est juste pour le bouton Menu
boutonMenu.addEventListener("pointerdown", ()=> {
    loadingWindowButton(AffbtnMenu, MenuPrincipal);
})

// --- Menu principal ------------------------------------------------------ Menu principal ---

boutonPrincipal.forEach((b,index) => {

    // Pour jouer
    if (index === 0)
    {
        b.addEventListener("pointerdown", ()=> {
            label_retour(MenuPrincipal); // Car pour le moment rien n'est configuré
            
        })
    }
    // Pour aller dans les paramètres
    else if (index === 1)
    {
        b.addEventListener("pointerdown", () =>{
            loadingWindowButton(MenuPrincipal, MenuParametre);
        })
    }
    
    // Pour quittter le menu
    else if (index === 2)
    {
        b.addEventListener("pointerdown", ()=> {
            loadingWindowButton(MenuPrincipal, AffbtnMenu);
            historique = [AffbtnMenu]; // vu qu'on revient à l'état initial alors on reset (et je le laisse pour etre sûr (soit une double vérif))
        })
    }
})

// --- Menu principal ------------------------------------------------------ Menu principal ---

// --- Menu paramètre ------------------------------------------------------ Menu paramètre ---

boutonParametre.forEach((b,index) => {

    // Pour le bouton affichage
    if (index === 0)
    {
        b.addEventListener("pointerdown", () => {
        label_retour(MenuParametre) // Car pour le moment rien n'est configuré
            })
    }

    // Pour le bouton audio
    else if (index === 1)
    {
        b.addEventListener("pointerdown", () => {
        label_retour(MenuParametre) // Car pour le moment rien n'est configuré
            })
    }

    // Pour le bouton configurations/Touches
    else if (index === 2)
    {
        b.addEventListener("pointerdown", () => {
        label_retour(MenuParametre) // Car pour le moment rien n'est configuré
            })
    }

    // Pour le bouton langue
    else if (index === 3)
    {
        b.addEventListener("pointerdown", () => {
        loadingWindowButton(MenuParametre,MenuLangue);
            })
    }

    // Pour le bouton Crédits
    else if (index === 4)
    {
        b.addEventListener("pointerdown", () => {
        loadingWindowButton(MenuParametre,credit);
            })
    }
})
// --- Menu paramètre ------------------------------------------------------ Menu paramètre ---


// --- Menu langue ------------------------------------------------------ Menu langue ---

boutonLangue.forEach((b,index) => {
    
    // Pour le premier bouton (chinese)
    if (index === 0)
    {
        b.addEventListener("pointerdown", () => {
            label_retour(MenuLangue);
        })
    }

    // Pour le premier bouton (deutsch)
    else if (index === 1)
    {
        b.addEventListener("pointerdown", () => {
            label_retour(MenuLangue);
        })
    }

    // Pour le premier bouton (english)
    else if (index === 2)
    {
        b.addEventListener("pointerdown", () => {
            label_retour(MenuLangue);
        })
    }

    // Pour le premier bouton (french)
    else if (index === 3)
    {
        b.addEventListener("pointerdown", () => {
            loading_screen(MenuLangue);
        })
    }

    // Pour le premier bouton (japanese)
    else if (index === 4)
    {
        b.addEventListener("pointerdown", () => {
            label_retour(MenuLangue);
        })
    }

    // Pour le premier bouton (korean)
    else if (index === 5)
    {
        b.addEventListener("pointerdown", () => {
            label_retour(MenuLangue);
        })
    }

    // Pour le premier bouton (malagasy)
    else if (index === 6)
    {
        b.addEventListener("pointerdown", () => {
            label_retour(MenuLangue);
        })
    }

    // Pour le premier bouton (spanish)
    else if (index === 7)
    {
        b.addEventListener("pointerdown", () => {
            label_retour(MenuLangue);
        })
    }
})

// --- Menu langue ------------------------------------------------------ Menu langue ---


/// ----- Configuration des boutons ------------------------------------------------------------------------ Configuration des boutons -----


/// ----- Fonctions ------------------------------------------------------------------------ Fonctions -----

// fonction d'indisponibilité

function indisponible() {
    setTimeout(() => {
                historique.pop().classList.add("masque");
                historique[historique.length-1].classList.remove("masque");
            },2000);
}

// fonction delai

function delai() {

}

// Pour charger la fenetre du bouton

function loadingWindowButton(divActuel, divSuivant) {
    divActuel.classList.add("masque");
    divSuivant.classList.remove("masque");
    historique.push(divSuivant);
};

// fonction label pour afficher le fait que la fonctionnalité soit indisponible

function label_retour(div) {
    div.classList.add("masque");
    label.classList.remove("masque");
    historique.push(label);
}

// fonction pour l'écran de chargement

function loading_screen(div) {
    div.classList.add("masque");
    chargement.classList.remove("masque");
    setTimeout(() => {
        chargement.classList.add("masque");
        chargementTermine.classList.remove("masque");
        setTimeout(() => {
            chargementTermine.classList.add("masque");
            div.classList.remove("masque");
        },1500)
    },1500)
}