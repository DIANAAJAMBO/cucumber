Feature: Process refunds
Scenario: Customer has their receipt
    Given the customer has purchased a kettle for €10
    Given they have their receipt
    When the sales assistant processes the refund
    Then the stock inventory for kettles is incremented by 1
    Then the customer's card is credited with €10