import '../globals.css';

export const RootHeader = () => {
  return (
    <header className="h-11 bg-red-100 w-full">
      <h1>My Next.js Website</h1>
      <nav>
        {/* Các liên kết hoặc menu navigation nếu cần */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
