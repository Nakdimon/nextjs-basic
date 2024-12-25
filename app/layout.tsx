import Link from "next/link";
import Counter from "../components/Counter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h3>Our Header</h3>
        </header>
        {children}
        <footer className="site-footer">
          <p>Our footer</p>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <Counter />
        </footer>
      </body>
    </html>
  );
}
