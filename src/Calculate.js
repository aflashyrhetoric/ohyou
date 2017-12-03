import Person from './Person'
import Transaction from './Transaction'

export function CalculateDebts() {
	/* 
	Variable ideas to use:
	tab+person (int; 1 for each Person)
	avgSplit (int)
	rec (an array of persons owed money at month end)
	pay (an array of persons owing money at month end)
	totalRec (int for total amount owed to all persons at month end)
	shareRec = (int for each persons receivable share (1 for each person whose tab+person > 0))
	


	1. For all persons, create a variable, tab+person = 0.00

	2. For each transaction, add amount to tab+person for respective purchaser.
	avgSplit = divide amount by count of beneficies.
	Deduct avgSplit from tab+person for respective beneficiaries.

	3. At month end:
	if tab+person > 0, add person to rec && add tab+person to totalRec;
	if tab+person < 0, add person to pay.

	4. For each person in rec, divide respective tab+person by totalRec to obtain shareRec.

	5. For each person in pay, multiply respective tab+person by each shareRec to obtain dueTo+person for each person in rec.
	*/
}