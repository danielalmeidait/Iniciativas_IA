const fs = require('fs');
let d = fs.readFileSync('src/data.ts', 'utf8');

// Map each agent id to their strategic objectives
const objectives = {
  'aria':         { margem: "Redução de retrabalho e tempo na concepção de projetos técnicos." },
  'elisa':        { margem: "Redução de 50% no tempo de elaboração de requisitos, com mais foco estratégico." },
  'facto-ia':     { nps: "Melhoria na qualidade técnica das análises de causa.", margem: "Redução no tempo de fechamento de FECOM." },
  'iana':         { nps: "Comunicação proativa com o cliente e prevenção de impactos por manutenção programada." },
  'siria':        { nps: "Análise estruturada de incidentes melhora a confiabilidade da rede.", margem: "Base de conhecimento que previne falhas recorrentes." },
  'check-ia':     { nps: "Segurança nas janelas de manutenção e garantia de que a rede retornou ao estado esperado." },
  'confia':       { margem: "Redução de esforço e tempo na auditoria de configurações de roteadores." },
  'deserth':      { nps: "Identificação proativa de causas de atraso nos atendimentos.", receita: "Apoio na redução de perda de SLA e risco de penalidades." },
  'sentinela':    { nps: "Padronização do atendimento e melhoria direta na qualidade do serviço prestado." },
  'bancodoc':     { margem: "Automação documental reduz esforço manual e tempo de regularização.", receita: "Prevenção de perdas por erros de conformidade documental." },
  'automaton':    { receita: "Redução do risco de perda de prazos, prevenindo penalidades financeiras.", nps: "Cumprimento de prazos estipulados melhora a percepção do cliente." },
  'bia':          { receita: "Foco nos links com maior risco de atraso, garantindo faturamento no prazo e evitando multas." },
  'guara':        { margem: "Otimização expressiva do tempo de análise de viabilidade de projetos, poupando horas de engenharia." },
  'cpe-auto':     { margem: "Maior autonomia técnica e redução de erros.", nps: "Menor tempo de visita técnica e agilidade na entrega do serviço." },
  'fabia':        { margem: "Agilidade na tomada de decisão gerencial com consolidação de status de portfolio." },
  'leia':         { receita: "Redução de riscos financeiros e contratuais na análise de editais.", margem: "Aceleração nas respostas a licitações e redução de esforço da equipe." },
  'cme':          { nps: "Redução do tempo de diagnóstico de falhas massivas, diminuindo o impacto ao cliente." },
  'drrf':         { nps: "Prevenção de isolamento de clientes e incremento na confiabilidade do backbone." },
  'rtv-digital':  { margem: "Economia anual estimada em custos operacionais e eliminação de processos manuais." },
  'irtoa':        { margem: "Diminuição do retrabalho com preenchimento manual.", nps: "Melhor cumprimento de janelas de atendimento agendadas." },
  'istoa':        { nps: "Eliminação do atraso entre a abertura do chamado e o despacho do técnico." },
  'painel-fila':  { nps: "Redução do tempo de espera do cliente final e maior controle da operação." },
  'isa':          { receita: "Aumento considerável nas taxas de recuperação e sugestão de ações direcionadas ao faturamento." },
  'hannah':       { margem: "Ganho expressivo de tempo na formulação de comunicações corporativas rotineiras." },
};

let count = 0;
for (const [id, objs] of Object.entries(objectives)) {
  // Build the strategicObjectives block
  let block = `    strategicObjectives: {\n`;
  if (objs.nps)     block += `      nps: '${objs.nps}',\n`;
  if (objs.receita) block += `      receita: '${objs.receita}',\n`;
  if (objs.margem)  block += `      margem: '${objs.margem}',\n`;
  block += `    },\n`;

  // Find the agent by id and insert after monthlySavingsHours, productivityHighlight, or category line
  // Strategy: find `    category: '...'\n  },` pattern for this specific agent
  // We look for the id string and then find the closing of that object

  // Find position of this agent's id
  const idMarker = `    id: '${id}',`;
  const idPos = d.indexOf(idMarker);
  if (idPos === -1) {
    console.log(`NOT FOUND: ${id}`);
    continue;
  }

  // From idPos, find the next closing `  },` or `  }` followed by newline and `  {` or end of array
  // We look for `    category: 'agent'` or `    category: 'automation'` after idPos
  const segment = d.substring(idPos);
  
  // Find last property before closing brace - we need to insert after it
  // Look for `    category: '...'` possibly followed by `\n    monthlySavingsHours...` or `\n    productivityHighlight...`
  // The closing is always `  },` or `  }` on its own line
  
  // Find the next `  },\n` or `  }\n];` after idPos
  let closeMatch = segment.match(/\n  },?\n/);
  if (!closeMatch) { console.log(`No close found for ${id}`); continue; }
  
  const insertPos = idPos + closeMatch.index;
  d = d.substring(0, insertPos) + '\n' + block.slice(0, -1) + d.substring(insertPos);
  count++;
}

fs.writeFileSync('src/data.ts', d);
console.log(`Done! Inserted strategicObjectives for ${count} agents.`);
