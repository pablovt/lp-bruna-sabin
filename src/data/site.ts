/**
 * Todo o conteúdo da página fica neste arquivo.
 * Itens marcados com TODO ainda dependem de informação da cliente.
 */

/** Mostra as etiquetas "provisório" na página. Desligar antes de publicar. */
export const showDraftMarks = true;

/** Liga a seção de depoimentos. Só ligar quando houver relatos reais e autorizados. */
export const showTestimonials = false;

export const site = {
  name: 'Bruna Sabin',
  role: 'Fisioterapeuta',
  crefito: 'CREFITO\u00a0420.641\u00a0F',
  title: 'Bruna Sabin | Fisioterapia e terapia manual',
  description:
    'Fisioterapia e terapia manual com avaliação individualizada. Mobilização neural, liberação miofascial, técnicas articulares, reabilitação funcional e pilates. Atendimento em consultório e domiciliar.',
};

export const contact = {
  whatsappNumber: '5551998078664',
  whatsappDisplay: '(51) 99807-8664',
  // TODO: mensagem padrão a aprovar com a Bruna
  whatsappMessage: 'Olá, Bruna! Vim pelo seu site e gostaria de agendar uma avaliação.',
  instagramHandle: '@bruunasabin',
  instagramUrl: 'https://www.instagram.com/bruunasabin/',
  email: 'fisiotbrunasabin@gmail.com',
  // TODO: endereço completo do consultório
  address: null as string | null,
  // TODO: horários de atendimento
  hours: null as string | null,
  // TODO: link de incorporação do Google Maps
  mapEmbedUrl: null as string | null,
};

export function whatsappLink(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const hero = {
  headline: ['Cuidar da dor começa por', 'entender o corpo inteiro.'],
  lead: 'Ajudo pessoas a aliviar dores, recuperar movimentos e melhorar sua qualidade de vida por meio de uma abordagem integrada da fisioterapia.',
  facts: ['Sessões de 45 minutos', 'Consultório e domicílio'],
};

export const about = {
  title: ['Terapia manual', 'em primeiro lugar.'],
  paragraphs: [
    'A terapia manual sempre esteve presente nos meus atendimentos. É a base do meu trabalho e o que mais me diferencia.',
    'Ao longo da minha trajetória, busquei aprofundar essas técnicas com novas formações, incorporando abordagens como mobilização neural, liberação miofascial e técnicas articulares.',
    'O resultado é uma abordagem manual integrada, que procura compreender e tratar cada paciente de forma individualizada.',
  ],
  credentials: [
    {
      label: 'Formação',
      items: [
        'Fisioterapeuta',
        'Pós-graduanda em Fisioterapia Ortopédica, com ênfase no tratamento da dor',
      ],
    },
    {
      label: 'Cursos',
      items: [
        'Mobilização e descompressão neural',
        'Liberação miofascial manual, instrumental, craniana e 3D',
      ],
    },
  ],
};

export const services = {
  title: ['Tratamentos e', 'abordagens'],
  lead: {
    name: 'Fisioterapia e terapia manual',
    text: 'É o centro do meu trabalho. As técnicas abaixo não funcionam como um cardápio: elas são combinadas conforme o que a avaliação de cada paciente mostra.',
  },
  items: [
    {
      name: 'Mobilização neural',
      tag: 'Abordagem manual',
      text: 'Técnicas que favorecem a mobilidade do sistema nervoso e auxiliam no tratamento de alterações relacionadas à sensibilidade e ao movimento.',
    },
    {
      name: 'Liberação miofascial',
      tag: 'Abordagem manual',
      text: 'Abordagem direcionada à fáscia e aos tecidos musculares, nas modalidades manual, instrumental, craniana e 3D.',
    },
    {
      name: 'Técnicas articulares',
      tag: 'Abordagem manual',
      text: 'Recursos para trabalhar a mobilidade e a função das articulações.',
    },
    {
      name: 'Eletroterapia',
      tag: 'Recurso complementar',
      text: 'Recursos eletrofísicos usados como complemento no controle da dor e na recuperação funcional.',
    },
    {
      name: 'Reabilitação funcional',
      tag: 'Movimento',
      text: 'Exercícios terapêuticos e estratégias individualizadas para recuperar movimentos e capacidade funcional.',
    },
    {
      name: 'Pilates',
      tag: 'Movimento',
      text: 'Exercícios voltados ao controle corporal, ao fortalecimento, à mobilidade e à melhora da funcionalidade.',
    },
  ],
};

export const audience = {
  title: ['Para quem sente que o corpo', 'já não responde como antes.'],
  intro:
    'Seja nas atividades do dia a dia, no trabalho ou durante a prática de exercícios. Atendo pessoas que convivem com:',
  items: [
    'Dores na coluna, especialmente na lombar, no pescoço, nas costas e nas articulações',
    'Tensões musculares, sensação de rigidez e dificuldade para se movimentar',
    'Formigamentos, desconfortos e limitações nos movimentos',
    'Dores relacionadas ao trabalho, à rotina ou à prática esportiva',
    'Lesões articulares e recuperação pós-operatória',
  ],
  closing:
    'Também atendo quem deseja cuidar do corpo, melhorar a mobilidade e evitar que pequenos desconfortos se tornem limitações maiores.',
};

export const quote = {
  lines: ['O ponto de dor é uma informação.', 'Não necessariamente é o ponto de origem do problema.'],
};

export const process = {
  title: ['Como funciona', 'o atendimento'],
  intro:
    'O corpo funciona de forma integrada. Por isso considero a relação entre os sistemas neural, miofascial e articular antes de escolher qualquer recurso.',
  steps: [
    {
      name: 'Primeiro contato',
      text: 'Você me chama no WhatsApp, conta o que está sentindo e combinamos o melhor horário e local: no consultório ou na sua casa.',
    },
    {
      name: 'Avaliação individualizada',
      text: 'Busco compreender não apenas o local da dor, mas os diferentes fatores que podem estar relacionados a ela.',
    },
    {
      name: 'Tratamento integrado',
      text: 'Associo diferentes recursos terapêuticos conforme as suas necessidades, em sessões de 45 minutos.',
    },
    {
      name: 'Acompanhamento',
      text: 'A cada sessão observo como o corpo respondeu e ajusto o tratamento a partir disso.',
    },
  ],
  closing: ['Tratar bem não é aplicar mais técnicas.', 'É saber quando, onde e por que utilizá-las.'],
  modes: [
    { name: 'Presencial', text: 'No consultório.' },
    { name: 'Domiciliar', text: 'Na sua casa, com o mesmo cuidado.' },
  ],
};

/** TODO: substituir por depoimentos reais, com autorização de cada paciente. */
export const testimonials: { text: string; author: string; context?: string }[] = [];

/**
 * TODO: perguntas e respostas a revisar com a Bruna.
 * `draft: true` mostra a etiqueta de rascunho. `answer: null` mostra "a confirmar".
 */
export const faq: { question: string; answer: string | null; draft?: boolean }[] = [
  {
    question: 'Quanto tempo dura cada sessão?',
    answer: 'Em média 45 minutos.',
  },
  {
    question: 'Onde acontece o atendimento?',
    answer:
      'No consultório ou em domicílio. Combinamos o formato mais adequado para você no primeiro contato.',
  },
  {
    question: 'Como é a primeira consulta?',
    answer:
      'Começa por uma avaliação individualizada. Conversamos sobre a sua queixa e a sua rotina, e avalio o corpo de forma integrada para entender os fatores que podem estar relacionados à dor antes de definir o tratamento.',
  },
  {
    question: 'O que devo levar ou vestir?',
    answer:
      'Roupas confortáveis, que permitam se movimentar. Se tiver exames ou laudos recentes relacionados à queixa, vale trazer.',
    draft: true,
  },
  {
    question: 'Você atende por convênio?',
    answer: null,
    draft: true,
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: null,
    draft: true,
  },
];

export const cta = {
  title: ['Vamos conversar sobre', 'o que você está sentindo?'],
  text: 'Me chame no WhatsApp. Respondo pessoalmente e combinamos a sua avaliação.',
};
