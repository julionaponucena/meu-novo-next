# Plano de Migração: Pages Router → App Router (Next.js 14)

## Visão Geral

Migrar todas as páginas do diretório `src/pages/` (Pages Router) para `src/app/` (App Router) no Next.js 14.1.0.

## Status Atual

### Já migrado (8 arquivos)
| App Router Path | Status |
|---|---|
| `src/app/layout.tsx` | ✅ Completo (layout raiz) |
| `src/app/page.tsx` | ✅ Completo (home) |
| `src/app/sobre/page.txt` | ⚠️ Parcial (re-export do componente antigo) |
| `src/app/filosofia/filosofia-1/page.tsx` | ✅ Completo |
| `src/app/filosofia/filosofia-2/page.tsx` | ✅ Completo |
| `src/app/filosofia/filosofia-3/page.tsx` | ✅ Completo |
| `src/app/filosofia/filosofia-4/page.tsx` | ✅ Completo |
| `src/app/filosofia/filosofia-5/page.tsx` | ✅ Completo |

### Pendente (73 páginas)

#### Páginas raiz (5)
| Pages Router | App Router Target |
|---|---|
| `src/pages/sobre.js` | `src/app/sobre/page.tsx` (substituir re-export atual) |
| `src/pages/psicanalise-menu.js` | `src/app/psicanalise-menu/page.tsx` |
| `src/pages/curso-menu.js` | `src/app/curso-menu/page.tsx` |
| `src/pages/filosofia-menu.js` | `src/app/filosofia-menu/page.tsx` |
| `src/pages/teste.tsx` | `src/app/teste/page.tsx` |

#### Páginas de conteúdo - Cursos (10)
| Pages Router | App Router Target |
|---|---|
| `src/pages/cursos/curso-1.js` a `curso-10.js` | `src/app/cursos/curso-1/page.tsx` a `curso-10/page.tsx` |

#### Páginas de conteúdo - Filosofia (10)
| Pages Router | App Router Target |
|---|---|
| `src/pages/filosofia/filosofia-6.js` a `filosofia-15.js` | `src/app/filosofia/filosofia-6/page.tsx` a `filosofia-15/page.tsx` |

#### Páginas de conteúdo - Psicanálise (54)
| Pages Router | App Router Target |
|---|---|
| `src/pages/psicanalise/psicanalise-2.js` a `psicanalise-55.js` | `src/app/psicanalise/psicanalise-2/page.tsx` a `psicanalise-55/page.tsx` |

#### API Routes (2)
| Pages Router | App Router Target |
|---|---|
| `src/pages/api/email.js` | `src/app/api/email/route.ts` |
| `src/pages/api/hello.js` | `src/app/api/hello/route.ts` |

### Arquivos que PODEM ser removidos após migração completa
| Arquivo | Motivo |
|---|---|
| `src/pages/_app.tsx` | Substituído por `src/app/layout.tsx` |
| `src/pages/_document.tsx` | Substituído por `src/app/layout.tsx` |

---

## Padrão de Conversão (Spec)

### 1. Estrutura de diretórios

**Antes (Pages Router):**
```
src/pages/filosofia/filosofia-1.js
```

**Depois (App Router):**
```
src/app/filosofia/filosofia-1/page.tsx
```

### 2. Transformação de imports

Converter imports relativos para imports absolutos usando os aliases do `tsconfig.json`:

| Import Antigo | Import Novo |
|---|---|
| `../../include/header` | `@include/header` |
| `../../include/menu` | `@include/menu` |
| `../../include/footer` | `@include/footer` |
| `../../supertags/principal` | `src/supertags/principal` |
| `../../supertags/titulo` | `src/supertags/titulo` |
| `../../scripts/script-analytics` | `src/scripts/script-analytics` |
| `../../include/header.js` | `@include/header` |
| `../../supertags/principal.js` | `src/supertags/principal` |
| `../include/header` | `@include/header` |
| `../include/menu` | `@include/menu` |
| `../include/footer` | `@include/footer` |
| `../scripts/hiperlinks` | `src/scripts/hiperlinks` |
| `../menu/menu-itens` | `src/menu/menu-itens` |
| `../menu/container-menu` | `src/menu/container-menu` |
| `../scripts/script-analytics` | `src/scripts/script-analytics` |
| `../menu/curso-itens` | `src/menu/curso-itens` |
| `../menu/filosofia-itens` | `src/menu/filosofia-itens` |

### 3. Extensão de arquivo
- `.js` → `.tsx`
- Adicionar `import React from "react"` no topo

### 4. Estrutura do componente
O componente permanece o mesmo. Apenas os imports mudam.

### 5. API Routes
```js
// ANTIGO: pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// NOVO: app/api/hello/route.ts
import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({ name: 'John Doe' })
}
```

### 6. Caso especial: `teste.tsx`
Usa `getStaticProps` + `@babel/core`. No App Router, `getStaticProps` vira `generateStaticParams`.

---

## Ordem de Execução

### Fase 1: Conteúdo repetitivo
1. `cursos/curso-1` a `curso-10` (10 páginas)
2. `filosofia/filosofia-6` a `filosofia-15` (10 páginas)
3. `psicanalise/psicanalise-2` a `psicanalise-55` (54 páginas)

### Fase 2: Páginas de menu
4. `psicanalise-menu`, `curso-menu`, `filosofia-menu`

### Fase 3: Casos especiais
5. `sobre` (substituir re-export)
6. `teste` (refatorar)

### Fase 4: API Routes
7. `api/hello`, `api/email`

### Fase 5: Limpeza
8. Remover `_app.tsx` e `_document.tsx`
9. Remover `src/pages/` (opcional)

---

## Checklist Pós-Migração
- [ ] `npm run dev` sem erros
- [ ] `npm run build` completo
- [ ] Todas as rotas funcionando
- [ ] PWA intacto
- [ ] Estilos preservados
