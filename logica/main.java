// Escribe una función que reciba un array de números enteros y retorne un nuevo array con solo los
// números impares, ordenados de menor a mayor.
// Ejemplo:
// Input: [8, 3, 1, 4, 5]
// Output: [1, 3, 5]

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class main {
    public static void main(String[] args) {
        int[] number = {8, 3, 1, 4, 5, 7, 9, 2, 6, 10};

        List<Integer> result = filterImparOrder(number);

        System.out.println("Resultado:" + result);
        
    }

    public static List<Integer> filterImparOrder(int[] a) {
        return Arrays.stream(a)
                        .filter(n -> n % 2 != 0)
                        .sorted()
                        .boxed()
                        .collect(Collectors.toList());
    }
}
