export const environments = {
  dev: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    timeout: 30000,
    retries: 1
  },
  staging: {
    baseUrl: 'https://staging-demo.orangehrmlive.com',
    timeout: 45000,
    retries: 2
  },
  prod: {
    baseUrl: 'https://prod-demo.orangehrmlive.com',
    timeout: 60000,
    retries: 0
  }
};

export function getEnvironment() {
  const env = process.env.TEST_ENV || 'dev';
  return environments[env] || environments.dev;
}