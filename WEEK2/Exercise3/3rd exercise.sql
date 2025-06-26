use suman;
CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    account_holder VARCHAR(100),
    account_type VARCHAR(20),
    balance DECIMAL(10,2)
);
INSERT INTO accounts (account_id, account_holder, account_type, balance) VALUES (123, 'Alice', 'savings', 1000.00);
INSERT INTO accounts (account_id, account_holder, account_type, balance) VALUES (678, 'Bob', 'current', 2000.00);
INSERT INTO accounts (account_id, account_holder, account_type, balance) VALUES (890, 'Charlie', 'savings', 1500.00);
INSERT INTO accounts (account_id, account_holder, account_type, balance) VALUES (346, 'Diana', 'savings', 2500.00);
SELECT * FROM accounts;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    salary DECIMAL(10,2)
);

INSERT INTO employees (employee_id, name, department_id, salary) VALUES (101, 'Alice', 1, 50000.00);
INSERT INTO employees (employee_id, name, department_id, salary) VALUES (102, 'Bob', 2, 60000.00);
INSERT INTO employees (employee_id, name, department_id, salary) VALUES (103, 'Charlie', 1, 55000.00);
INSERT INTO employees (employee_id, name, department_id, salary) VALUES (104, 'Diana', 3, 70000.00);

SELECT * FROM employees;


-- scenario1
DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    UPDATE accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'savings';
END //

DELIMITER ;
CALL ProcessMonthlyInterest();
SELECT * FROM accounts;

-- scenario2
DELIMITER //

CREATE PROCEDURE UpdateEmployeeBonus (
    IN dept_id INT,
    IN bonus_percent DECIMAL(5,2)
)
BEGIN
    UPDATE employees
    SET salary = salary + (salary * bonus_percent / 100)
    WHERE department_id = dept_id;
END //

DELIMITER ;
CALL UpdateEmployeeBonus(1, 10);
SELECT * FROM employees;

-- scenario3
DELIMITER //

CREATE PROCEDURE TransferFunds (
    IN from_account_id INT,
    IN to_account_id INT,
    IN transfer_amount DECIMAL(10,2)
)
BEGIN
    DECLARE from_balance DECIMAL(10,2);

    -- Get balance of source account
    SELECT balance INTO from_balance
    FROM accounts
    WHERE account_id = from_account_id;

    -- Check if source account has enough funds
    IF from_balance >= transfer_amount THEN
        -- Deduct from source account
        UPDATE accounts
        SET balance = balance - transfer_amount
        WHERE account_id = from_account_id;

        -- Add to destination account
        UPDATE accounts
        SET balance = balance + transfer_amount
        WHERE account_id = to_account_id;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient funds in source account';
    END IF;
END //

DELIMITER ;
CALL TransferFunds(123, 678, 500.00);
SELECT * FROM accounts;




