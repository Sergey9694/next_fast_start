import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    );
}

//* Data Fetching

//* 1. Server Side Rendering (SSR) - динамическое отображение данных на сервере, извлекаются обновленнными при каждом запросе, при SSR  каждый запрос к серверу запускает новый цикл рендеринга и извлечения данных, гарантируя что контент всегда будет обвновляться

async function Page({ params }) {
    const res = await fetch(
        `https://jsonplaceholdr.typicode/posts/${params.id}`,
        { cache: "no-store" } //т.е. в кэше нет хранилища, просто вызвать заголовок в теле извлеченного сообщения
    );
    const data = res.json();

    return <h1>{data.title}</h1>;
}

//* 2. Static Side Generation (SSG)

// По умолчанию NEXT использует статическую генерацию сайтов, о навтоматически извлечет данные прямо здесь и будет кэшировать их.
//! Этот метод идеально подходит для контента , который не часто меняется(например для записей в блогах, документации или маркетинговых страниц)
// В 1-ый раз программа сделает выборку а затем у нее будут необходимые данные и она отобразит их

async function Page1({ params }) {
    const res = await fetch(
        `https://jsonplaceholdr.typicode/posts/${params.id}`
        // { cache: "no-store" } - ОТСУТСТВУЕТ
    );
    const data = res.json();

    return <h1>{data.title}</h1>;
}

//* 3. Incremental Side Generation (ISR) -

async function Page2({ params }) {
    const res = await fetch(
        `https://jsonplaceholdr.typicode/posts/${params.id}`,
        { next: { revalidate: 10 } } // сочетает в себе преимущества SSR для динамического контекнта на статических сайтах. Данные будут хранится в кэше, но по истечении определенного периода времени будут обновляться и данные всегда будут новыми, что делает этот метод лучшим для динамического контента
    );
    const data = res.json();

    return <h1>{data.title}</h1>;
}
