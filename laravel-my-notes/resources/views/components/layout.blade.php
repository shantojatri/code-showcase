<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>My Notes</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&display=swap"
        rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="{{ asset('toastr/toastr.min.css') }}" rel="stylesheet" type="text/css">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div>
        <x-navbar />
        <main class="min-h-[85vh]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-16">
                {{ $slot }}
            </div>
        </main>
        <x-footer />
    </div>

    <script src="{{ asset('toastr/toastr.min.js') }}"></script>
    <script>
        toastr.options =
        {
            "closeButton": true,
            "progressBar": true,
            "timeOut": 2000
        }

        @if(session('success'))
            toastr.success("{{ session('success') }}");
        @endif

        @if(Session::has('error'))
            toastr.error("{{ session('error') }}");
        @endif

        @if(Session::has('update'))
            toastr.info("{{ session('update') }}");
        @endif

        @if(Session::has('delete'))
        toastr.success("{{ session('delete') }}");
        @endif

        @if(Session::has('info'))
            toastr.info("{{ session('info') }}");
        @endif

        @if(Session::has('warning'))
            toastr.warning("{{ session('warning') }}");
        @endif

        @if ($errors->any())
            @foreach ($errors->all() as $error)
                toastr.error("{{ $error }}");
            @endforeach
        @endif
    </script>
</body>

</html>