use suman;
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Balance DECIMAL(10,2),
    IsVIP VARCHAR(5) DEFAULT 'FALSE'
);
INSERT INTO Customers VALUES (1, 'John Smith', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Alice Brown', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Michael Lee', 70, 12000, 'FALSE');
INSERT INTO Customers VALUES (4, 'Suresh Kumar', 62, 9500, 'FALSE');
INSERT INTO Customers VALUES (5, 'Meera Das', 68, 11000, 'FALSE');
INSERT INTO Customers VALUES (6, 'Rajiv Nair', 75, 30000, 'FALSE');
INSERT INTO Customers VALUES (7, 'Anita Sharma', 50, 10500, 'FALSE');
INSERT INTO Customers VALUES (8, 'Vikram Rao', 35, 4000, 'FALSE');
INSERT INTO Customers VALUES (9, 'Kiran Patil', 28, 16000, 'FALSE');
INSERT INTO Customers VALUES (10, 'Priya Sinha', 59, 10050, 'FALSE');

CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    InterestRate DECIMAL(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Loans VALUES (101, 1, 7.5, '2025-07-10');
INSERT INTO Loans VALUES (102, 2, 6.0, '2025-08-15');
INSERT INTO Loans VALUES (103, 3, 8.0, '2025-06-30');
INSERT INTO Loans VALUES (104, 4, 7.0, '2025-07-01');
INSERT INTO Loans VALUES (105, 5, 6.8, '2025-07-25');
INSERT INTO Loans VALUES (106, 6, 7.9, '2025-07-15');
INSERT INTO Loans VALUES (107, 7, 6.5, '2025-08-20');
INSERT INTO Loans VALUES (108, 8, 6.3, '2025-07-10');
INSERT INTO Loans VALUES (109, 9, 6.0, '2025-06-29');
INSERT INTO Loans VALUES (110, 10, 6.9, '2025-07-30');

select * from Customers;
select * from Loans;

-- scenario1
UPDATE Loans l
JOIN Customers c ON l.CustomerID = c.CustomerID
SET l.InterestRate = l.InterestRate - 1
WHERE c.Age > 60;
SELECT c.CustomerID, c.Name, c.Age, l.LoanID, l.InterestRate
FROM Customers c
JOIN Loans l ON c.CustomerID = l.CustomerID
WHERE c.Age > 60;

-- scenario2
UPDATE Customers SET IsVIP = 'TRUE' WHERE Balance > 10000;


