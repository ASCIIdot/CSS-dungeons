# Success Critera

1. There must be an accessible GUI :&#x20;
   1. Input and Output, with obvious features that a child can navigate and understand without instruction
   2. The ability to hide and show information as to not overwhelm the user; toggle tabs for the hints, for example.
   3. A visually appealing and non-eyestrain inducing design, so it may be used for long periods of time.
   4. A canvas for the game itself, and a separate container for the code-related information, including:
      1. The game canvas itself
      2. CSS viewer and editor
      3. HTML viewer that updates every stage as to the object of manipulation
      4. An information guide
2. CSS must be read and displayed:
   1. The input must be read and validated using JavaScript and RegEx to make sure syntax is correct.
   2. If not, it must highlight to the user where the first instance of error is.
   3. Once valid, the input must be deconstructed and applied to an object using CSSDOM.
   4. The user must be able to reset the applied CSS, and change things they’ve already applied.
3. The CSS input must be validated against a puzzle solution:
   1. Other than “Run”, there should be a “Submit” button, that finalises the input- this gives room for trial and error before committing to a solution.
   2. Once the input is submitted, there has to be a comparison against a win and lose condition.
   3. There should be a certain boundary of mistakes that are allowed.
   4. If there is a mistake, the game should let the user know.
   5. &#x20;If the solution passes, the game should move onto the next stage, with a new puzzle, resetting the CSS window and changing out the HTML window with the new relevant object.
