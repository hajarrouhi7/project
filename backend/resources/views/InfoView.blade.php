<!DOCTYPE html>
<html>
<head>
    <title>Détails de l'utilisateur</title>
</head>
<body>
    <h1>Détails de l'utilisateur</h1>

    <div id="InfoTerrain"></div>

    <script src="{{ asset('js/app.js') }}"></script> <!-- Charger le script React -->
    <script>
        // Passer les données de l'utilisateur à React en tant que propriétés
        var InfoView = @json($terrain);
        ReactDOM.render(<InfoView InfoView={terrain} />, document.getElementById('InfoTerrain'));
    </script>
</body>
</html>