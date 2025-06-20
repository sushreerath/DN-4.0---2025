// Target interface
interface PaymentProcessor {
    void processPayment(double amount);
}

// Adaptee 1
class PayPal {
    public void sendMoney(double amount) {
        System.out.println("Paid rs" + amount + " using PayPal.");
    }
}

// Adaptee 2
class RazorPay {
    public void makePayment(double amount) {
        System.out.println("Paid rs" + amount + " using RazorPay.");
    }
}

// Adapter for PayPal
class PayPalAdapter implements PaymentProcessor {
    private PayPal paypal;

    public PayPalAdapter(PayPal paypal) {
        this.paypal = paypal;
    }

    public void processPayment(double amount) {
        paypal.sendMoney(amount);
    }
}

// Adapter for RazorPay
class RazorPayAdapter implements PaymentProcessor {
    private RazorPay razorpay;

    public RazorPayAdapter(RazorPay razorpay) {
        this.razorpay = razorpay;
    }

    public void processPayment(double amount) {
        razorpay.makePayment(amount);
    }
}

// Test class
public class Main {
    public static void main(String[] args) {
        PaymentProcessor paypalProcessor = new PayPalAdapter(new PayPal());
        paypalProcessor.processPayment(500);

        PaymentProcessor razorProcessor = new RazorPayAdapter(new RazorPay());
        razorProcessor.processPayment(1000);
    }
}


//OUTPUT
// Paid rs500.0 using PayPal.
// Paid rs1000.0 using RazorPay.
