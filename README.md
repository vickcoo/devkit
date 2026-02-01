# BlueprintKit - Scaffold Production-Ready Code in Seconds

> AI-powered templates that save developers 4-8 hours per project.

[![npm version](https://img.shields.io/npm/v/blueprintkit.svg)](https://www.npmjs.com/package/blueprintkit)
[![Downloads](https://img.shields.io/npm/dm/blueprintkit.svg)](https://www.npmjs.com/package/blueprintkit)
[![License](https://img.shields.io/npm/l/blueprintkit.svg)](https://github.com/vickcoo/devkit/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/vickcoo/devkit.svg)](https://github.com/vickcoo/devkit)

---

## 🚀 Quick Start

```bash
npx blueprintkit init
# or use the short alias
npx bpkit init
```

That's it! Select a template and start coding.

---

## ✨ Features

- **15+ Production-Ready Templates** - Next.js, Express, React Native, Chrome Extensions, and more
- **One Command** - No global install needed, works with `npx`
- **TypeScript First** - All templates use TypeScript by default
- **Best Practices Built-In** - ESLint, Prettier, comprehensive docs included
- **Zero Config** - Works out of the box, customize as needed

---

## 📦 Available Templates

### Fullstack (3)
- `nextjs-tailwind` - Next.js 15 + Tailwind CSS + Shadcn UI
- `vue-vite` - Vue 3 + Vite + Vue Router + Pinia
- `sveltekit-app` - SvelteKit + Svelte 5 + Tailwind CSS

### Backend (6)
- `express-typescript` - Express REST API with TypeScript
- `nestjs-api` - NestJS + Prisma + JWT + Swagger
- `fastapi-python` - FastAPI + SQLAlchemy + Pydantic
- `flask-api` - Flask + CORS + Gunicorn
- `django-rest` - Django 5 + DRF + Admin Panel
- `golang-fiber` - Go 1.23 + Fiber framework

### Mobile (1)
- `react-native-expo` - React Native + Expo + Navigation

### Browser/Desktop (3)
- `chrome-extension` - Manifest V3 + TypeScript + Webpack
- `electron-app` - Electron + React + Cross-platform
- `astro-blog` - Astro + Markdown + MDX + RSS

### Bots (2)
- `discord-bot` - Discord.js v14 + Slash Commands
- `telegram-bot` - node-telegram-bot-api + TypeScript

**[See all templates →](./templates/README.md)**

---

## 🎯 Why BlueprintKit?

### The Problem
Developers waste **4-8 hours** setting up the same tech stacks repeatedly:
- Installing packages
- Configuring TypeScript, ESLint, Prettier
- Setting up folder structures
- Writing boilerplate code
- Creating documentation

### The Solution
BlueprintKit provides **production-ready templates** that include:
- ✅ Complete project structure
- ✅ TypeScript configuration
- ✅ Linting and formatting setup
- ✅ Environment variable examples
- ✅ Comprehensive README with examples
- ✅ Best practices baked in

### The Result
**From 8 hours to 30 seconds.**

---

## 📖 Usage

### Interactive Mode
```bash
npx blueprintkit init
```

Follow the prompts to:
1. Select a template
2. Enter project name
3. Choose directory
4. Install dependencies (optional)

### Direct Mode
```bash
npx blueprintkit init --template nextjs-tailwind --name my-app
```

### List Templates
```bash
npx blueprintkit list
```

### Configuration
```bash
npx blueprintkit config
```

---

## 🛠 CLI Commands

| Command | Description |
|---------|-------------|
| `blueprintkit init` | Initialize a new project |
| `blueprintkit list` | List all available templates |
| `blueprintkit config` | Manage configuration |
| `blueprintkit --version` | Show version |
| `blueprintkit --help` | Show help |

You can also use the short alias `bpkit` instead of `blueprintkit`.

---

## 📁 Project Structure

```
blueprintkit/
├── cli/                  # CLI tool (TypeScript)
│   ├── src/
│   │   ├── commands/    # CLI commands
│   │   ├── utils/       # Helper functions
│   │   └── index.ts     # Entry point
│   └── package.json
├── web/                  # Landing page (Next.js 15)
│   ├── app/             # Next.js App Router
│   ├── components/      # React components
│   └── package.json
├── templates/            # 15 production-ready templates
│   ├── nextjs-tailwind/
│   ├── express-typescript/
│   └── ...
├── LICENSE               # MIT License
├── README.md            # This file
└── CONTRIBUTING.md      # Contribution guidelines
```

---

## 🎨 Template Features

Every template includes:

- **TypeScript** - Type-safe code (where applicable)
- **Linting** - ESLint configured
- **Formatting** - Prettier setup
- **Environment Variables** - `.env.example` included
- **Documentation** - Complete README with:
  - Tech stack overview
  - Quick start guide
  - Project structure
  - Available scripts
  - Deployment instructions
  - Common issues & solutions

---

## 📈 Roadmap

### Phase 1: MVP ✅ (Complete)
- [x] CLI tool with 15 templates
- [x] Landing page
- [x] Complete documentation
- [x] Open source on GitHub

### Phase 2: Enhanced Experience (Q1 2026)
- [ ] 20+ total templates
- [ ] Template preview mode
- [ ] Custom template creation
- [ ] VS Code extension

### Phase 3: Community (Q2 2026)
- [ ] Community template marketplace
- [ ] Template rating system
- [ ] Template versioning
- [ ] Collaboration features

### Phase 4: Ecosystem (Q3-Q4 2026)
- [ ] GitHub Action
- [ ] JetBrains plugin
- [ ] API for integrations
- [ ] Enterprise features

---

## 💡 Use Cases

- **Freelancers**: Start client projects faster
- **Agencies**: Standardize project setup
- **Students**: Learn with production-ready code
- **Open Source**: Quick prototype ideas
- **Enterprises**: Ensure consistency across teams

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Start for Contributors

1. Fork the repo
2. Create your template in `templates/your-template/`
3. Add it to `cli/src/utils/templates.ts`
4. Include a comprehensive README
5. Submit a PR

### Reporting Issues

Found a bug? [Open an issue](https://github.com/vickcoo/devkit/issues)

---

## 🌟 Show Your Support

If BlueprintKit saved you time:
- ⭐ [Star this repo](https://github.com/vickcoo/devkit)
- 🐦 Tweet about it
- 📝 Write a blog post
- 🎥 Make a video tutorial
- 💬 Share with fellow developers

---

## 📊 Stats

- **Templates**: 15 production-ready
- **Languages**: TypeScript, Python, Go
- **Frameworks**: Next.js, Vue, Svelte, Express, NestJS, FastAPI, Django, and more
- **License**: MIT (Free & Open Source)

---

## 🔗 Links

- **GitHub**: https://github.com/vickcoo/devkit
- **npm**: https://npmjs.com/package/blueprintkit
- **Issues**: https://github.com/vickcoo/devkit/issues

---

## 📄 License

MIT © 2026 BlueprintKit

See [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org) - Landing page
- [Commander.js](https://github.com/tj/commander.js) - CLI framework
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Interactive prompts
- [Chalk](https://github.com/chalk/chalk) - Terminal colors
- [TypeScript](https://www.typescriptlang.org) - Type safety

---

## 🎯 Quick Links

- [🚀 Get Started](#-quick-start)
- [📦 Templates](#-available-templates)
- [📖 Usage Guide](#-usage)
- [🤝 Contributing](#-contributing)
- [⭐ Star on GitHub](https://github.com/vickcoo/devkit)

---

<div align="center">

**[GitHub](https://github.com/vickcoo/devkit)** · **[npm](https://npmjs.com/package/blueprintkit)**

Made with ❤️ by developers, for developers

*Scaffold production-ready code in seconds, not hours.*

</div>
