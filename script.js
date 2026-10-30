

function simularCompra() {
    const precopequenoprincipe = 15.00;
    const precoomundodesofia = 60.00;
    const precobiblia = 70.00;

    const quantidadepequenoprincipe = Number (prompt("Quantas unidades deseja? digite 0 para não comprar."));

    if (! Number.isInteger(quantidadepequenoprincipe) || quantidadepequenoprincipe < 0 ) {alert("Quantidade inválida. Digite um valor maior ou igual a zero."); return;}

// outro
   const quantidaomundodesofia = Number (prompt("Quantas unidades deseja? digite 0 para não comprar."));

    if (! Number.isInteger(quantidaomundodesofia) || quantidaomundodesofia < 0 ) {alert("Quantidade inválida. Digite um valor maior ou igual a zero."); return;}

// outro 
    const quantidadebiblia = Number (prompt("Quantas unidades deseja? digite 0 para não comprar."));

    //selecionando produtos
    if (! Number.isInteger(quantidadebiblia) || quantidadebiblia < 0 ) {alert("Quantidade inválida. Digite um valor maior ou igual a zero."); return}

    if (quantidadepequenoprincipe ===0 && quantidaomundodesofia === 0 && quantidadebiblia === 0 ){alert ("Nenhum produto foi selecionado."); return;}

//valor da compra
const totalp1 = precopequenoprincipe *quantidadepequenoprincipe;
const totalp2 = precoomundodesofia*quantidaomundodesofia;
const totalp3 =precobiblia*quantidadebiblia;

// final
const total = totalp1 + totalp2 + totalp3;

//Desconto se tiver
let desconto = 0
if total >= 100 {desconto = total * 0.10};

//Dar desconto
const totalfinal = total - desconto;

const formatarMoeda = valor => valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

//exibir os valores
let resultado = "LivroTeca - Livraria Brasil\n\n";
resultado += "O pequeno principe:" + quantidadepequenoprincipe +"unidades -" + formatarMoeda(totalp1) +"\n"; 

resultado += "O Mundo de Sofia:" + quantidaomundodesofia +"unidades -" + formatarMoeda(totalp2) +"\n";

resultado += "Biblia:" + quantidadebiblia +"unidades -" + formatarMoeda(totalp3) +"\n";

resultado += "Total sem desconto: " formatarMoeda(total)+"\n"
resultado +="Desconto: " + formatarMoeda(desconto) + "\n";

resultado +="Valor a Pagar: " + formatarMoeda(totalfinal);

alert(resultado)




}

