import './globals.scss';
import ClientProvider from './ClientProvider';  // For Redux Provider
import QueryProvider from './QueryProvider';    // React Query Provider

export const metadata = {
    title: 'Overreacted Clone',
    description: 'A clone of Dan Abramov\'s blog built with Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
            <ClientProvider>
                <QueryProvider>
                    {children}
                </QueryProvider>
            </ClientProvider>
        </body>
        </html>
    );
}
