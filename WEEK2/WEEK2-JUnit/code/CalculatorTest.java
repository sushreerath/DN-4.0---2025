package com.junit.exercise1;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

// A dummy Calculator class to test
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    public int multiply(int a, int b) {
        return a * b;
    }
}

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange
        calculator = new Calculator();
        System.out.println("Setup done.");
    }

    @Test
    public void testAdd() {
        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testMultiply() {
        int result = calculator.multiply(2, 4);
        assertEquals(8, result);
    }

    @After
    public void tearDown() {
        System.out.println("Teardown done.");
    }
}
