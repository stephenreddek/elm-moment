module Tests exposing (..)

{-|
The tests for the Moment elm port

#All of the tests are run from this function
@docs all

-}

import Test exposing (..)
import Expect
import String
import Moment as Moment exposing (formatString)


{-| Runs all tests
-}
all : Test
all =
    describe "A Test Suite"
        [ test "should be able to format dates" <|
            \() ->
                let
                    dateMoment =
                        { years = 1985
                        , months = 10
                        , date = 28
                        , hours = 1
                        , minutes = 1
                        , seconds = 1
                        , milliseconds = 1
                        }
                in
                    Expect.equal (Moment.formatString "YYYY-MM-DD" dateMoment) "1985-10-28"
        ]
