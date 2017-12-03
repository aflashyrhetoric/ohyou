# Easily flatten debts across a span of purchases
Consolidates debts and potentially eliminates debts within circular relationship diagrams

## The gist

#### Implementation #1
- enter a new transaction, which will be stored as a new `Transaction` that can be processed to generate a table of computed properties: `Debts`, which represents who should pay who to recoup for expenses.
- algorithm iterates over node graph of purchases
- 1:1 debts are annulled
- debts to self are annulled
- circular debts are reduced 

#### Implementation #2
- Given a table of `Transaction`s, calculate a set of ratios, to be applied against the total, that represent the debts owed.

#### Future state
- Add ability to create sub-transactions from existing transactions for better UX. For example, we add the receipt total from Target containing `Transaction`s that benefit all members (e.g. Jane/Sally/Joe/Louis), then create a "Sub-transaction" for "Eyeliner" that targets some subset of the group (e.g Jane and Sally *only*).
