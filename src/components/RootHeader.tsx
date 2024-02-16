import '@/app/globals.css';

type Item = {
  title: string;
  href: string;
}

const data: Item[] = [ 
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'About',
    href: '/about',
  }
]

export const RootHeader = () => {
  const items = data.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.href}>{item.title}</a>
      </li>
    )
  } )
  return (
    <header className="bg-red-100 w-full flex-row flex justify-between">
      <h1>Tín</h1>
      <nav>
        <ul className="flex flex-row bg-gray-500 gap-4">
          {items}
        </ul>
      </nav>
    </header>
  );
}
