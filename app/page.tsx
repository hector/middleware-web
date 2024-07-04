import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const headersArray = Array.from(headersList.entries());

  // Sort headersArray by key
  headersArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

  return (
    <div>
      <h1>Middleware web</h1>
      <p>
        Use the query param "rewrite" to rewrite the url using the middleware.
        <br /><br />
        Example 1: Rewrite to Google <br />
        <a href="/?rewrite=https://www.google.com">/?rewrite=https://www.google.com</a>
        <br /><br />
        Example 2: Rewrite to a web that shows the headers received by its server <br />
        <a href="/?rewrite=https://request-headers-web.vercel.app/">/?rewrite=https://request-headers-web.vercel.app/</a>
      </p>

      <br /><br />
      <h3>Request Headers</h3>
      <p>Here are the headers sent to the server to generate this web.</p>
      <ul>
        {headersArray.map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
