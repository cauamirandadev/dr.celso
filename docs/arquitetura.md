# Arquitetura — Site Dr. Celso Pintinha

> **Status:** Fase 2 — Arquitetura  
> **Stack:** Astro 4.16.x + Tailwind CSS 3.4.x + Vercel  
> **Gerado em:** 2026-05-01

---

## 1. ROTAS E PÁGINAS

| Rota | Arquivo | Propósito | Prioridade |
|---|---|---|---|
| `/` | `src/pages/index.astro` | Hero com CTA de agendamento + prévia de especialidades e locais. Porta de entrada para todos os fluxos. | Alta |
| `/agendar` | `src/pages/agendar.astro` | **Página estratégica principal.** Cards dos dois locais (endereço, dias, horários, telefone) + mapa embed + botões WhatsApp e Doctoralia. | Crítica |
| `/sobre` | `src/pages/sobre.astro` | Foto profissional + currículo curto + CRM + sociedades médicas. Credibilidade peer-to-peer. | Média |
| `/especialidades` | `src/pages/especialidades.astro` | Grid de especialidades com descrição objetiva (1-2 frases cada). SEO long-tail por especialidade. | Média |
| `/contato` | `src/pages/contato.astro` | Endereços completos, telefones, mapa, botões de agendamento, e-mail. Redundância de contato. | Média |
| `/privacidade` | `src/pages/privacidade.astro` | Política de Privacidade (LGPD obrigatória). Não aparece no menu, mas linkada no rodapé. | Obrigatória |

### Notas de rota
- Não há SSR nem API routes — site 100% estático.
- URLs em português (slug semântico para SEO local).
- `sitemap.xml` gerado automaticamente pelo `@astrojs/sitemap`.

---

## 2. COMPONENTES PRINCIPAIS

### 2.1 Layout (`src/components/layout/`)

| Componente | Props | Descrição |
|---|---|---|
| `Header.astro` | `currentPath: string` | Barra de navegação fixa. Logo/nome à esquerda. Links centrais (5 itens). Botão "Agendar Consulta" à direita em destaque. Hambúrguer em mobile. |
| `Footer.astro` | — | Rodapé enxuto. Endereços resumidos dos dois locais. Links de privacidade e CFM. **Identificação do diretor técnico com nome e CRM (obrigatório CFM).** Copyright. |

### 2.2 UI Reutilizável (`src/components/ui/`)

| Componente | Props | Descrição |
|---|---|---|
| `WhatsAppButton.astro` | `phone: string`, `message?: string`, `variant: 'floating' \| 'inline' \| 'large'` | Botão WhatsApp com link `wa.me`. Versão `floating` aparece em todas as páginas (canto inferior direito). Versões `inline`/`large` usadas na página `/agendar`. |
| `CTAButton.astro` | `href: string`, `label: string`, `variant: 'primary' \| 'secondary' \| 'ghost'`, `external?: boolean` | Botão genérico reutilizável. `primary` = azul-marinho. `secondary` = borda. Sempre `<a>` ou `<button>` semântico. |
| `LocationCard.astro` | `name: string`, `address: string`, `schedule: string[]`, `phone: string`, `mapsUrl: string` | Card de local de atendimento. Usado em `/agendar` e `/contato`. Ícones de localização, relógio e telefone. |
| `SpecialtyCard.astro` | `name: string`, `description: string`, `icon?: string` | Card de especialidade. Nome + 1-2 frases descritivas. Ícone SVG linear simples. |
| `SectionTitle.astro` | `title: string`, `subtitle?: string` | Título de seção padronizado. DM Serif Display no título, DM Sans no subtítulo. |

### 2.3 Sections da Home (`src/components/sections/`)

| Componente | Props | Descrição |
|---|---|---|
| `Hero.astro` | — | Hero principal. Nome do médico em DM Serif Display grande. Especialidade e cidade. Dois botões CTA primários (WhatsApp + Doctoralia). Foto profissional à direita (desktop). |
| `SpecialtiesPreview.astro` | — | Grid 2x3 ou 3x2 com as 6 principais especialidades usando `SpecialtyCard`. Link "ver todas" para `/especialidades`. |
| `LocationsPreview.astro` | — | Dois `LocationCard` em colunas (desktop) ou empilhados (mobile). Link para `/agendar`. |
| `AboutTeaser.astro` | — | Bloco curto com foto + 2 frases de credenciais + CTA "Saiba mais". |

### 2.4 Sections de páginas internas (`src/components/sections/`)

| Componente | Props | Descrição |
|---|---|---|
| `SchedulingLayout.astro` | — | Layout de duas colunas da página `/agendar`: informações dos locais à esquerda, como agendar à direita. |
| `MapEmbed.astro` | `src: string`, `title: string` | Wrapper para o iframe do Google Maps com aspect ratio fixo e lazy loading. |
| `SpecialtiesGrid.astro` | — | Grid completo de todas as 7 especialidades para a página `/especialidades`. |
| `DoctorProfile.astro` | — | Seção completa com foto, bio, formação, CRM, sociedades. Usada em `/sobre`. |
| `CookieConsent.astro` | — | Banner LGPD de consentimento de cookies. Aparece no `BaseLayout`. Estado salvo em localStorage. |

---

## 3. LAYOUTS (`src/layouts/`)

| Arquivo | Descrição |
|---|---|
| `BaseLayout.astro` | Layout raiz. Injeta `<head>` (meta tags, fontes, favicon, JSON-LD), `Header`, `Footer`, `WhatsAppButton` flutuante e `CookieConsent`. Aceita prop `title`, `description`, `ogImage`. |

---

## 4. ESTRUTURA DE PASTAS

```
dr-celso-pintinha/                    ← raiz do projeto
├── CLAUDE.md                          ← contrato mestre (não editar)
├── docs/
│   ├── discovery.md                   ← briefing completo
│   └── arquitetura.md                 ← este arquivo
│
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── doctor/                    ← fotos profissionais do médico
│       │   ├── dr-celso-hero.webp     ← foto principal para o hero
│       │   ├── dr-celso-perfil.webp   ← foto para página Sobre
│       │   └── dr-celso-cirurgia.webp ← foto de cirurgia (verificar CFM)
│       ├── locations/                 ← fotos dos locais de atendimento
│       │   ├── sao-marcos-fachada.webp
│       │   ├── sao-marcos-recepcao.webp
│       │   ├── sem-dor-fachada.webp
│       │   └── sem-dor-recepcao.webp
│       ├── procedures/                ← imagens de procedimentos (sem dados de paciente)
│       │   ├── rx-protese-quadril.webp
│       │   └── rx-protese-joelho.webp
│       └── icons/                     ← ícones SVG customizados (se necessário)
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── ui/
│   │   │   ├── WhatsAppButton.astro
│   │   │   ├── CTAButton.astro
│   │   │   ├── LocationCard.astro
│   │   │   ├── SpecialtyCard.astro
│   │   │   ├── SectionTitle.astro
│   │   │   └── CookieConsent.astro
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── SpecialtiesPreview.astro
│   │       ├── LocationsPreview.astro
│   │       ├── AboutTeaser.astro
│   │       ├── SchedulingLayout.astro
│   │       ├── MapEmbed.astro
│   │       ├── SpecialtiesGrid.astro
│   │       ├── DoctorProfile.astro
│   │       └── CookieConsent.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sobre.astro
│   │   ├── especialidades.astro
│   │   ├── agendar.astro
│   │   ├── contato.astro
│   │   └── privacidade.astro
│   │
│   └── styles/
│       └── global.css                 ← imports de fontes + @tailwind directives + CSS vars
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 5. MAPA DE ASSETS VISUAIS

### 5.1 Assets já fornecidos pelo cliente

| Asset | Status | Ação necessária |
|---|---|---|
| Foto profissional do médico (vários ângulos) | ✅ Recebido | Selecionar melhor ângulo, converter para `.webp`, otimizar para hero (~800px) e perfil (~400px) |
| Foto do badge da equipe médica do São Marcos | ✅ Recebido | Usar na seção São Marcos em `/agendar` ou `/sobre` |
| Foto em conferência médica | ✅ Recebido | Usar opcionalmente em `/sobre` como credencial |
| Raio-X de quadril com prótese | ✅ Recebido | **Verificar CFM:** remover qualquer dado identificável antes de usar |
| Raio-X de joelhos com prótese | ✅ Recebido | Idem |
| Foto de cirurgia | ✅ Recebido | **Verificar CFM:** cobrir/desfocar face e dados do paciente se visíveis |

### 5.2 Assets pendentes (do cliente)

| Asset | Status | Onde usar |
|---|---|---|
| Foto fachada Hospital São Marcos | ⏳ Pendente | `/agendar`, `/contato`, `LocationCard` |
| Foto fachada Instituto Sem Dor | ⏳ Pendente | `/agendar`, `/contato`, `LocationCard` |
| Foto recepção / consultório dos dois locais | ⏳ Pendente | Opcional — background sutil ou galeria |

### 5.3 Assets a gerar (Fase 3 — antes de codar o Hero)

| Asset | Formato | Uso |
|---|---|---|
| Hero background sutil | `.webp` 1920×1080 | Fundo do hero — ambiente médico abstrato, sem pessoas genéricas |
| Ícones de especialidades | `.svg` 48×48 | 7 ícones lineares: joelho, quadril, ligamento, artroscopia, traumatologia, etc. |
| Favicon | `.svg` + `.ico` | Tab do navegador — idealmente símbolo minimalista (iniciais ou símbolo médico) |
| OG Image | `.png` 1200×630 | Open Graph para compartilhamento social |

### 5.4 Convenção de nomenclatura e otimização

- Formato: `.webp` (todos os assets rasterizados)
- Nomes: `kebab-case`, descritivos (`dr-celso-hero.webp`, não `IMG_2847.jpg`)
- Fotos do médico: máximo 150kB por arquivo depois de otimizadas
- Hero background: máximo 200kB
- Ícones: SVG inline nos componentes quando possível (evita requests extras)
- `loading="lazy"` em todas as imagens abaixo do fold
- `fetchpriority="high"` na foto do hero (above the fold)

---

## 6. SEO E METADADOS

### 6.1 Estrutura de `<head>` por página

| Página | `<title>` | `<meta description>` |
|---|---|---|
| Home | `Dr. Celso Pintinha — Ortopedista em Uberaba` | `Ortopedista e traumatologista em Uberaba. 20 anos de prática. Atendimento no Hospital São Marcos e Instituto Sem Dor.` |
| Agendar | `Agendar Consulta — Dr. Celso Pintinha` | `Marque sua consulta com o Dr. Celso Pintinha pelo WhatsApp ou Doctoralia. Atendimento no Hospital São Marcos e Instituto Sem Dor, Uberaba.` |
| Sobre | `Sobre o Dr. Celso Pintinha — Ortopedista` | `Conheça o Dr. Celso Pintinha, ortopedista e traumatologista com mais de 20 anos de experiência em Uberaba, MG.` |
| Especialidades | `Especialidades — Dr. Celso Pintinha` | `Cirurgia de joelho, prótese de quadril, artroscopia, traumatologia e mais. Dr. Celso Pintinha, ortopedista em Uberaba.` |
| Contato | `Contato e Localização — Dr. Celso Pintinha` | `Endereços, telefones e como chegar. Dr. Celso Pintinha atende no Hospital São Marcos e no Instituto Sem Dor, em Uberaba, MG.` |

### 6.2 Schema.org JSON-LD

Injetado via `BaseLayout.astro` em todas as páginas:

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Celso Pintinha",
  "medicalSpecialty": ["Orthopedic Surgery", "Traumatology"],
  "description": "Ortopedista e traumatologista em Uberaba, MG. 20+ anos de prática clínica.",
  "url": "https://drcelsopintinha.com.br",
  "telephone": ["[PENDENTE]", "[PENDENTE]"],
  "location": [
    {
      "@type": "MedicalClinic",
      "name": "Hospital São Marcos",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Uberaba",
        "addressRegion": "MG",
        "addressCountry": "BR",
        "streetAddress": "[PENDENTE]"
      }
    },
    {
      "@type": "MedicalClinic",
      "name": "Instituto Sem Dor",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Uberaba",
        "addressRegion": "MG",
        "addressCountry": "BR",
        "streetAddress": "[PENDENTE]"
      }
    }
  ]
}
```

---

## 7. DADOS PENDENTES (bloqueadores de conteúdo)

Estes itens são necessários antes da Fase 4 (Código). Placeholders `[PENDENTE]` serão usados até recebermos.

| Item | Usado em | Bloqueador crítico? |
|---|---|---|
| CRM completo do Dr. Celso | Footer, Schema.org, página Sobre | Sim (CFM obrigatório) |
| Endereço completo Hospital São Marcos | `/agendar`, `/contato`, Schema.org | Sim |
| Endereço completo Instituto Sem Dor | `/agendar`, `/contato`, Schema.org | Sim |
| Dias e horários em cada local | `/agendar`, `LocationCard` | Sim |
| Telefones fixos dos locais | `/agendar`, `/contato` | Sim |
| WhatsApp da secretária (com DDD) | `WhatsAppButton`, botões de agendamento | Sim |
| Link do Doctoralia | Botões Doctoralia | Sim |
| Diretor técnico do Hospital São Marcos | Footer (CFM) | Sim |
| Convênios atendidos | `/agendar` (seção secundária) | Não |
| Decisão sobre mencionar Orthocenter | Página Sobre, possível H1/meta | Não |
| Sociedades médicas (SBOT etc.) | Página Sobre | Não |
| E-mail de contato | Página Contato | Não |

---

## 8. INTEGRAÇÕES

| Integração | Implementação | Status |
|---|---|---|
| WhatsApp Click-to-Chat | Link `https://wa.me/55[DDD][NUM]?text=[MSG]` em `WhatsAppButton.astro` | Aguardando número |
| Doctoralia | Link externo `target="_blank" rel="noopener"` | Aguardando URL do perfil |
| Google Maps Embed | `<iframe>` com lazy loading em `MapEmbed.astro` | Aguardando endereços |
| Google Analytics 4 | Script no `<head>` do `BaseLayout.astro` via env var | Após deploy |
| Formspree (contato) | `action` no form da página `/contato` | Opcional |

---

## 9. CONFORMIDADE E CHECKLIST PRÉ-ENTREGA

### CFM (Resolução 1.974/2011)
- [ ] Diretor técnico com nome completo e CRM no rodapé de todas as páginas
- [ ] Nenhum depoimento de paciente em nenhuma página
- [ ] Raios-X sem dados identificáveis do paciente
- [ ] Foto de cirurgia sem paciente identificável
- [ ] Nenhuma promessa de resultado

### LGPD
- [ ] Política de Privacidade publicada em `/privacidade`
- [ ] Banner de consentimento de cookies funcional
- [ ] Google Analytics ativado somente após consentimento

### Performance
- [ ] Lighthouse Performance > 90
- [ ] Todas as imagens em WebP com lazy loading
- [ ] Fontes com `display=swap` e preconnect
- [ ] Zero JavaScript desnecessário (Astro islands only quando necessário)

### Acessibilidade (WCAG 2.1 AA)
- [ ] Contraste ≥ 4.5:1 em texto normal
- [ ] Navegação via teclado funcional
- [ ] `alt` em todas as imagens
- [ ] Tags semânticas em todas as páginas

---

*Próxima fase: Fase 3 (Assets visuais) → Fase 4 (Código, Checkpoint 1)*
