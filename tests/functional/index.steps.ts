import {defineFeature, loadFeature} from 'jest-cucumber'
import * as path from 'path'
import {
  caseStylesFor,
  CaseStylesRecord,
  SupportedCaseStyles
} from '../../src/casestyles'

interface TableEntry {
  readonly casestyle: string
  readonly expected: string
}

type TableEntries = TableEntry[]

const feature = loadFeature(
  path.join(__dirname, '../../features/functional/default.feature')
)

defineFeature(feature, test => {
  let result: CaseStylesRecord, textInput: string

  test('provides all case styles of a given text input', ({
    given,
    when,
    then
  }) => {
    given(/^I have a text input '(.*)'$/, (input: string) => {
      textInput = input
    })

    when('I request its casestyles', _ => {
      result = caseStylesFor(textInput)
    })

    then(
      'I should get the all supported case styles for that text input',
      (entries: TableEntries) => {
        const supportedCaseStyles: string[] = Object.values(SupportedCaseStyles)

        const castestyleEntries = entries.map(
          (entry: TableEntry) => entry.casestyle
        )
        const expectedEntries = entries.map(
          (entry: TableEntry) => entry.expected
        )

        castestyleEntries.forEach((casestyle: string) => {
          if (!supportedCaseStyles.includes(casestyle)) {
            fail(`Case style[${casestyle}] is not supported.`)
          }
        })

        entries.forEach((entry: TableEntry) => {
          expect(result).toHaveProperty(entry.casestyle, entry.expected)
        })
      }
    )
  })
})
