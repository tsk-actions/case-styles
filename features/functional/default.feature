Feature: Case styles

        Scenario Outline: provides all case styles of a given text input

            Given I have a text input '<input>'
             When  I request its casestyles
             Then  I should get the all supported case styles for that text input

                  | casestyle   | expected      |
                  | uppercased  | <uppercased>  |
                  | lowercased  | <lowercased>  |
                  | capitalized | <capitalized> |

        Examples:

                  | input        | uppercased   | lowercased   | capitalized  |
                  | teSt A 1     | TEST A 1     | test a 1     | TeSt A 1     |
                  | node_modules | NODE_MODULES | node_modules | Node_modules |


