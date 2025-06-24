public class WordFactory extends DocumentFactory{

@Override
public   ConcreteClass createDocument(){
    return new WordDocument();
}
    
}