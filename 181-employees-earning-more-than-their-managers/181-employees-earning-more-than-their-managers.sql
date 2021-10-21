/* Write your T-SQL query statement below */
SELECT E1.Name AS 'Employee'
FROM Employee E1, Employee E2
WHERE E1.ManagerId = E2.Id
    And E1.Salary > E2.Salary
;