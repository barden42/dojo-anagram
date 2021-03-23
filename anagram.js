const anagram = (str1, str2) => {

    // ignorer la casse
    const str1Lower = str1.toLowerCase();
    const str2Lower = str2.toLowerCase();

        // converti la chaine en tableau
        // supprimer les espaces

    let arr1 = [];
    for (let i = 0; i < str1Lower.length; i++) {
        if (str1Lower[i] !== " ") {
            arr1.push(str1Lower[i]);
        }
    }

    let arr2 = [];
    for (let i = 0; i < str2Lower.length; i++) {
        if (str2Lower[i] !== " ") {
            arr2.push(str2Lower[i]);
        }
    }
    
    // comparaison de la longuer des cjaines si <> alors on return false
    if (arr1.length !== arr2.length) {
        return false;
    }

        // trie le tableau ordre alpha
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    //solution 1
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;

    // solution 2
    return arr1.join() === arr2.join();

};

module.exports = anagram;
