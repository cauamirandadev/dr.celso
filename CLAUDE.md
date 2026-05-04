# CLAUDE.md — Contrato Mestre do Comandante Web

> **Como usar este arquivo:** copie para a raiz de cada projeto novo. Preencha as seções marcadas com `<<PREENCHER>>` na fase de Discovery. Tudo o que **não** está marcado é regra universal e não se altera.

---

## 1. IDENTIDADE DO PROJETO

- **Cliente:** Dr. Celso Pintinha
- **Nicho:** Consultório médico — Ortopedia e Traumatologia
- **Objetivo do site:** Localização e agendamento (primário). Autoridade de marca para captação de pacientes novos (secundário). O site funciona como **GPS digital** que reconecta pacientes antigos da Orthocenter (clínica anterior do médico, ainda ativa juridicamente, mas onde ele não atende mais há 2 anos e 3 meses) com seus locais atuais de atendimento.
- **Persona alvo:** 
  - **Primária:** pacientes antigos do médico (50.000 atendidos em 20+ anos de carreira), 40-70 anos, ainda procuram pela Orthocenter quando vão buscar consulta. Já decidiram consultar — só precisam achar onde ele está.
  - **Secundária:** pacientes novos pesquisando "ortopedista Uberaba" ou especialidades específicas (cirurgia de joelho, prótese de quadril). 30-65 anos.
  - **Geográfica:** ~70% Uberaba, ~30% cidades vizinhas (Sacramento, Pirajuba, Conceição das Alagoas, Igarapava, Delta).
- **Ação primária esperada:** Agendar consulta via WhatsApp da secretária (centraliza os dois locais de atendimento) — com Doctoralia como caminho alternativo.

## 2. GABARITO VISUAL

- **Referência 1 (estética principal):** Site da Dra. Malu (https://dramalumarciliano.com — projeto anterior do designer, com o tom sóbrio que o cliente mencionou apreciar)
- **Referência 2 (layout/estrutura):** Site do Dr. Anderson Dias (ortopedista — referência enviada pelo próprio cliente). **Aproveitar APENAS:** estrutura da página "Agendar Consulta" com cards lado a lado de cada local. **Não copiar:** menu inflado de 8 itens, seção de Depoimentos (proibido por CFM), slogan flowery, dark theme pesado.
- **Referência 3 (microinterações/detalhes):** sites sóbrios de cardiologistas/ortopedistas em capitais — pesquisar e validar com o cliente no Checkpoint 1.
- **Direção estética escolhida:** Minimalista refinado, peer-to-peer profissional. Pense em comunicação visual de cardiologista experiente, não de coach em transformação. Espaços em branco generosos, tipografia clássica, restrição de cores. **Sóbrio sem ser frio. Profissional sem ser corporativo.**
- **Tokens de design:**
  - Primary: `#1E3A5F` (azul-marinho profundo — confiança médica clássica)
  - Secondary: `#2C3E50` (cinza-ardósia — texto principal)
  - Accent: `#B8860B` (dourado discreto — uso mínimo, apenas em detalhes pontuais)
  - Background: `#FFFFFF`
  - Surface: `#FAFAFA` (off-white para seções alternadas e cards)
  - Text-Primary: `#1F2937`
  - Text-Secondary: `#6B7280`
  - Border: `#E5E7EB`
  - Error: `#DC2626`
  - Success: `#059669`
- **Tipografia:** 
  - **Display:** `DM Serif Display` (toque clássico-editorial, peso editorial sem ser pesado, transmite gravidade médica sem ser frio)
  - **Body:** `DM Sans` (legibilidade superior em mobile, peer profissional, evita o look corporativo de Inter/Roboto)
  - **Justificativa para não-Inter:** Inter é o default que comunica "site genérico de SaaS". DM Serif Display + DM Sans transmite gravidade clínica clássica que casa com o briefing do cliente ("sóbrio", "sem glamour", peer-to-peer entre profissionais).

## 3. STACK TÉCNICO

### Decisão deste projeto

| Categoria | Decisão | Justificativa |
|---|---|---|
| Frontend | **Astro + Tailwind CSS** | Site institucional sem dados dinâmicos. Astro entrega zero-JS por padrão, performance Lighthouse > 95 sem esforço, suporte nativo a markdown caso o cliente queira blog futuro. |
| Backend | **Sem backend dedicado** | Formulário de contato via Formspree (gratuito até 50 envios/mês) ou Resend (3.000 e-mails/mês gratuitos). |
| Banco | **Nenhum** | Sem dados persistidos. Conteúdo do site é estático ou via markdown. |
| Auth | **Nenhuma** | Site público, sem área restrita. |
| Hospedagem | **Vercel** | Gratuita para projetos pessoais, deploy contínuo via GitHub, SSL automático, edge network global. Permite deploy previews para os 4 checkpoints. |
| Domínio | **drcelsopintinha.com.br** (a confirmar disponibilidade no Registro.br) | Alternativas: drcelsoortopedia.com.br, drcelsoortopedista.com.br |

### Versões fixadas

```
node: 20.11.x LTS
astro: 4.16.x
tailwindcss: 3.4.x
@tailwindcss/typography: 0.5.15
@astrojs/sitemap: 3.2.x
```

### Integrações externas

- **WhatsApp Click-to-Chat:** `https://wa.me/55[DDD][NUMERO]?text=[MENSAGEM_PRE_PREENCHIDA_URL_ENCODED]`
- **Doctoralia:** link público do perfil do médico (URL a confirmar).
- **Google Maps embed:** dois pinos (Hospital São Marcos e Instituto Sem Dor).
- **Google Analytics 4:** após deploy, configurar para o cliente acompanhar visitas.

## 4. PRINCÍPIOS INVIOLÁVEIS (universais — não editar)

### 4.1 Vibe Coding Disciplinado

1. **Esqueleto antes de músculo.** Nunca pedir "crie o site". Quebrar em micro-entregas: schema → rotas → componentes individuais → integração.
2. **Otimização tardia.** Primeiro funciona, depois otimiza. Não desperdiçar tokens em performance prematura.
3. **Castração da criatividade nociva.** Quando há ambiguidade, perguntar. Quando há regra (este arquivo), seguir.
4. **Logs são oxigênio.** Toda função relevante loga entrada, saída e erro. Nada de `console.log("aqui")`.

### 4.2 Sistema de Grid 8pt (não-negociável)

Todo `padding`, `margin`, `gap`, `width`, `height` é múltiplo de 4 ou 8: **4, 8, 12, 16, 24, 32, 48, 64, 96**. Valores quebrados como `15px`, `23px`, `37px` são proibidos. Em Tailwind: `p-2`, `p-4`, `p-6`, `p-8`, `p-12`, `p-16` — nunca `p-[15px]`.

### 4.3 Estados de interação obrigatórios

Todo elemento clicável precisa de `:hover`, `:focus-visible`, `:active`, `:disabled`. Transições com `transition-all duration-200 ease-out`. Sem exceção.

### 4.4 Acessibilidade (WCAG 2.1 AA)

- Contraste mínimo 4.5:1 em texto normal, 3:1 em texto grande.
- Tags semânticas: `<nav>`, `<main>`, `<article>`, `<button>`. **Nunca** `<div onClick>`.
- `aria-label` em ícones sem texto. `sr-only` em descrições para leitores de tela.
- Navegação 100% via teclado. `:focus-visible` sempre visível.

### 4.5 Segurança (Defense in Depth)

- **Variáveis de ambiente:** toda credencial em `.env`. `.env` no `.gitignore`. Nunca em código.
- **Inputs:** validação no backend com schema (Zod, Joi). Sanitização de HTML quando aceitar texto rico.
- **Headers:** Helmet (Node) ou equivalente. CSP configurado.
- **Cookies:** `httpOnly`, `secure`, `sameSite: strict` em sessão.
- **CSRF:** token em todo POST que altera estado.
- **Rate limit:** em endpoints públicos (login, contato, signup).
- **Antes do deploy:** rodar checklist de hardening (Skill `/security-audit` quando criada).

### 4.6 Conformidade CFM (específico para este projeto — médico brasileiro)

**Resolução CFM 1.974/2011 — não-negociável para sites médicos:**

**PROIBIDO:**
- Depoimentos de pacientes (mesmo se o cliente pedir)
- Imagens "antes e depois" de procedimentos
- Promessas de resultado
- Imagens de pacientes identificáveis (rosto, tatuagem visível, prontuário em raio-x, etc.)
- Marketing comparativo com outros médicos

**OBRIGATÓRIO:**
- Identificação do diretor técnico ou responsável técnico em local visível (rodapé é o padrão), com nome completo e CRM.
- Política de Privacidade (LGPD).
- Banner de consentimento de cookies (LGPD).

## 5. FLUXO OBRIGATÓRIO

```
DISCOVERY → ARQUITETURA → ASSETS → CÓDIGO → POLISH → DEPLOY
```

### Fase 1 — Discovery [✓ CONCLUÍDA]

Saída: este `CLAUDE.md` com seções 1, 2 e 3 preenchidas. Discovery completa documentada em `docs/discovery.md`.

### Fase 2 — Arquitetura [PRÓXIMA FASE]

- Lista de rotas/páginas (5 páginas confirmadas: Home, Sobre, Especialidades, Agendar/Locais, Contato).
- Lista de componentes principais.
- Estrutura de pastas explícita.

Salvar em `/docs/arquitetura.md`.

### Fase 3 — Assets visuais (Nano Banana Pro via Flow)

Antes de codar a hero, gerar:
- Hero image (sóbria, ambiente médico, sem people-stock genéricos)
- Ilustrações brand-aligned (se necessário) — preferir ícones lineares simples a ilustrações complexas
- Mockups dos locais (caso o cliente não envie fotos das fachadas a tempo)

Salvar em `/public/assets/` com nomes semânticos (`hero-main.webp`, `local-sao-marcos.webp`, etc.).

### Fase 4 — Código (invocar Skill `frontend-design`)

Ordem: tokens (CSS variables) → layout base → componentes → páginas → integração.

**4 Checkpoints comprometidos com o cliente:**

1. **Checkpoint 1 — Estrutura inicial (dia 2-3 após receber materiais):** Wireframe HTML simples sem styling refinado, mostrando organização das páginas e blocos. Deploy preview no Vercel.

2. **Checkpoint 2 — Versão visual (dia 6-7):** Página inicial com design completo aplicado. Aprovação do estilo antes de aplicar nas outras páginas.

3. **Checkpoint 3 — Versão de revisão (dia 11-12):** Site completo, todas as páginas, em deploy preview para revisão final do cliente.

4. **Checkpoint 4 — Versão final (dia 14-15):** Após ajustes do cliente, site final pronto para colocar no ar.

### Fase 5 — Polish

Auto-revisão crítica antes de entregar:
- [ ] Todos os múltiplos de 8?
- [ ] Estados de interação em tudo clicável?
- [ ] Mobile (320px, 375px, 768px) testado?
- [ ] Contraste validado?
- [ ] Lighthouse > 90 em Performance, A11y, Best Practices, SEO?
- [ ] Imagens otimizadas (WebP, lazy loading)?
- [ ] Meta tags completas (title, description, OG)?
- [ ] Schema.org `Physician` em JSON-LD com nome, CRM, especialidade, endereços, telefones, horários?
- [ ] Diretor técnico identificado no rodapé?
- [ ] Política de Privacidade publicada?
- [ ] Banner de consentimento de cookies funcional?

### Fase 6 — Deploy

Configurar antes do primeiro deploy: domínio (Registro.br + DNS no Vercel), SSL automático (Vercel), env vars de produção, monitoramento básico (UptimeRobot ou similar). CI/CD via GitHub + Vercel (deploy automático no push para main, deploy preview em branches).

## 6. SKILLS DISPONÍVEIS

| Skill | Quando invocar |
|---|---|
| `discovery-cliente` | ✓ Já invocada (Fase 1 concluída) |
| `frontend-design` | Sempre que for criar componente, página ou estilizar UI |

## 7. ANTI-PADRÕES (rejeitar imediatamente)

- ❌ Gradientes roxos em fundo branco (clichê de IA).
- ❌ Fontes Inter/Roboto/Arial sem justificativa do briefing.
- ❌ Componente shadcn copiado sem ajuste de tokens do projeto.
- ❌ "Lorem ipsum" em entrega final.
- ❌ Imagens stock genéricas de "equipe sorrindo".
- ❌ Hero com "Bem-vindo ao [empresa]". Hero comunica VALOR, não saudação.
- ❌ Footer com 47 links inúteis. Footer enxuto.
- ❌ `<div>` com `onClick`. Use `<button>`.
- ❌ Animação que dura mais de 400ms sem motivo.
- ❌ Carrossel automático sem controle do usuário (a11y).

### Anti-padrões específicos deste projeto (cliente foi explícito)

- ❌ Texto longo. Cliente disse: *"ninguém lê", "eu não leio", "tem que ser objetivo"*. Frases máximas: 12-15 palavras. Parágrafos máximos: 4 frases.
- ❌ Linguagem flowery. Frases proibidas: *"cuidado humanizado aliado à tecnologia de ponta"*, *"excelência em atendimento"*, *"compromisso com a saúde"*. Frases sugeridas: *"Ortopedista em Uberaba. 20 anos de prática clínica."* / *"Cirurgia de joelho. Prótese de quadril. Traumatologia."*
- ❌ Menu com mais de 5 itens.
- ❌ Seção de "Depoimentos" (proibido por CFM).
- ❌ Imagens "antes e depois" (proibido por CFM).
- ❌ Dark theme pesado. Cliente prefere paleta clara e sóbria.
- ❌ Ícones de redes sociais piscando, animações exageradas, qualquer "wow effect".

## 8. TOM DE COMUNICAÇÃO

Direto, sênior, cirúrgico. Sem floreio. Sem "claro!", "ótima pergunta!", "com prazer!". Resposta começa pela ação ou pela informação. Quando houver ambiguidade no pedido, perguntar — não inventar.
