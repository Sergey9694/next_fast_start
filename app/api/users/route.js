// Здесь находится бэкенд частmь приложения

// из коробки поддерживает следующие HTTP методы
//1. GET
//2. POST
//3. PUT
//4. PATCH
//5. DELETE
//6. HEAD
//7. OPTIONS

// пример GET
//* ТАк выглядит этом маршрут списка пользователей http://localhost:3000/api/users
export async function GET(request) {
    //масссив пользователей
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Jahne" },
        { id: 3, name: "Bob" },
    ];
    // возврат пользователей
    return new Response(JSON.stringify(users));
}
