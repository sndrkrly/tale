import Head from 'next/head';

export const Landing = () => {
    return (
        <>
            <Head>
                <title>tale</title>
                <link rel = 'icon' href = '/favicon.ico' />
            </Head>
            
            <main className = 'grid w-full h-full'>
                <div className = 'flex items-center justify-center min-w-screen min-h-screen bg-primary-900'>
                    <div className = 'flex m-auto flex-col p-6 gap-5 bg-primary-800 sm:rounded-8 z-10 sm:w-400 w-full'>
                        <div className = 'flex gap-2 flex-col'>
                            <h1 className = 'font-extrabold text-primary-100 sm:text-3xl'>
                                Üdvözöllek
                            </h1>

                            <p className = 'text-primary-100 wrap'>
                                Kérlek, jelentkezz be, vagy ha nincs regisztrálj egy fiókot!
                            </p>
                        </div>

                        <div className = 'flex flex-col gap-4'>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
