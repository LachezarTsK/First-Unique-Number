
#include <deque>
#include <vector>
#include <unordered_map>
using namespace std;

class FirstUnique {
    
    inline static const int NO_UNIQUE_INTEGERS = -1;
    unordered_map<int, int> valuesToFrequency;
    deque<int> uniqueValues;//lazy update at calling showFirstUnique()

public:
    explicit FirstUnique(const vector<int>& inputIntegers) {
        for (const auto& value : inputIntegers) {
            ++valuesToFrequency[value];
            if (valuesToFrequency[value] == 1) {
                uniqueValues.push_back(value);
            }
        }
    }

    int showFirstUnique() {
        while (!uniqueValues.empty() && valuesToFrequency[uniqueValues.front()] > 1) {
            uniqueValues.pop_front();
        }
        return !uniqueValues.empty() ? uniqueValues.front() : NO_UNIQUE_INTEGERS;
    }

    void add(int value) {
        ++valuesToFrequency[value];
        if (valuesToFrequency[value] == 1) {
            uniqueValues.push_back(value);
        }
    }
};
