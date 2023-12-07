<nav class="bg-white border-gray-200 fixed w-full z-20 top-0 start-0 border-b">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">My Notes</span>
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            @auth

            <form action="{{ route('logout') }}" method="POST">
                @csrf

                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Logout
                </button>
            </form>
            @else
            <a href="/login">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Login
                </button>
            </a>

            <a href="/register">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Register
                </button>
            </a>
            @endauth
        </div>
    </div>
</nav>