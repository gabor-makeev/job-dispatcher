import { Head, Form } from '@inertiajs/react';
import { useEchoPublic } from '@laravel/echo-react';
import { useState } from 'react';

export default function Welcome() {
    const [notifications, setNotifications] = useState<string[]>([]);

    useEchoPublic(
        'notifications', 
        'WeatherFound', 
        ({ weather }: {weather: string}) => {
        setNotifications(prev => [weather, ...prev]);
    })

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex flex-col gap-2 min-h-screen bg-[#FDFDFC] p-6 text-[#1b1b18] dark:bg-[#0a0a0a]">
                <Form action="/weather" method="post">
                    <input type="text" required placeholder="London" name="city" />
                    <button type="submit" className='cursor-pointer text-white'>Get Weather</button>
                </Form>
                <ul>
                    {notifications.map((notification, idx) => (
                        <li key={idx} className='text-white'>{notification}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
