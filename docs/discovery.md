# BRIEFING DO PROJETO — Site Médico Dr. Celso Pintinha

## 1. RESUMO EXECUTIVO

Site profissional de ortopedista em Uberaba/MG. **Não é um site de marketing — é um sistema de localização e agendamento.** O cliente é um médico de 20+ anos de carreira com 50.000 pacientes na vida profissional. O problema central que o site resolve é simples: pacientes antigos ainda procuram o médico no endereço da clínica anterior (Orthocenter) e se perdem. O site funciona como **GPS digital** que reconecta esses pacientes com o profissional.

## 2. PERFIL DO CLIENTE

**Dr. Celso Pintinha**
- Ortopedista e Traumatologista
- 20+ anos de prática
- Em Uberaba/MG
- Dono da Orthocenter (clínica anterior, ainda ativa juridicamente)
- Mudou-se da Orthocenter para os locais atuais há 2 anos e 3 meses

**Tom comunicacional do cliente (extraído de transcrição da reunião):**
- Detesta texto longo. Citações textuais: *"ninguém lê", "eu não leio", "tem que ser objetivo"*.
- Rejeita linguagem flowery. Citação: *"sem glamour, coisa básica e rápida pra ler"*.
- Prefere frases curtas, diretas, do tipo: *"Ortopedista. Cirurgia de joelho. Prótese de quadril. Pronto."*
- É de geração mais velha — *"sou mais antigo"* (palavras dele).
- Confia mais em registro peer-to-peer profissional do que em marketing.

## 3. PÚBLICO-ALVO

**Primário (foco do site):** pacientes antigos da Orthocenter ainda perdidos, pesquisando "Celso Pintinha" no Google. Esses pacientes JÁ DECIDIRAM consultar com ele — só precisam saber onde ele está.

**Secundário:** pacientes novos pesquisando "ortopedista Uberaba" ou especialidades específicas. Para esses, o site precisa transmitir credibilidade rapidamente.

**Geográfico:** ~70% Uberaba, ~30% cidades vizinhas (Sacramento, Pirajuba, Conceição das Alagoas, Igarapava, Delta).

## 4. ESTRUTURA DO SITE (aprovada pelo cliente)

5 páginas, na ordem de prioridade:

### 4.1 Home (Página 1) — `/`
- Hero com **nome do médico em destaque**, especialidade, e **botão "Agendar Consulta" visível sem rolar**
- Seção curta de especialidades em ícones ou cards (3-7 especialidades)
- Cards resumidos dos dois locais de atendimento com link para a página completa
- CTA secundário "Conheça o Médico" levando à página Sobre

### 4.2 Agendar Consulta (Página 2) — `/agendar`
**Esta é a página estratégica mais importante depois da home.** O cliente descreveu literalmente: *"Segunda página para marcar consulta já tem os locais e horário e localização."*

Layout: duas colunas (em desktop). Em mobile, empilhado.

- Coluna esquerda — "Informações Importantes":
  - Card individual para Hospital São Marcos: ícone, dias, endereço, sala/andar, telefone fixo
  - Card individual para Instituto Sem Dor: ícone, dias, endereço, sala/andar, telefone fixo
  - Mapa com pinos das duas localizações (Google Maps embed)
- Coluna direita — "Como Agendar":
  - Botão grande **WhatsApp** com mensagem pré-preenchida (vai para a secretária do Instituto Sem Dor — ela centraliza agendamento dos dois locais)
  - Botão grande **Doctoralia** (caminho alternativo)
  - Texto curto explicando que ambos os caminhos resolvem para os dois locais

### 4.3 Sobre (Página 3) — `/sobre`
- Foto profissional do médico
- Currículo em formato curto (formação, residência, especializações em 2-3 frases)
- Anos de prática
- Membro da SBOT (e outras sociedades, conforme materiais enviados)
- **Mencionar discretamente "fundador da Orthocenter"** se o cliente aprovar (decisão pendente no formulário) — útil para pacientes antigos confirmarem que é o médico que procuram

### 4.4 Especialidades (Página 4) — `/especialidades`
Lista das especialidades com descrição **objetiva e curta** de cada uma (1-2 frases por especialidade, máximo).

Especialidades a incluir:
- Cirurgia de joelho
- Prótese de quadril
- Prótese de joelho
- Cirurgia de ligamento
- Artroscopia de joelho
- Traumatologia
- Ortopedia geral

### 4.5 Contato (Página 5) — `/contato`
- Endereços completos dos dois locais
- Telefones fixos
- Botão WhatsApp
- Botão Doctoralia
- Mapa
- E-mail (a confirmar)

## 5. NAVEGAÇÃO (menu)

Máximo 5 itens. **Não criar menu inflado** (cliente foi explícito: "ninguém lê", "sem glamour"):

```
Home  |  Sobre  |  Especialidades  |  Locais  |  Contato
```

Mais um botão CTA persistente "Agendar Consulta" no canto superior direito do menu, em destaque visual.

## 6. INTEGRAÇÕES DE AGENDAMENTO

### 6.1 Botão WhatsApp
- Aparece em **todas as páginas** (versão fixa, persistent CTA)
- Direciona para o número da secretária do Instituto Sem Dor (a confirmar — pendente)
- Usa link `https://wa.me/55[DDD][NUMERO]?text=[MENSAGEM_PRE_PREENCHIDA_URL_ENCODED]`
- Mensagem pré-preenchida sugerida: *"Olá, gostaria de marcar uma consulta com o Dr. Celso Pintinha. Local de preferência: ___"*

### 6.2 Link Doctoralia
- Aparece nas páginas Home, Agendar e Contato
- URL pública do perfil dele no Doctoralia (a obter — pendente)
- Apresentado como caminho alternativo, não como concorrente do WhatsApp

## 7. CONFORMIDADE CFM (CRÍTICO)

**Resolução CFM 1.974/2011 — atenção a estas normas obrigatórias para sites médicos:**

### 7.1 PROIBIDO no site
- **Depoimentos de pacientes** (mesmo que o cliente peça)
- **Imagens "antes e depois"** de procedimentos
- **Promessas de resultado** ("garantimos", "sucesso garantido", etc.)
- **Imagens de pacientes identificáveis** (rosto, tatuagem visível, número de prontuário em chapa de raio-x, etc.)
- **Marketing comparativo** com outros médicos

### 7.2 PERMITIDO
- Foto profissional do médico
- Foto do equipamento médico
- Foto do consultório
- Raios-X **sem dados identificáveis** (pode ter o osso/articulação, não pode ter nome do paciente, número de prontuário, data identificável)
- Foto do médico operando, **desde que paciente não seja identificável** (rosto coberto, ângulo que não mostra paciente, ou foto só do procedimento)

### 7.3 OBRIGATÓRIO
- **Identificação do diretor técnico ou responsável técnico** em local visível (rodapé é o padrão), com nome completo e CRM. Para o Instituto Sem Dor: provavelmente o próprio Dr. Celso. Para Hospital São Marcos: outro profissional (verificar com ele — pendente no formulário).
- Especialidade reconhecida pelo CFM com Registro de Qualificação de Especialista (RQE), se aplicável.
- Política de privacidade (LGPD).
- Consentimento de cookies (LGPD).

## 8. IDENTIDADE VISUAL

### 8.1 Tom geral
**Sóbrio, profissional, peer-to-peer.** Pense em comunicação visual de cardiologista experiente, não de coach em transformação. Espaços em branco generosos, tipografia legível, restrição de cores.

### 8.2 Paleta sugerida (escolha uma direção)

**Direção A — Clássica médica (recomendada para esse cliente):**
- Fundo: branco (#FFFFFF) ou off-white (#FAFAFA)
- Texto principal: cinza-ardósia (#2C3E50) ou preto suave (#1F2937)
- Acento principal: azul-marinho profundo (#1E3A5F) ou verde-petróleo (#0F4C5C)
- Acento secundário: dourado discreto (#B8860B) — opcional, para detalhes mínimos

**Direção B — Sóbrio moderno:**
- Fundo: branco com seções off-white
- Texto: cinza-grafite (#374151)
- Acento: índigo (#4F46E5) ou teal (#0F766E)

**EVITAR:**
- Dark theme pesado (referência Dr. Anderson Dias usou e é inadequado para o tom desse cliente)
- Cores neon, vibrantes ou "tech"
- Gradientes pesados
- Excesso de tons (não mais que 3 cores no total)

### 8.3 Tipografia

- **Display/Títulos:** sans-serif elegante. Inter, DM Sans, Lato, ou Manrope. Não usar fonte "tech" (Space Grotesk, Geist) — não casa com o tom.
- **Corpo:** sans-serif legível. A mesma do display em peso regular pode funcionar, ou pode mixar com uma serif legível (Lora, Source Serif).
- **Tamanhos:** corpo mínimo 16px. Títulos generosos. Hierarquia clara.

### 8.4 Layout
- Mobile-first (cliente disse que muitos pacientes pesquisam pelo celular)
- Espaços em branco generosos
- Cards com sombra sutil (não dramatic shadow)
- Botões claros, sem efeitos exagerados (sem hover bounce, sem glow)
- Navegação fixa no topo
- Footer simples com endereços, contatos, política de privacidade, e identificação do diretor técnico

## 9. COPYWRITING — REGRAS

### 9.1 Frases sugeridas (uso recomendado)
- *"Ortopedista em Uberaba. 20 anos de prática clínica."*
- *"Cirurgia de joelho. Prótese de quadril. Traumatologia."*
- *"Atendimento no Hospital São Marcos e no Instituto Sem Dor."*
- *"Marque sua consulta no WhatsApp ou pelo Doctoralia."*

### 9.2 Frases proibidas (NÃO usar)
- *"Cuidado humanizado aliado à tecnologia de ponta"*
- *"Excelência em atendimento"*
- *"Compromisso com a sua saúde"*
- *"Transformamos vidas"*
- Qualquer slogan vago ou genérico

### 9.3 Tamanho ideal de cada bloco de texto
- Hero principal: máximo 12 palavras
- Subtítulo do hero: máximo 15 palavras
- Cards de especialidade: 1-2 frases
- Bio do médico (página Sobre): máximo 4 frases
- Descrição de cada especialidade: máximo 2 frases

## 10. REFERÊNCIA APROVADA PELO CLIENTE

**Dr. Anderson Dias** (ortopedista) — site que o cliente enviou como referência.

**Aproveitar dessa referência:**
- Estrutura da página "Agendar Consulta" com cards lado a lado (informações de cada local + formulário/botões de contato)
- Botão "Agendar Consulta" persistente no menu superior
- Cards individuais para cada local com ícones, dias, endereço e telefone

**NÃO copiar dessa referência:**
- Menu com 8 itens (excessivo — manter máximo 5)
- Seção "Depoimentos" (proibido por CFM)
- Slogan flowery "Cuidado humanizado aliado à tecnologia de ponta"
- Dark theme pesado (não combina com o cliente)
- Seções "Tecnologias", "Produções Científicas" e "Premiações" como itens de menu separados

## 11. CONTEÚDO PENDENTE (a ser fornecido pelo cliente)

Estes itens estão num formulário Tally ou virão por WhatsApp:

- [ ] CRM completo (CRM-MG XXXXX)
- [ ] Currículo em formato curto (1-2 frases)
- [ ] Anos exatos de atuação
- [ ] Endereço completo do Hospital São Marcos (rua, número, bairro, sala/andar)
- [ ] Endereço completo do Instituto Sem Dor (idem)
- [ ] Dias e horários específicos em cada local
- [ ] Telefones fixos dos locais
- [ ] Convênios atendidos em cada local
- [ ] WhatsApp da secretária do Instituto (com DDD)
- [ ] Link do Doctoralia
- [ ] Diretor técnico do Hospital São Marcos
- [ ] Decisão sobre mencionar Orthocenter
- [ ] Sociedades médicas que faz parte (ex: SBOT)
- [ ] Fotos das fachadas, recepções e consultórios dos dois locais

**Materiais já fornecidos:**
- Foto profissional do médico (várias ângulos)
- Foto do badge da equipe médica do São Marcos
- Foto em conferência médica
- Raio-X de quadril com prótese (verificar se tem dados identificáveis antes de usar)
- Raio-X de joelhos com prótese (idem)
- Foto de cirurgia (verificar identificação do paciente — provavelmente desfocar área do paciente)

## 12. STACK TÉCNICO RECOMENDADO

**Opção A — Simples (recomendada se for primeiro projeto desse porte):**
- HTML + CSS + JavaScript vanilla
- Hospedagem em Vercel ou Netlify (deploy gratuito)
- Domínio próprio (drcelsopintinha.com.br ou similar) registrado em Registro.br

**Opção B — Mais robusta:**
- Next.js (App Router) ou Astro
- Tailwind CSS para estilo
- Deploy em Vercel
- shadcn/ui para componentes (se Next.js)

**Para escolher:** vai depender do que o desenvolvedor (você) tem mais conforto. **Opção B oferece melhor SEO e performance**, mas exige mais setup. **Opção A é mais direta e suficiente** para o porte do projeto.

### 12.1 Requisitos técnicos não-negociáveis
- Mobile-responsive (mobile-first)
- Carregamento rápido (Lighthouse > 90)
- SEO básico bem feito (meta tags, schema.org `Physician`, Open Graph)
- HTTPS (SSL — automático com Vercel/Netlify)
- Acessibilidade básica (alt em imagens, contraste WCAG AA)
- Performance otimizada (imagens em WebP, lazy loading)

### 12.2 SEO local — pontos críticos
- Schema.org `Physician` no JSON-LD com:
  - Nome
  - Especialidade
  - CRM
  - Endereços dos dois locais
  - Telefones
  - Horários
- Meta description focada em "Dr. Celso Pintinha + Ortopedista + Uberaba"
- Title tag com nome próprio (foco principal de busca)
- H1 com nome próprio na home
- Imagens com alt incluindo "Dr. Celso Pintinha" quando aplicável

## 13. ESTRUTURA DE PASTAS SUGERIDA

```
dr-celso-pintinha-site/
├── public/
│   ├── images/
│   │   ├── doctor/
│   │   ├── locations/
│   │   ├── procedures/
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── index.html (ou index.tsx)
│   │   ├── sobre.html
│   │   ├── especialidades.html
│   │   ├── agendar.html
│   │   └── contato.html
│   ├── components/
│   │   ├── Header.html
│   │   ├── Footer.html
│   │   ├── WhatsAppButton.html
│   │   └── LocationCard.html
│   ├── styles/
│   │   └── main.css (ou tailwind.css)
│   └── scripts/
│       └── main.js
├── README.md
└── package.json (se houver build)
```

## 14. CHECKPOINTS COMPROMETIDOS COM O CLIENTE

O profissional se comprometeu com **4 checkpoints** durante o desenvolvimento:

1. **Checkpoint 1 — Estrutura inicial (dia 2-3 após receber materiais):** Wireframe simples (HTML sem styling refinado), mostrando organização das páginas e blocos. Apresentado em link temporário.

2. **Checkpoint 2 — Versão visual (dia 6-7):** Página inicial com design completo aplicado, para aprovar a linguagem visual antes de aplicar em todas as páginas.

3. **Checkpoint 3 — Versão de revisão (dia 11-12):** Site completo, todas as páginas, em link temporário para revisão.

4. **Checkpoint 4 — Versão final (dia 14-15):** Após ajustes do cliente, site final pronto para colocar no ar.

Cada checkpoint deve ser apresentado em link temporário (Vercel preview, Netlify deploy preview, ou similar — não em link permanente público).

## 15. DOMÍNIO E HOSPEDAGEM

**Domínios candidatos** (a confirmar disponibilidade no Registro.br):
1. drcelsopintinha.com.br
2. drcelsoortopedia.com.br
3. drcelsoortopedista.com.br
4. ortopedistauberaba.com.br

**Hospedagem:** Vercel (gratuita para projetos pessoais, ideal para este porte) ou Netlify. Configurar SSL automático.

**E-mail profissional** (opcional, mas recomendado): contato@drcelsopintinha.com.br via Google Workspace (R$ 30/mês) ou Zoho Mail (gratuito até 5 usuários).

## 16. PRÓXIMOS PASSOS

Para o desenvolvedor (Claude Code):

1. Criar a estrutura de pastas conforme seção 13.
2. Criar wireframe HTML inicial para todas as 5 páginas (sem CSS refinado ainda) — esse é o **Checkpoint 1**.
3. Apresentar wireframe ao cliente.
4. Após aprovação, aplicar styling completo na home — **Checkpoint 2**.
5. Após aprovação do estilo, aplicar nas outras páginas — **Checkpoint 3**.
6. Aplicar ajustes do cliente — **Checkpoint 4**.
7. Deploy em domínio definitivo.

## 17. OBSERVAÇÕES FINAIS

**O cliente escolheu o web designer para um projeto que ele cuida muito.** Não é um site qualquer — é o que vai recuperar parte de uma carreira de 20 anos para pacientes antigos. A reputação do desenvolvedor depende de capturar exatamente o que ele expressou:

- Site sóbrio
- Foco em localização e agendamento
- Nada de "glamour"
- Frases curtas
- Caminho rápido até a marcação de consulta
- Credibilidade transmitida pela contenção, não pela exuberância

Quando em dúvida sobre uma decisão de design ou copywriting, perguntar: *"isso ajuda o paciente a encontrar e marcar com o Dr. Celso de forma simples?"* Se sim, mantém. Se não, descarta.
