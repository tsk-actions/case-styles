import {defineFeature, loadFeature} from 'jest-cucumber'
import * as path from 'path'
import {caseStylesFor, CaseStylesRecord} from '../../src/casestyles'

const feature = loadFeature(
  path.join(__dirname, '../../features/functional/default.feature')
)

defineFeature(feature, test => {
  let result: CaseStylesRecord, input: string

  test('uppercase', ({given, when, then}) => {
    given(/^I have a text input (.*)$/, (aText: string) => {
      input = aText
    })
    when(/^I request case styles for that input$/, () => {
      // compute the case style using the lib
      result = caseStylesFor(input)
    })
    then(
      /^I should get value (.*) as a result of the input (.*)$/,
      (output: string, casestyle: keyof CaseStylesRecord) => {
        expect(result[casestyle]).toEqual(output)
      }
    )
  })
})

