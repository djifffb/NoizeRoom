<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
{{--     
    @guest
        <form action="{{ route('user.register') }}" method="post">
            @csrf
            <div>
                <h3>register</h3>
            </div>

            <input type="hidden" name="role" value="user">

            <input type="text" name="name">
            <input type="email" name="email">
            <input type="password" name="password">
            <input type="password" name="password_confirmation">

            <button type="submit">enter</button>
        </form>

        <form action="{{ route('user.login') }}" method="post">
            @csrf
            <div>
                <h3>login</h3>
            </div>

            <input type="email" name="email">
            <input type="password" name="password">

            <button type="submit">enter</button>
        </form>
    @endguest

    
    @auth
        <form action="{{ route('user.logout') }}" method="post">
            @csrf
            <div>
                <h3>logout</h3>
            </div>
            <button type="submit">enter</button>
        </form>
    @endauth --}}

</body>
</html>