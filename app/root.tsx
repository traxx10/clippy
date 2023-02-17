import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Clippy',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },

  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
  },

  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap',
  },

  { rel: 'stylesheet', href: stylesheet },
];
