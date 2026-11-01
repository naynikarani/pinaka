# CloudGuard AI

CloudGuard AI is a React and TypeScript dashboard prototype for exploring cloud security posture management concepts. It includes a security overview, sample findings, an illustrative attack-path graph, AI-style recommendations, and a simulated-fix preview.

> **Demo only:** All resources and findings are sample data. The dashboard does not connect to a cloud account or make changes to real infrastructure.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |
| `npm run typecheck` | Type-check the TypeScript source |

## Dashboard sections

- **Overview:** Sample security metrics, an illustrative resource graph, recent findings, and a recommendation.
- **Findings:** A list of sample cloud security findings.
- **Attack Paths:** An illustrative risk chain, not a verified exploit path.
- **AI Recommendations:** Sample remediation suggestions.
- **Fix Simulation:** A preview of a proposed change; it does not modify cloud resources.

## Tech stack

- React
- TypeScript
- Vite
- Oxlint
