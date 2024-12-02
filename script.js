// Funkcja wyszukiwania IP po nicku
function searchIP() {
    const nicknameInput = document.getElementById("nickname").value.trim();  // Usuń spacje z początku i końca
    const nicknames = nicknameInput.split(',').map(nick => nick.trim().toLowerCase());  // Podziel nicki po przecinku i usuń zbędne spacje

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';  // Zresetuj poprzednie wyniki

    let foundAny = false;  // Flaga do sprawdzenia, czy znaleziono jakiekolwiek wyniki

    // Sprawdź każdy nick z listy
    nicknames.forEach(nickname => {
        // Sprawdź, czy nick istnieje w bazie danych
        if (userDatabase[nickname]) {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerText = `${nickname}:`;

            // Dodaj wszystkie IP przypisane do tego nicku
            userDatabase[nickname].forEach(ip => {
                const ipItem = document.createElement('div');
                ipItem.innerText = ip;
                ipItem.style.marginLeft = "20px";  // Wcięcie dla adresów IP
                resultItem.appendChild(ipItem);
            });

            resultItem.style.color = "#28a745";  // Zielony kolor dla znalezionych
            resultDiv.appendChild(resultItem);

            foundAny = true;  // Ustaw flagę, że znaleziono przynajmniej jeden nick
        } else {
            // Jeśli nick nie zostanie znaleziony
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerText = `Nie znaleziono tego nicku: ${nickname}.`;
            resultItem.style.color = "#ff4d4d";  // Czerwony kolor dla nieznalezionych
            resultDiv.appendChild(resultItem);
        }
    });

    // Jeśli nic nie znaleziono, wyświetl ogólny komunikat
    if (!foundAny) {
        const noResults = document.createElement('div');
        noResults.innerText = "Brak wyników dla wprowadzonych nicków.";
        noResults.style.color = "#ff4d4d";
        resultDiv.appendChild(noResults);
    }
}
