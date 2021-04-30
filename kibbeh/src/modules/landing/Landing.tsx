import Head from 'next/head';

export const Landing = () => {
    return (
        <>
            <Head>
                <title>tale</title>
                <link rel = 'icon' href = '/favicon.ico' />
            </Head>
            
            <main className = 'flex grid w-full h-full'>
                <div className = 'flex items-center justify-center min-w-screen min-h-screen bg-primary-900'>
                    <div className = 'flex m-auto flex-col p-6 gap-5 bg-primary-800 sm:rounded-8 z-10 sm:w-400 w-full'>
                        <div className = 'flex gap-2 flex-col'>
                            <h1 className = 'font-extrabold text-primary-100 sm:text-3xl'>
                                Üdvözöljük,
                            </h1>

                            <p className = 'text-primary-100 flex-wrap text-base'>
                                A belépéssel elfogadja az&nbsp;

                                <a
                                    href = '/privacy-policy.html'
                                    className = 'text-accent hover:text-accent-hover'
                                >
                                    adatvédelmi irányelveinket
                                </a>

                                &nbsp;és a&nbsp;

                                <a 
                                    href = '/terms.html' 
                                    className = 'text-accent hover:text-accent-hover'
                                >
                                    szolgáltatási feltételeinket
                                </a>
                                .
                            </p>
                        </div>

                        <div className = 'flex flex-col gap-4'>
                            <button className = 'bg-primary-700 hover:bg-primary-600 sm:rounded-8 py-3 mt-2 text-button text-base font-bold'>
                                Bejelentkezés
                            </button>

                            <button className = 'bg-primary-700 hover:bg-primary-600 sm:rounded-8 py-3 mt-2 text-button text-base font-bold'>
                                Regisztráció
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
