import uppercase from './uppercase'


export interface CaseStylesRecord {
  readonly uppercased: string
}

export function caseStylesFor(input: string): CaseStylesRecord {
  return {
    uppercased: uppercase(input)
  }
}