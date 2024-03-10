<script>
    import "../app.css"
</script>

<nav class="bg-white border-gray-200 top-0 start-0 w-full fixed">
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 p-3" id="navbar-sticky">
    <ul class="flex list-none">
        <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/">Things I Learned</a>
        </li>
        <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/">Home</a>
        </li>
        <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/login">Login</a>
        </li>
    </ul>
    </div>
</nav>

<slot></slot>
