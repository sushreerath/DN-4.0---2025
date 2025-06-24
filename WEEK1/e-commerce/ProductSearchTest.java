import java.util.Scanner;

public class ProductSearchTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Product[] products = {
            new Product("101", "Maggie Noodles", "Instant Food"),
            new Product("102", "Shirt", "Clothing"),
            new Product("103", "Lays Chips", "Snacks"),
            new Product("104", "Laptop", "Electronics"),
            new Product("105", "Watch", "Accessories")
        };

        System.out.print("Enter the product name to search: ");
        String targetName = sc.nextLine().trim();

        System.out.print("Choose search type: (1 for Linear, 2 for Binary): ");
        int choice = sc.nextInt();

        Product result = null;

        if (choice == 1) {
            System.out.println("\nLinear Search:");
            result = ProductLinearSearch.linearSearch(products, targetName);
        } else if (choice == 2) {
            System.out.println("\nBinary Search:");
            result = ProductBinarySearch.binarySearch(products, targetName);
        } else {
            System.out.println("Invalid choice.");
            sc.close();
            return;
        }

        if (result != null) {
            System.out.println("\nProduct found:");
            result.displayProduct();
        } else {
            System.out.println("\nProduct not found.");
        }

        sc.close();
    }
}
