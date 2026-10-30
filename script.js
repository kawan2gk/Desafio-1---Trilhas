
function simularCompra() {

    // 1. Definir os preços dos livros
    const precoDomCasmurro = 35.90;
    const precoPequenoPrincipe = 29.90;
    const precoHarryPotter = 49.90;

    // 2. Perguntar as quantidades
    const quantidadeDomCasmurro = Number(
        prompt("Quantos exemplares de Dom Casmurro deseja comprar? Digite 0 para não comprar.")
    );

    if (!Number.isInteger(quantidadeDomCasmurro) ||
        quantidadeDomCasmurro < 0) {
        alert("Quantidade inválida. Digite um número inteiro maior ou igual a zero.");
        return;
    }

    const quantidadePequenoPrincipe = Number(
        prompt("Quantos exemplares de O Pequeno Príncipe deseja comprar? Digite 0 para não comprar.")
    );

    if (!Number.isInteger(quantidadePequenoPrincipe) ||
        quantidadePequenoPrincipe < 0) {
        alert("Quantidade inválida. Digite um número inteiro maior ou igual a zero.");
        return;
    }

    const quantidadeHarryPotter = Number(
        prompt("Quantos exemplares de Harry Potter e a Pedra Filosofal deseja comprar? Digite 0 para não comprar.")
    );

    if (!Number.isInteger(quantidadeHarryPotter) ||
        quantidadeHarryPotter < 0) {
        alert("Quantidade inválida. Digite um número inteiro maior ou igual a zero.");
        return;
    }

    // 3. Verificar se algum produto foi selecionado
    if (
        quantidadeDomCasmurro === 0 &&
        quantidadePequenoPrincipe === 0 &&
        quantidadeHarryPotter === 0
    ) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    // 4. Calcular o valor de cada produto
    const subtotalDomCasmurro =
        precoDomCasmurro * quantidadeDomCasmurro;

    const subtotalPequenoPrincipe =
        precoPequenoPrincipe * quantidadePequenoPrincipe;

    const subtotalHarryPotter =
        precoHarryPotter * quantidadeHarryPotter;

    // 5. Calcular o total antes do desconto
    const total =
        subtotalDomCasmurro +
        subtotalPequenoPrincipe +
        subtotalHarryPotter;

    // 6. Verificar o direito ao desconto
    let desconto = 0;

    if (total >= 100) {
        desconto = total * 0.10;
    }

    // 7. Calcular o total final
    const totalFinal = total - desconto;

    // 8. Formatar os valores em reais
    const formatarMoeda = valor =>
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    // 9. Mostrar o resultado da compra
    let resultado = "===== MUNDO DOS LIVROS =====\n\n";

    resultado +=
        "Dom Casmurro: " +
        quantidadeDomCasmurro + " unidade(s) - " +
        formatarMoeda(subtotalDomCasmurro) + "\n";

    resultado +=
        "O Pequeno Príncipe: " +
        quantidadePequenoPrincipe + " unidade(s) - " +
        formatarMoeda(subtotalPequenoPrincipe) + "\n";

    resultado +=
        "Harry Potter: " +
        quantidadeHarryPotter + " unidade(s) - " +
        formatarMoeda(subtotalHarryPotter) + "\n\n";

    resultado += "Total sem desconto: " +
        formatarMoeda(total) + "\n";

    resultado += "Desconto: " +
        formatarMoeda(desconto) + "\n";

    resultado += "TOTAL A PAGAR: " +
        formatarMoeda(totalFinal);

    alert(resultado);
}
