import '../input.css'
import Topbar from '@/components/Topbar';

export default function RootLayout({ children }) {

    return (
        <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>PokemonAPI</title>
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
        <Topbar />
        {children}
        </body>
        </html>
    );
}