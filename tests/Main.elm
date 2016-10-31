port module Main exposing (..)

{-|
Runs the tests for Moment

# runs the tests
@docs main

# Used by the runner
@docs emit
-}

import Tests
import Test.Runner.Node exposing (run)
import Json.Encode exposing (Value)


{-| Uses the node test-runner to run all tests
-}
main : Program Value
main =
    run emit Tests.all


port emit : ( String, Value ) -> Cmd msg
