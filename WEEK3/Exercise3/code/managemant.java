package library;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class management {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();

        System.out.println("Spring Context Initialized!");
        context.close();
    }
}
