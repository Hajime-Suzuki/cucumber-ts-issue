export default {
  parallel: 2,
  paths: ['tests/features/**/*.{feature,feature.md}'], // this could be cucumber-js somewhere-else/**/*.feature
  format: ['html:cucumber-report.html'],
  require: ['tests/steps/**/*.ts'],
  requireModule: ['@babel/register'],
}
