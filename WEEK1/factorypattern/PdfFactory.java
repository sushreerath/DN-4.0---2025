public class PdfFactory extends DocumentFactory {
 @Override
  public ConcreteClass createDocument(){
    return new PdfDocument();
  }
    
}