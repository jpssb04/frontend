import { geraNumeroAleatorio } from './geraNumeroAleatorio.js';
import { verificaTentativa } from './verificaTentativa.js';

export const mainLoop = () => {
    let tentativas = 10;
    const numPC = geraNumeroAleatorio();

    while (tentativas > 0) {
        let numUser = prompt("Adivinhe o número entre 1 e 100:");
        
        let resultado = verificaTentativa(numPC, numUser); 
        
        if (resultado === "igual") {
            console.log("Parabéns! Você ganhou!");
            break; 
        }

        tentativas--;
    }

    if (tentativas === 0) {
        console.log("Você perdeu! O número era " + numPC + ".");
    }
}

