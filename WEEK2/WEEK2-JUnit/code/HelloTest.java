package com.junit.exercise1;

import org.junit.Test;
import static org.junit.Assert.*;

public class HelloTest {

    @Test
    public void testHello() {
        String expected = "Hello, JUnit!";
        String actual = "Hello, JUnit!";
        assertEquals(expected, actual);
    }
}
