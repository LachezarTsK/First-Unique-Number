
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class FirstUnique {

    private static final int NO_UNIQUE_INTEGERS = -1;
    private final Set<Integer> seenValues;
    private final LinkedHashSet<Integer> uniqueValues;

    public FirstUnique(int[] inputIntegers) {
        seenValues = new HashSet<>();
        uniqueValues = new LinkedHashSet<>();

        for (int value : inputIntegers) {
            if (seenValues.add(value)) {
                uniqueValues.add(value);
            } else {
                uniqueValues.remove(value);
            }
        }
    }

    public int showFirstUnique() {
        return !uniqueValues.isEmpty() ? uniqueValues.iterator().next() : NO_UNIQUE_INTEGERS;
    }

    public void add(int value) {
        if (seenValues.add(value)) {
            uniqueValues.add(value);
        } else {
            uniqueValues.remove(value);
        }
    }
}
