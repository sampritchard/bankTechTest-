# bankTechTest

### To Use
- clone this repo
- open SpecRunner.html
- play around in the console

### Approach
I decided to use JavaScript as this is a technology I want to become more familiar with. It was tested using Jasmine.

I started by mapping a rough idea of the objects I thought I would need (account, printer & transaction), before writing out the basic user stories below. I followed a strict TDD approach, where I built the account object first which was responsible for depositing and withdrawing. The next object I built was the transaction object, where the deposits and withdrawals get pushed into. The print class was what I will be building last (currently only prints out the header).

### Ongoing work
-- user story 4 - no bank statement can be printed currently.
-- single responsibility principle needs to be adhered to in the account functions.

### User Stories
```
As a user,
So that I can manage my money,
I want to have my own bank account
```
```
As a user,
So that I can spend my money,
I want to be able to withdraw from my bank account
```
```
As a user,
So that I can put my money safely away,
I want to be able to deposit into my bank account
```
```
As a user,
So that I can see a list of my transactions,
I want to be able to print a bank statement
```
