export const verificaTentativa = (numeroComputador, numeroUsuario) => {
    if (numeroComputador == numeroUsuario) {
        return "igual";
    } 
    
    else if (numeroUsuario > numeroComputador) {
        console.log("O número é menor.")
        return "menor";
    } 
    
    else {
        console.log("O número é maior.")
        return "maior";
    }
}
