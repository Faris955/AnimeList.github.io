import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link href="/" className="font-bold text-2xl">
          ANIME LIST
        </Link>
        <input placeholder="cari anime" />
      </div>
    </header>
  );
};
export default Navbar;
