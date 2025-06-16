class Product {
    int productId;
    String productName;
    int quantity;
    double price;

    public Product(int productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public String toString() {
        return "ID: " + productId + ", Name: " + productName + ", Qty: " + quantity + ", Price: ₹" + price;
    }
}

// Inventory Management Class
public class InventoryManagementSystem {
    private static HashMap<Integer, Product> inventory = new HashMap<>();

    // Add product
    public static void addProduct(Product product) {
        inventory.put(product.productId, product);
        System.out.println("✅ Product added successfully.");
    }

    // Update product
    public static void updateProduct(int productId, int newQuantity, double newPrice) {
        Product p = inventory.get(productId);
        if (p != null) {
            p.quantity = newQuantity;
            p.price = newPrice;
            System.out.println("Product updated.");
        } else {
            System.out.println("Product not found.");
        }
    }

    // Delete product
    public static void deleteProduct(int productId) {
        if (inventory.remove(productId) != null) {
            System.out.println("Product deleted.");
        } else {
            System.out.println("Product not found.");
        }
    }

    // Display all products
    public static void displayInventory() {
        if (inventory.isEmpty()) {
            System.out.println("Inventory is empty.");
        } else {
            System.out.println("Inventory List:");
            for (Product p : inventory.values()) {
                System.out.println(p);
            }
        }
    }
