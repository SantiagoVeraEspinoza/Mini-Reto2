import { Meta, Links, Outlet, Scripts, LiveReload } from '@remix-run/react'
import styles from './styles/index.css'
// We call the Index route to get the data from the server
import Index from '~/routes/index.jsx';
import Header from '~/components/header';
import Footer from '~/components/footer';



export function meta() {
  return [
    {
      charset: 'utf-8',
      title: 'MyShop - Remix',
      viewport: 'width=device-width, initial-scale=1'
    }
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'stylesheet',
      href: styles
    }, 
    {
      rel: 'preconect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Mukta:wght@700&family=Roboto+Slab:wght@600&display=swap'
    }
  ]
}

// For the index inyection to work we have to call it on the App component
export default function App() {
  return (
    <Document>
      <Outlet>
        <Index />
      </Outlet>
    

    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
  
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
