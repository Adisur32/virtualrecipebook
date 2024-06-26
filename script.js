document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const dishName = document.getElementById('dish-name').value.toLowerCase();
    const recipeResult = document.getElementById('recipe-result');

    const recipes = {
        "nasi goreng": {
            name: "Nasi Goreng",
            ingredients: [
                "2 piring nasi putih",
                "2 siung bawang putih, cincang halus",
                "2 butir telur",
                "100 gram daging ayam, potong kecil-kecil",
                "2 sendok makan kecap manis",
                "1 sendok makan kecap asin",
                "Garam dan merica secukupnya",
                "Minyak untuk menumis"
            ],
            instructions: [
                "Panaskan minyak di wajan, tumis bawang putih hingga harum.",
                "Masukkan potongan daging ayam, masak hingga berubah warna.",
                "Tambahkan telur, orak-arik hingga matang.",
                "Masukkan nasi putih, aduk rata.",
                "Tambahkan kecap manis, kecap asin, garam, dan merica. Aduk hingga merata.",
                "Masak hingga nasi goreng matang dan bumbu meresap.",
                "Sajikan nasi goreng hangat."
            ]
        },
        "spaghetti": {
            name: "Spaghetti",
            ingredients: [
                "200 gram spaghetti",
                "2 siung bawang putih, cincang halus",
                "200 gram daging sapi cincang",
                "200 gram saus tomat",
                "1 sendok teh oregano",
                "Garam dan merica secukupnya",
                "Keju parmesan untuk taburan",
                "Minyak untuk menumis"
            ],
            instructions: [
                "Rebus spaghetti hingga matang, tiriskan airnya.",
                "Panaskan minyak di wajan, tumis bawang putih hingga harum.",
                "Masukkan daging sapi cincang, masak hingga berubah warna.",
                "Tambahkan saus tomat, oregano, garam, dan merica. Aduk rata.",
                "Masak saus hingga mengental.",
                "Campurkan spaghetti dengan saus, aduk hingga rata.",
                "Taburkan keju parmesan sebelum disajikan."
            ]
        },
        "kue ulang tahun": {
            name: "Kue Ulang Tahun",
            ingredients: [
                "200 gram tepung terigu",
                "200 gram gula pasir",
                "200 gram mentega",
                "4 butir telur",
                "1 sendok teh baking powder",
                "1 sendok teh vanili",
                "Pewarna makanan (sesuai selera)",
                "Buttercream untuk hiasan"
            ],
            instructions: [
                "Panaskan oven hingga 180 derajat Celsius.",
                "Kocok mentega dan gula hingga lembut.",
                "Tambahkan telur satu per satu sambil terus dikocok.",
                "Campurkan tepung terigu, baking powder, dan vanili. Aduk rata.",
                "Bagi adonan menjadi beberapa bagian, tambahkan pewarna makanan pada masing-masing bagian.",
                "Tuangkan adonan ke dalam loyang yang sudah diolesi mentega dan ditaburi tepung.",
                "Panggang selama 30-40 menit hingga matang.",
                "Dinginkan kue sebelum dihias dengan buttercream."
            ]
        },
        "keripik pisang": {
            name: "Keripik Pisang",
            ingredients: [
                "5 buah pisang kepok",
                "200 ml air kapur sirih",
                "1 sendok teh garam",
                "Minyak untuk menggoreng"
            ],
            instructions: [
                "Kupas pisang, potong tipis-tipis.",
                "Rendam pisang dalam larutan air kapur sirih dan garam selama 30 menit.",
                "Goreng pisang dalam minyak panas hingga kering dan renyah.",
                "Angkat dan tiriskan keripik pisang.",
                "Sajikan keripik pisang dalam wadah yang tertutup rapat untuk menjaga kelezatannya."
            ]
        }
    };

    if (recipes[dishName]) {
        const recipe = recipes[dishName];
        const ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        const instructionsList = recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('');

        recipeResult.innerHTML = `
            <h2>${recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>${ingredientsList}</ul>
            <h3>Instructions:</h3>
            <ol>${instructionsList}</ol>
        `;
        recipeResult.classList.add('show');
    } else {
        recipeResult.innerHTML = `<p>Recipe not found. Please try another dish.</p>`;
        recipeResult.classList.remove('show');
    }
});
