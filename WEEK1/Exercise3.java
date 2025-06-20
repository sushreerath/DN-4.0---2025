class Computer {
    private String CPU, RAM;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
    }

    public static class Builder {
        private String CPU, RAM;

        public Builder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }

        public Builder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }

    public void showConfig() {
        System.out.println("CPU: " + CPU);
        System.out.println("RAM: " + RAM);
    }
}

public class Main {
    public static void main(String[] args) {
        Computer pc = new Computer.Builder()
                        .setCPU("Intel i5")
                        .setRAM("16GB")
                        .build();

        pc.showConfig();
    }
}


//OUTPUT:-
// CPU: Intel i5
// RAM: 16GB
