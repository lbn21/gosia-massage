export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE;
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
      <ul>
        <li>
          <a href={`tel:${phone}`}>WhatsApp</a>
        </li>
        <li>
          <a href="https://www.facebook.com/gosia.massage.wigan">Facebook</a>
        </li>
      </ul>
    </footer>
  );
}
