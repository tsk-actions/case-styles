Feature: Provides case styles for a given input text


    Background: Requesting case styles for a given input
        Given I have a text input <aText>
        When I request case styles for that input

    Scenario Outline: uppercase
        Then I should get value <anOutput> as a result of the input <caseStyled>

        Examples:

            | aText  | caseStyled | anOutput |
            | a word | uppercased | A WORD   |




# | a word  | lowercase    | -       |
# | a word  | sentencecase | -       |
# | a word  | titlecase    | -       |
# | a word  | startcase    | -       |
# | a word  | camelcase    | -       |
# | a word  | pascalcase   | -       |
# | a word  | snakecase    | -       |
# | a word  | kebabcase    | -       |

