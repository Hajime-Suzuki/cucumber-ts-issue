export default {
  parallel: 3,
  paths: ['tests/features/**/*.{feature,feature.md}'], // this could be cucumber-js somewhere-else/**/*.feature
  format: ['html:cucumber-report.html'],
  require: ['tests/bootstrap.js', 'tests/steps/**/*.ts'],
}
