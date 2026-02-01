# Contributing to BlueprintKit

Thank you for your interest in contributing to BlueprintKit! 🎉

## 🤝 How to Contribute

### Adding a New Template

1. **Fork the Repository**
   ```bash
   git clone https://github.com/vickcoo/devkit.git
   cd devkit
   ```

2. **Create Your Template**
   ```bash
   cd templates
   mkdir my-awesome-template
   cd my-awesome-template
   ```

3. **Template Structure**
   ```
   my-awesome-template/
   ├── README.md           # Required: Template documentation
   ├── package.json        # If applicable
   ├── src/               # Source code
   ├── .env.example       # Environment variables example
   ├── .gitignore
   └── tsconfig.json      # If using TypeScript
   ```

4. **README Requirements**

   Your template README must include:
   - Description of what the template does
   - Tech stack overview
   - Quick start guide
   - Project structure
   - Available scripts
   - Deployment instructions

5. **Register Your Template**

   Add your template to `cli/src/utils/templates.ts`:
   ```typescript
   {
     name: 'my-awesome-template',
     description: 'Brief description',
     localPath: path.join(__dirname, '../../..', 'templates', 'my-awesome-template'),
     techStack: ['Framework', 'Library', 'Tool'],
     category: 'backend', // or 'frontend', 'fullstack', 'mobile', etc.
     author: 'Your Name',
     version: '1.0.0'
   }
   ```

6. **Test Your Template**
   ```bash
   cd cli
   npm run build
   npx blueprintkit init
   # Select your template and verify it works
   ```

7. **Submit a Pull Request**
   - Create a new branch: `git checkout -b add-my-template`
   - Commit your changes: `git commit -m "Add my-awesome-template"`
   - Push to GitHub: `git push origin add-my-template`
   - Open a PR on GitHub

### Quality Guidelines

Templates should:
- ✅ Follow best practices for the framework
- ✅ Include TypeScript (if applicable)
- ✅ Have ESLint and Prettier configured
- ✅ Include a comprehensive README
- ✅ Use modern, stable versions of dependencies
- ✅ Be production-ready (not just "hello world")
- ✅ Include `.env.example` for environment variables
- ✅ Have a clear, logical folder structure

### Reporting Bugs

Found a bug? Please [open an issue](https://github.com/vickcoo/devkit/issues) with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node version, etc.)

### Suggesting Features

Have an idea? [Open an issue](https://github.com/vickcoo/devkit/issues) with:
- Clear description of the feature
- Use case / problem it solves
- Proposed implementation (if you have ideas)

### Code Style

- Use TypeScript for CLI code
- Follow existing code style
- Run `npm run build` before committing
- Write clear commit messages

### Pull Request Process

1. Update documentation if needed
2. Test your changes thoroughly
3. Update the README if you added features
4. The PR will be reviewed by maintainers
5. Address any feedback
6. Once approved, it will be merged!

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution helps make BlueprintKit better for developers worldwide. Thank you for being part of the community! ❤️
