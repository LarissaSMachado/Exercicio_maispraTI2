//1. fazer uma função que recebe três parâmetros: dia, mês e ano, e retorna se a data é válida ou não.
function ehDataValida(dia, mes, ano= new Date().getFullYear()) {
if (dia < 1 || dia > 31) return false;
// se alguém botar mês 14 ou 0, já retorna falso.
if (mes < 1 || mes > 12) return false;
if (ano < 1) return false;}
 const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// Ver se o ano é bissexto 
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
if (bissexto && mes === 2) {
    diasPorMes[1] = 29;
}
//mes - 1 porque o array começa do 0 (janeiro = posição 0).
if (dia < 1 || dia > diasPorMes[mes - 1]) return false;
return true;
