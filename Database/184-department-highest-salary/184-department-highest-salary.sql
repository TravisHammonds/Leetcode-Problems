/* Write your T-SQL query statement below */

SELECT d.Name AS Department, e2.Name AS Employee, e2.Salary AS Salary
FROM (
    SELECT e1.DepartmentId, e1.Salary, e1.Name, RANK () OVER(PARTITION BY DepartmentId            ORDER BY Salary DESC) AS 'salaryRank'
    FROM Employee e1 ) e2
INNER JOIN Department d ON d.Id = e2.DepartmentId
WHERE e2.salaryRank = 1

