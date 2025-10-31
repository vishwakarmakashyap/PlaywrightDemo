# Playwright E2E Automation Framework

A robust, scalable end-to-end automation framework built with Playwright and JavaScript.

## Framework Features

- **Page Object Model (POM)** - Maintainable and reusable page objects
- **Base Classes** - Common functionality across all pages
- **Data-Driven Testing** - JSON-based test data management
- **Environment Configuration** - Support for multiple environments
- **Custom Fixtures** - Page object injection and authenticated sessions
- **Utility Helpers** - Common test utilities and functions
- **Enhanced Reporting** - HTML, JSON, and JUnit reports
- **Cross-Browser Testing** - Chrome, Firefox, and Safari support

## Project Structure

```
├── pages/              # Page Object Model classes
│   ├── BasePage.js     # Base page with common functionality
│   ├── LoginPage.js    # Login page objects
│   └── DashboardPage.js # Dashboard page objects
├── tests/              # Test specifications
│   ├── login.spec.js   # Login test suite
│   └── dashboard.spec.js # Dashboard test suite
├── fixtures/           # Custom Playwright fixtures
│   └── baseFixture.js  # Base fixture with page objects
├── utils/              # Utility functions
│   └── TestHelper.js   # Common test helpers
├── data/               # Test data files
│   └── testData.json   # Test data in JSON format
├── config/             # Configuration files
│   └── environment.js  # Environment-specific settings
└── playwright.config.js # Playwright configuration
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npm run install:browsers
```

3. Copy environment file:
```bash
copy .env.example .env
```

## Running Tests

### All Tests
```bash
npm test
```

### Headed Mode
```bash
npm run test:headed
```

### Debug Mode
```bash
npm run test:debug
```

### UI Mode
```bash
npm run test:ui
```

### Specific Browser
```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### Specific Test Suite
```bash
npm run test:login
npm run test:dashboard
```

### View Reports
```bash
npm run report
```

## Environment Configuration

Set environment variables in `.env` file:
- `TEST_ENV` - Environment (dev/staging/prod)
- `BASE_URL` - Application base URL
- `HEADLESS` - Run in headless mode
- `TIMEOUT` - Test timeout in milliseconds

## Writing Tests

### Using Page Objects
```javascript
import { test, expect } from '../fixtures/baseFixture.js';

test('example test', async ({ loginPage, dashboardPage }) => {
  await loginPage.login('username', 'password');
  expect(await dashboardPage.isDashboardVisible()).toBeTruthy();
});
```

### Using Test Data
```javascript
import testData from '../data/testData.json' assert { type: 'json' };

test('login test', async ({ loginPage }) => {
  await loginPage.login(testData.validUser.username, testData.validUser.password);
});
```

## Best Practices

1. **Use Page Objects** - Keep selectors and actions in page classes
2. **Data-Driven Tests** - Use JSON files for test data
3. **Wait Strategies** - Use proper waits instead of hard sleeps
4. **Error Handling** - Implement retry mechanisms for flaky tests
5. **Screenshots** - Automatic screenshots on failures
6. **Parallel Execution** - Configure based on system capabilities