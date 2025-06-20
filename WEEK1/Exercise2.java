interface Document {
    void open();
}

// Concrete Document classes
class WordDocument implements Document {
    public void open() {
        System.out.println("Opening a Word Document.");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening a PDF Document.");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening an Excel Document.");
    }
}

// Abstract Factory
abstract class DocumentFactory {
    public abstract Document createDocument();
}

// Concrete Factories
class WordDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}

public class Main {
    public static void main(String[] args) {

        // Create Word document
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();

        // Create PDF document
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        // Create Excel document
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}
