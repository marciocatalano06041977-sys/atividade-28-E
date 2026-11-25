// 1. Cria a lista chamados contendo 3 objetos
const chamados = [
    {
        id: 101,
        cliente: "Empresa Marcio",
        resolvido: false,
        historico: [
            "Chamado aberto",
            "Técnico atribuído",
            "Diagnóstico de rede em andamento"
        ]
    },
    {
        id: 102,
        cliente: "Mercado Catalano",
        resolvido: true,
        historico: [
            "Chamado aberto",
            "Impressora térmica configurada",
            "Atendimento concluído"
        ]
    },
    {
        id: 103,
        cliente: "Clínica Valinhos",
        resolvido: false,
        historico: [
            "Chamado aberto",
            "Aguardando peça de substituição"
        ]
    }
];

// 2. Percorre os chamados e exibe apenas os que ainda não foram resolvidos
for (let i = 0; i < chamados.length; i = i + 1) {
    const chamadoAtual = chamados[i];

    // Filtra apenas chamados com resolvido === false
    if (chamadoAtual.resolvido === false) {
        console.log("=== Chamado #" + chamadoAtual.id + " | Cliente: " + chamadoAtual.cliente + " ===");

        // 3. Loop interno para percorrer o histórico do chamado atual
        for (let j = 0; j < chamadoAtual.historico.length; j = j + 1) {
            console.log("  - " + chamadoAtual.historico[j]);
        }
    }
}
