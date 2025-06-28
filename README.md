# AI-Powered Playwright with Cucumber Data Tables

A test automation framework that combines the power of AI, Playwright, and Cucumber with data-driven testing using data tables.

## Features

- 🤖 AI-enhanced test generation and execution
- 🎭 Playwright for modern web automation
- 🥒 Cucumber BDD framework with data tables
- 📊 Data-driven testing capabilities
- 🔄 Cross-browser testing support

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd cucumber-dt

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Project Structure

```
cucumber-dt/
├── features/              # Cucumber feature files
├── step-definitions/      # Step definition files
├── support/              # Support files and hooks
├── test-data/            # Test data files
├── reports/              # Test reports
└── playwright.config.js  # Playwright configuration
```

## Usage

### Running Tests

```bash
# Run all tests
npm test

# Run specific feature
npm run test:feature -- features/example.feature

# Run tests with specific browser
npm run test:chrome
npm run test:firefox
npm run test:safari
```

### Writing Tests with Data Tables

Example feature file with data tables:

```gherkin
Feature: User Login
  Scenario Outline: Login with different credentials
    Given I navigate to the login page
    When I enter the following credentials:
      | username   | password   |
      | <username> | <password> |
    Then I should see "<result>"

    Examples:
      | username | password | result        |
      | admin    | admin123 | Welcome Admin |
      | user     | user123  | Welcome User  |
      | invalid  | wrong    | Login Failed  |
```

### AI Integration

The framework includes AI capabilities for:
- Intelligent element detection
- Auto-healing selectors
- Test case generation
- Result analysis

## Configuration

### Playwright Configuration

Edit `playwright.config.js` to customize:
- Browser settings
- Test timeouts
- Base URL
- Screenshots and videos

### Cucumber Configuration

Configure Cucumber options in `cucumber.config.js`:
- Feature file paths
- Step definition paths
- Report formats
- Parallel execution

## Reporting

Test reports are generated in multiple formats:
- HTML reports in `reports/html/`
- JSON reports in `reports/json/`
- JUnit XML for CI/CD integration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Scripts

```bash
npm run test           # Run all tests
npm run test:headed    # Run tests in headed mode
npm run test:debug     # Run tests in debug mode
npm run report         # Generate and open HTML report
npm run clean          # Clean test artifacts
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions and support, please open an issue in the repository.
