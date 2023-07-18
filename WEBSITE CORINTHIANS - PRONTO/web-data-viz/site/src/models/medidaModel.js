var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

        instrucaoSql = `select Acertos, 
                    Erros
                    from Resultado
                    where fkUsuario = ${idUsuario}
                    order by idResultado desc limit ${limite_linhas}`
                    ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    instrucaoSql = `select Acertos, 
                Erros
                from Resultado
                where fkUsuario = ${idUsuario}
                order by idResultado desc limit 7
                `;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
