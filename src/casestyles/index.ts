import uppercase from './uppercase'
import lowercase from './lowercase'
import capitalize from './capitalize'

enum SupportedCaseStyles {
  Uppercase = 'uppercased',
  Lowercase = 'lowercased',
  Capitalize = 'capitalized'
}
interface CaseStylesRecord {
  [SupportedCaseStyles.Uppercase]: string
  [SupportedCaseStyles.Lowercase]: string
  [SupportedCaseStyles.Capitalize]: string
}

const caseStylesFor = (input: string): CaseStylesRecord => {
  return {
    uppercased: uppercase(input),
    lowercased: lowercase(input),
    capitalized: capitalize(input),
  }
}

export {
  SupportedCaseStyles,
  CaseStylesRecord,
  caseStylesFor
}
