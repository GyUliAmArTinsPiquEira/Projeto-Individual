var database = require("../database/config");

function buscarUltimasMedidas1(idUsuario) {

    instrucaoSql = ''

    instrucaoSql = `select Acertos, 
                    Erros
                    from Resultado
                    where fkUsuario = ${idUsuario}
                    order by idResultado desc limit 1`
        ;

    console.log("Executando a instrução SQL buscar medidas: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal1(idUsuario) {

    instrucaoSql = ''

    instrucaoSql = `select Acertos, 
                Erros
                from Resultado
                where fkUsuario = ${idUsuario}
                order by idResultado desc limit 1
                `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas1,
    buscarMedidasEmTempoReal1
}
