# MongoDB findOne() returns null even when document exists

This repository demonstrates a common issue when using MongoDB's `findOne()` method: it returns `null` even when a document seemingly matching the query exists.

The problem typically arises from subtle mismatches between the query and the actual data in the collection.  Data type differences (e.g., comparing a number string to an integer), case sensitivity in string comparisons, and differences in embedded documents can all lead to unexpected `null` results.

## Steps to Reproduce

1. Clone this repository.
2. Ensure you have a MongoDB instance running and the necessary driver installed (`npm install mongodb`).
3. Replace `<YOUR_MONGODB_URI>` in `bug.js` with your MongoDB connection string.
4. Run `node bug.js`.  The script will attempt to find a document. If it's configured incorrectly (as it is initially), you'll see a `null` result even if the document exists.
5. Now examine `bugSolution.js` for a corrected version.

## Solution

The solution usually involves carefully reviewing the query and ensuring it precisely matches the data in the collection, addressing data type inconsistencies and case sensitivity as necessary.  The `bugSolution.js` file provides a corrected version to demonstrate this.