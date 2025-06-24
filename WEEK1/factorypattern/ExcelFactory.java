public class ExcelFactory extends DocumentFactory {
    @Override
        public ConcreteClass createDocument() {
        return new ExcelDocument();
    }
}